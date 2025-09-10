import type { Config } from "tailwindcss"

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // ✅ include mdx
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "ui-sans-serif", "system-ui"],
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
      color: theme("colors.gray.800"),
      lineHeight: "1.8",
      maxWidth: "65ch", // ✅ medium blog width
      h1: {
        fontSize: theme("fontSize.4xl")[0],
        marginTop: theme("spacing.8"),
        marginBottom: theme("spacing.6"),
        fontWeight: "800",
      },
      h2: {
  fontSize: theme("fontSize.2xl")[0],
  fontWeight: theme("fontWeight.bold"),
  marginTop: theme("spacing.12"),
  marginBottom: theme("spacing.4"),
},
h3: {
  fontSize: theme("fontSize.xl")[0],
  fontWeight: theme("fontWeight.semibold"),
  marginTop: theme("spacing.8"),
  marginBottom: theme("spacing.3"),
},
      p: {
        marginTop: theme("spacing.4"),
        marginBottom: theme("spacing.4"),
        fontSize: theme("fontSize.lg")[0],
        lineHeight: "1.9",
      },
      strong: {
        fontWeight: "700",
        color: theme("colors.gray.900"),
      },
      a: {
        color: theme("colors.cyan.600"),
        textDecoration: "underline",
      },
      ul: {
        marginTop: theme("spacing.4"),
        marginBottom: theme("spacing.4"),
        paddingLeft: theme("spacing.6"),
      },
      li: {
        marginTop: theme("spacing.2"),
        marginBottom: theme("spacing.2"),
      },
      blockquote: {
        fontStyle: "italic",
        borderLeft: `4px solid ${theme("colors.cyan.500")}`,
        paddingLeft: theme("spacing.4"),
        color: theme("colors.gray.600"),
      },
    },
  },
  dark: {
    css: {
      color: theme("colors.gray.200"),
      strong: { color: theme("colors.white") },
      blockquote: { color: theme("colors.gray.300") },
      a: { color: theme("colors.cyan.400") },
    },
  },
}),    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;