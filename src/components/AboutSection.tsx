import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-28 flex items-center justify-center"
    >
      <div className="text-center max-w-4xl px-6">
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
          Building{" "}
          <span className="text-cyan-500">Web3 & AI products</span> for teams
          and founders
        </h2>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We’re a freelance developer collective focused on designing, building,
          and scaling projects in blockchain and AI.  
          From smart contracts and dApps to custom AI agents and dev tools, we
          help you turn ideas into working products without the overhead of a
          full-time team.
        </p>

        <p className="mt-6 text-md text-gray-700 dark:text-gray-400 max-w-2xl mx-auto italic">
          Bearonchain is an initiative by{" "}
          <span className="font-semibold">Sudharsanan</span>,  
          a developer with 7+ years of experience in blockchain and AI, created
          to make it easier for teams and founders to access reliable, flexible
          technical expertise.
        </p>

        <div className="mt-10">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg"
          >
            Work With Us
          </Button>
        </div>
      </div>
    </section>
  );
}