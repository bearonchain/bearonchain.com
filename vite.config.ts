import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGFM from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";


// https://vite.dev/config/
export default defineConfig({
  base: "/bearonchain.com/",
  plugins: [react(), tailwindcss(), mdx({
        remarkPlugins: [ remarkGFM, remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
      })],
  server: {
  allowedHosts: ["4f03b00b21fe.ngrok-free.app"], // ⚠️ allows all, fine for dev
  host: true,
  port: 5173,
  proxy: {
    "/rss": "https://bearonchain.github.io/feed.xml",
  },
},
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
