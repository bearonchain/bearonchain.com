import { useEffect, useState } from "react";

const services = [
  {
    id: "ai",
    title: "AI Development",
    desc: "Custom AI agents, fine-tuned models, and automation pipelines tailored to your product.",
    img: "ai.png",
  },
  {
    id: "web3",
    title: "Web3 Development",
    desc: "Smart contracts, dApps, token utilities, and full-stack blockchain apps built for scale.",
    img: "web3.png",
  },
  {
    id: "devrel",
    title: "DevRel & Documentation",
    desc: "Technical blogs, whitepapers, and research content that simplify complex systems.",
    img: "devrel.png",
  },
  {
    id: "ct",
    title: "Crypto Twitter & Media",
    desc: "Content strategy, AI-powered visuals, and simple tools for community engagement.",
    img: "ct.png",
  },
];

export default function ServicesCarousel() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    // detect dark/light via <html class="dark">
    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains("dark")) {
        setMode("dark");
      } else {
        setMode("light");
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 px-6 md:px-12">
      {/* Headline */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          What We <span className="text-cyan-500">Offer</span>
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          From AI systems and Web3 infrastructure to technical content and
          crypto-native media, we help founders and teams bring their ideas
          to life with clarity and execution.
        </p>
      </div>

      {/* Carousel */}
      <div className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative min-w-[95%] sm:min-w-[70%] lg:min-w-[60%] aspect-video rounded-3xl overflow-hidden snap-center shadow-xl"
          >
            {/* Background */}
            <img
              src={`/images/services/${mode}/${service.img}`}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-8">
              <h3 className="text-xl sm:text-3xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-gray-200 text-sm sm:text-lg max-w-2xl">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}