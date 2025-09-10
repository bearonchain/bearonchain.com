import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Scroll to hash if present in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200); // small delay so it works after navigation
      }
    }
  }, [location]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto">
      <nav className="mx-auto flex items-center justify-between rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur px-5 py-3 shadow-lg">
        {/* Logo */}
        <a href="/" className="font-bold text-lg flex items-center gap-2">
          <img
            src="/images/logo-light.png"
            className="h-6 dark:hidden"
            alt="Bearonchain logo"
          />
          <img
            src="/images/logo-light.png"
            className="h-6 hidden dark:block"
            alt="Bearonchain logo dark"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-4 items-center">
          <a
            href="/#services"
            className="px-3 py-1 rounded-xl text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            Services
          </a>
          <a
            href="/blog"
            className="px-3 py-1 rounded-xl text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            Blog
          </a>
          <a
            href="/#contact"
            className="px-3 py-1 rounded-xl text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            Contact
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <button className="sm:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-slate-900 rounded-2xl shadow-lg flex flex-col gap-4 p-6 sm:hidden">
            <a href="/#services" onClick={() => setOpen(false)}>
              Services
            </a>
            <a href="/blog" onClick={() => setOpen(false)}>
              Blog
            </a>
            <a href="/#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
            <ThemeToggle />
          </div>
        )}
      </nav>
    </div>
  );
}