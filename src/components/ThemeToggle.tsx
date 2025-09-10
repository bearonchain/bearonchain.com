import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setIsDark(stored === "dark");
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div
      onClick={toggle}
      className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-slate-700 cursor-pointer flex items-center justify-between px-2"
    >
      {/* Icons */}
      <span className="text-xs">🌙</span>
      <span className="text-xs">☀️</span>

      {/* Sliding dot */}
      <div
        className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </div>
  );
}