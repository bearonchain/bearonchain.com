import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Group, AnimationMixer, Box3, Vector3 } from "three";

interface BearProps {
  src: string;
}

export function Loader({ src }: BearProps) {
  const groupRef = useRef<Group>(null);
  const mixerRef = useRef<AnimationMixer | null>(null);

  // ⚠️ Do NOT add cache-busting here. Let useGLTF handle caching.
  // Instead we’ll force reload with key in Hero.tsx
  const { scene, animations } = useGLTF(src);

  // Normalize scale + position
  useEffect(() => {
    if (scene && groupRef.current) {
      const cloned = scene.clone(true);

      // Compute bounding box of the model
      const box = new Box3().setFromObject(cloned);
      const size = box.getSize(new Vector3());

      // Normalize to consistent height
      const targetHeight = 5;
      const scale = targetHeight / size.y;

      groupRef.current.scale.setScalar(scale);

      // Center model so feet are at ground level
      const center = box.getCenter(new Vector3());
      groupRef.current.position.set(
        -center.x * scale,
        -box.min.y * scale,
        -center.z * scale
      );

      // Replace group’s children with the new clone
      groupRef.current.clear();
      groupRef.current.add(cloned);
    }
  }, [scene]);

  // Set up animations
  useEffect(() => {
    if (groupRef.current && animations.length > 0) {
      mixerRef.current = new AnimationMixer(groupRef.current);
      const action = mixerRef.current.clipAction(animations[0]);
      action.reset().fadeIn(0.3).play();
    }
    return () => {
      mixerRef.current?.stopAllAction();
      mixerRef.current = null;
    };
  }, [animations]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
  });

  return <group ref={groupRef} />;
}