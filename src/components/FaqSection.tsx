import { useState } from "react";

const faqs = [
  {
    q: "What services do you provide?",
    a: "We specialize in AI apps, Web3 apps, DevRel support, content strategy, and full-stack web development.",
  },
  {
    q: "Do you offer project-based pricing?",
    a: "Yes, we provide flexible pricing models including project-based pricing, hourly consultation, and end-to-end solutions.",
  },
  {
    q: "How can I get started?",
    a: "Simply reach out through our contact form. We'll get back to you within 24–48 hours to discuss your project.",
  },
  {
    q: "Do you support startups?",
    a: "Absolutely. We often work with early-stage teams to identify MVP scope, clarify product goals, and accelerate time-to-market.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-6">
          {faqs.map((item, idx) => (
            <div key={idx} onClick={() => setOpen(open === idx ? null : idx)} className="cursor-pointer">
              {/* Question bubble */}
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-2xl max-w-lg shadow-md">
                  {item.q}
                </div>
              </div>
              {/* Answer bubble */}
              {open === idx && (
                <div className="flex justify-end mt-3">
                  <div className="bg-slate-200 dark:bg-slate-800 px-4 py-2 rounded-2xl max-w-lg shadow-md text-slate-800 dark:text-slate-200">
                    {item.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}