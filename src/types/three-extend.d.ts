declare module "three/examples/jsm/loaders/GLTFLoader" {
  import { Loader, LoadingManager, Group, AnimationClip, Scene } from "three";

  export interface GLTF {
    scene: Scene;
    scenes: Scene[];
    animations: AnimationClip[];
  }

  export class GLTFLoader extends Loader<GLTF> {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: ErrorEvent | unknown) => void
    ): void;
  }
}