import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogModules from "@/contents/index";

interface Post {
  slug: string;
  title: string;
  date: string;
  image?: string;
}

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const loaded: Post[] = [];

      for (const path in blogModules) {
        const mod: any = await blogModules[path]();

        loaded.push({
          slug: path.split("/").pop()?.replace(".mdx", "") || "",
          title: mod.frontmatter?.title || "Untitled",
          date: mod.frontmatter?.date || "2025-01-01",
          image: mod.frontmatter?.image,
        });
      }

      loaded.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      setPosts(loaded.slice(0, 3));
    }

    loadPosts();
  }, []);

  return (
    <section id="blog" className="py-24 px-6 md:px-12 bg-white dark:bg-slate-950">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Latest <span className="text-cyan-500">Posts</span>
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Thoughts, tutorials, and deep dives from Bearonchain.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="rounded-2xl border border-black/10 dark:border-white/10 shadow-lg
                         bg-white/60 dark:bg-slate-900/60 backdrop-blur hover:shadow-xl transition
                         flex flex-col overflow-hidden"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toDateString()}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500 dark:text-gray-400">
            Loading posts…
          </p>
        )}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/blog"
          className="px-6 py-3 rounded-xl bg-cyan-600 text-white font-medium
                     hover:bg-cyan-700 transition"
        >
          View All Posts
        </Link>
      </div>
    </section>
  );
}