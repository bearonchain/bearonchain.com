import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background images */}
      <img
        src="/images/hero-light.png"
        alt="Bearonchain Mascot Light"
        className="absolute inset-0 w-full h-full object-cover object-center dark:hidden"
      />
      <img
        src="/images/hero-dark.png"
        alt="Bearonchain Mascot Dark"
        className="absolute inset-0 w-full h-full object-cover object-center hidden dark:block"
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

      {/* Bottom row content */}
      <div className="relative z-10 flex w-full mt-auto justify-between px-8 pb-12">
        {/* Left side (headline) */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-xl max-w-lg"
        >
          Your bear buddy <br /> for{" "}
          <span className="text-cyan-400">Web3 & AI</span> projects
        </motion.h1>

        {/* Right side (subtitle + CTA) */}
        <div className="text-right max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-xl text-white/90 mb-4"
          >
            Freelance dev group helping you build in Web3 × AI <br />
            with code, content, and consulting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-end"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg transition"
            >
              Get a Quote
            </a>
            <a
              href="#work"
              className="px-6 py-3 rounded-xl bg-white/80 text-slate-900 font-semibold hover:bg-white transition"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}