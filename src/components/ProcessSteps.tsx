import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ProcessSteps = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const steps = gsap.utils.toArray<HTMLElement>(".process-step");
    
    steps.forEach((step, i) => {
      gsap.fromTo(step,
        { 
          opacity: 0, 
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animate header
    gsap.from(".process-header", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".process-header",
        start: "top 80%",
      }
    });

  }, { scope: containerRef });

  const steps = [
    {
      number: "01",
      title: "Consultation & Roadmap",
      desc: "We start by listening. We analyze your business goals and technical challenges to craft a custom roadmap for scalable growth.",
      features: ["Requirement Analysis", "Tech Stack Selection", "Strategic Planning"],
    },
    {
      number: "02",
      title: "Build & Integrate",
      desc: "Our agile team brings your vision to life using the latest web, mobile, and AI technologies—delivering secure, high-performance code on time.",
      features: ["Agile Development", "CI/CD Implementation", "Quality Assurance"],
    },
    {
      number: "03",
      title: "Support & Evolution",
      desc: "We don’t just launch and leave. We provide ongoing maintenance, optimization, and feature upgrades to ensure your product scales with you.",
      features: ["24/7 Monitoring", "Performance Tuning", "Feature Scaling"],
    },
  ];

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-slate-950 text-white">
      {/* Deep Space Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="process-header text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">
              The Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 mb-6">
            From Idea to Impact
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A seamless, transparent process designed to transform your vision into a digital reality.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          

          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`process-step relative flex flex-col md:flex-row gap-8 md:gap-16 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Step Number Node */}
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-slate-950 border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.4)] z-10 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-blue-400">{step.number}</span>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 md:pl-0">
                  <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    {/* Holographic Gradient Hover */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative z-10">
                      
                      <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-blue-200 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                        {step.desc}
                      </p>

                      <ul className="space-y-3">
                        {step.features.map((feature, f) => (
                          <li key={f} className="flex items-center gap-3 text-sm text-slate-300 group-hover:text-white transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 group-hover:text-blue-300 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] rounded-full transition-all" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Empty spacer for the other side */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center relative z-10">
          <Button
            size="lg"
            className="h-16 rounded-full px-10 text-lg bg-white text-slate-950 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            asChild
          >
            <Link to="/contact">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
