import { useParams } from "react-router-dom";
import blogModules from "@/contents/index";
import Navbar from "@/components/Navbar";
import React from "react";
import Prism from "prismjs";

// Prism core + themes
import "prismjs/themes/prism-tomorrow.css";

// Languages
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";

// Plugins
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/toolbar/prism-toolbar.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";
import "prismjs/plugins/show-language/prism-show-language.js";

export default function Post() {
  const { slug } = useParams();
  if (!slug) return <p className="py-24 text-center">Post not found</p>;

  const key = `./${slug}.mdx`;
  const Module = blogModules[key] as any;
  if (!Module) return <p className="py-24 text-center">Post not found</p>;

  const [Component, setComponent] = React.useState<React.ComponentType | null>(null);
  const [frontmatter, setFrontmatter] = React.useState<any>({});

  React.useEffect(() => {
    async function load() {
      const mod = await Module();
      setComponent(() => mod.default);
      setFrontmatter(mod.frontmatter || {});
    }
    load();
  }, [Module]);

  React.useEffect(() => {
    Prism.highlightAll();
  }, [Component]);

  if (!Component) return <p className="py-24 text-center">Loading post…</p>;

  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 md:px-0 pt-28 pb-24">
        {/* Header */}
        {frontmatter.image && (
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="w-full h-72 object-cover rounded-2xl mb-8 shadow-lg"
          />
        )}

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          {frontmatter.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm">
          {frontmatter.date
            ? new Date(frontmatter.date).toDateString()
            : "Unknown date"}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {Array.isArray(frontmatter.categories) &&
            frontmatter.categories.map((cat: string, idx: number) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-100 to-blue-200 dark:from-cyan-800 dark:to-blue-900 text-cyan-700 dark:text-cyan-200 font-medium"
              >
                {cat}
              </span>
            ))}
        </div>

        {/* Blog Content */}
        <div
          className="
            prose prose-lg dark:prose-invert max-w-3xl mx-auto
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:mt-12 prose-headings:mb-6
            prose-p:my-6 prose-p:leading-relaxed text-gray-800 dark:text-gray-200
            prose-li:my-3 prose-li:leading-relaxed prose-li:marker:text-cyan-500
            prose-ul:my-6 prose-ol:my-6
            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-10
            prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-500 dark:prose-figcaption:text-gray-400 prose-figcaption:mt-3
            prose-pre:my-10 prose-pre:overflow-x-auto prose-pre:rounded-xl
            prose-code:font-mono prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300 prose-blockquote:my-10
          "
        >
          {/* ✅ wrap MDX with line-numbers */}
          <div className="line-numbers">
            <Component />
          </div>
        </div>
      </article>
      
    </div>
  );
}