import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogModules from "@/contents/index";
import Navbar from "@/components/Navbar";

interface Post {
  slug: string;
  title: string;
  date: string;
  image?: string;
  categories?: string[];
}

export default function Blog() {
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
          categories: mod.frontmatter?.categories || [],
        });
      }

      loaded.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      setPosts(loaded);
    }

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <section className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">
          Bearonchain <span className="text-cyan-500">Blog</span>
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-lg
                         bg-white/80 dark:bg-slate-900/80 backdrop-blur hover:shadow-xl transition flex flex-col"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {new Date(post.date).toDateString()}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.categories?.map((cat, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded bg-cyan-100 dark:bg-cyan-800 text-cyan-600 dark:text-cyan-200"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}