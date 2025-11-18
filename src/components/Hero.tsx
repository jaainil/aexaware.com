import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-24 lg:pt-48 lg:pb-32">
      {/* Organic background shape */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-secondary/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/4 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/50 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm transition-colors hover:bg-white/80">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Accepting new partnerships for Q4
          </div>

          <h1 className="mt-8 font-serif text-5xl font-medium leading-tight text-foreground sm:text-6xl lg:text-7xl">
            We build software that <br className="hidden sm:block" />
            <span className="italic text-muted-foreground">actually</span> works
            for you.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            No jargon, no bloat, just clean code and thoughtful design. We’re
            Aexaware, a digital studio dedicated to turning your complex
            problems into simple, elegant solutions.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-8 text-base"
            >
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-8 text-base bg-transparent border-primary/20 hover:bg-primary/5"
            >
              <Link to="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
