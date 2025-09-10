import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Brain,
  Globe,
  Code2,
  BookOpen,
  Megaphone,
  Server,
} from "lucide-react";

const services = [
  {
    id: "ai",
    title: "AI Development",
    tagline: "Turning cutting-edge AI into real-world products.",
    icon: Brain,
    description: `We specialize in designing and deploying AI systems that solve practical
business problems. From custom chatbots to fine-tuned LLMs and diffusion models,
we ensure your AI is production-ready.`,
    points: [
      "Custom AI agents for workflows",
      "Fine-tuned LLMs for specific domains",
      "Integration into existing apps",
    ],
  },
  {
    id: "web3",
    title: "Web3 Development",
    tagline: "Secure, scalable, and battle-tested dApps.",
    icon: Globe,
    description: `Our Web3 expertise covers smart contracts, DeFi protocols, NFTs, and DAOs.
We prioritize security, scalability, and optimization — helping you ship safely.`,
    points: [
      "Smart contracts (Solidity, Rust, Cairo)",
      "DeFi/NFT/DAO dApp builds",
      "Security-focused audits and deployment",
    ],
  },
  {
    id: "webdev",
    title: "Web Development",
    tagline: "Modern apps, from idea to deployment.",
    icon: Code2,
    description: `We build robust frontends and backends that connect Web3 and AI into seamless products.
React/Next.js, Rust, Go, or Node.js — polished and scalable.`,
    points: [
      "Responsive, pixel-perfect frontends",
      "Scalable backends (Rust, Go, Node.js)",
      "Full API integration & testing",
    ],
  },
  {
    id: "devrel",
    title: "DevRel & Research",
    tagline: "Making complex tech easy to understand.",
    icon: BookOpen,
    description: `We write blogs, documentation, whitepapers, and research papers for
leading projects — always clear, accessible, and technically accurate.`,
    points: [
      "Technical blogs & docs",
      "Whitepapers & research papers",
      "Developer engagement content",
    ],
  },
  {
    id: "ct",
    title: "Crypto Twitter & Media",
    tagline: "Content + strategy for crypto-native audiences.",
    icon: Megaphone,
    description: `We design content strategies for CT — memes, explainer threads,
AI-generated videos, and community engagement tools.`,
    points: [
      "Twitter content strategy & consultation",
      "Media creation (memes, videos, AI assets)",
      "Engagement tools (mini-games, bots)",
    ],
  },
  {
    id: "deploy",
    title: "Testing & Deployment",
    tagline: "Launch with confidence, every time.",
    icon: Server,
    description: `We set up CI/CD pipelines, containerize apps, and deploy on
cloud/on-chain infra with security and monitoring baked in.`,
    points: [
      "Automated testing pipelines",
      "Cloud & on-chain deployment",
      "Monitoring and optimization",
    ],
  },
];

export default function DetailedServices() {
  return (
    <section id="detailed-services" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
          Detailed Services Breakdown
        </h2>
        <Accordion type="single" collapsible className="space-y-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <AccordionItem
                key={service.id}
                value={service.id}
                className="border rounded-2xl shadow-md bg-gray-50 dark:bg-slate-900 px-4"
              >
                <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                  <div className="flex items-center gap-6 w-full">
                    <Icon className="w-10 h-10 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">
                        {service.title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-base md:text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-base md:text-lg">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-500">•</span> {point}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}