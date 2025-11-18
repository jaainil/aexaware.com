import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-orbital.jpg";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple fade-in animation using CSS
    const elements = document.querySelectorAll(".animate-element");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("animate-fade-up");
      }, index * 150 + 300);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Orbital infrastructure"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-10">
        <div className="floating-orb absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
        <div className="floating-orb absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-secondary/20 blur-3xl" />
        <div className="floating-orb absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full bg-primary/15 blur-3xl" />
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-20 container mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="animate-element inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Enterprise Infrastructure Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-element text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Infrastructure engineered for your{" "}
            <span className="text-primary relative">
              next orbit
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C50 1.5 150 1.5 199 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="animate-element text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We design, deploy, and maintain the cloud, DevOps, and security systems your business can't afford to lose.
          </p>

          {/* CTA Buttons */}
          <div className="animate-element flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book a Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-element pt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
            <div className="flex items-center space-x-3 px-4 py-2 rounded-lg border border-primary/20 bg-primary/5">
              <span className="text-primary font-bold text-base">99.9%</span>
              <span className="text-muted-foreground">Uptime SLA</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-2 rounded-lg border border-primary/20 bg-primary/5">
              <span className="text-primary font-bold text-base">24/7</span>
              <span className="text-muted-foreground">Support</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-2 rounded-lg border border-primary/20 bg-primary/5">
              <span className="text-primary font-bold text-base whitespace-nowrap">SOC 2</span>
              <span className="text-muted-foreground">Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
