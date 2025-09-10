import {
  FileText,
  MonitorSmartphone,
  Blocks,
  Bot,
  ClipboardList,
  Users,
} from "lucide-react";

const pricing = [
  {
    title: "Content & Docs",
    desc: "Technical blogs, documentation, whitepapers, and research content that explain complex systems clearly.",
    price: "$10 – $50/hr",
    icon: FileText,
    gradient: "from-cyan-200 to-blue-200 dark:from-cyan-600 dark:to-blue-600",
  },
  {
    title: "Web Development",
    desc: "Frontend (React, Next.js, Tauri) and backend (Rust, Go, Node.js) apps built production-ready.",
    price: "$30 – $70/hr",
    icon: MonitorSmartphone,
    gradient: "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
  },
  {
    title: "Web3 Development",
    desc: "Smart contracts, DeFi protocols, NFTs, and scalable blockchain infrastructure.",
    price: "$60 – $200/hr",
    icon: Blocks,
    gradient: "from-purple-200 to-fuchsia-200 dark:from-purple-600 dark:to-fuchsia-600",
  },
  {
    title: "AI Development & Research",
    desc: "Custom AI agents, fine-tuning LLMs, automation pipelines, and technical research.",
    price: "$60 – $200/hr",
    icon: Bot,
    gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
  },
  {
    title: "Project-Based Pricing",
    desc: "For clients who prefer fixed budgets, we scope out deliverables and offer clear, project-based pricing.",
    price: "Custom Quote",
    icon: ClipboardList,
    gradient: "from-indigo-200 to-sky-200 dark:from-indigo-600 dark:to-sky-600",
  },
  {
    title: "End-to-End Consultation",
    desc: "From strategy to deployment, we work closely with you to design, build, and scale your product end-to-end.",
    price: "Custom Package",
    icon: Users,
    gradient: "from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 px-6 md:px-12 bg-white dark:bg-slate-950"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Flexible <span className="text-cyan-500">Pricing</span>
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Our pricing adapts to your needs — from hourly contributions to full
          project builds and long-term partnerships.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pricing.map((plan) => {
          const Icon = plan.icon;
          return (
            <div
              key={plan.title}
              className={`rounded-2xl shadow-lg hover:shadow-2xl transition 
                         flex flex-col items-center p-8 text-center
                         bg-gradient-to-br ${plan.gradient}`}
            >
              <Icon className="w-12 h-12 mb-6 text-slate-800 dark:text-white" />
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                {plan.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-200 mb-6 text-sm">
                {plan.desc}
              </p>
              <span className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                {plan.price}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}