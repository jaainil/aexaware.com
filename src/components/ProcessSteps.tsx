import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation & Roadmap",
      desc: "We start by listening. We analyze your business goals and technical challenges to craft a custom roadmap for scalable growth.",
    },
    {
      number: "02",
      title: "Build & Integrate",
      desc: "Our agile team brings your vision to life using the latest web, mobile, and AI technologies—delivering secure, high-performance code on time.",
    },
    {
      number: "03",
      title: "Support & Evolution",
      desc: "We don’t just launch and leave. We provide ongoing maintenance, optimization, and feature upgrades to ensure your product scales with you.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-foreground">
            From Idea to Impact <br />
            in 3 Steps
          </h2>
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="/contact">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="relative">
          {/* Horizontal Connecting Line with Beam Animation (Desktop) */}
          <div className="absolute top-10 left-0 w-full h-[2px] bg-border hidden md:block overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-beam opacity-75"></div>
          </div>

          {/* Vertical Connecting Line with Beam Animation (Mobile) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-border block md:hidden overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-beam-vertical opacity-75"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold mb-8 border-4 border-border text-muted-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 bg-background">
                  {step.number}
                </div>

                <div className="relative p-8 rounded-3xl transition-all duration-300 h-full border border-transparent bg-secondary/30 hover:bg-card hover:text-card-foreground hover:shadow-xl hover:scale-105 hover:border-primary/20">
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
