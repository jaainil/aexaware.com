import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export const SmartSolutions = () => {
  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Images */}
          <div className="relative h-[600px] w-full hidden lg:block">
            <div className="absolute top-0 left-0 w-[70%] h-[80%] rounded-[100px] overflow-hidden border-4 border-background shadow-2xl z-10">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop"
                alt="IT Professional"
                loading="lazy"
                width="600"
                height="750"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-[100px] overflow-hidden border-4 border-background shadow-2xl z-20">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
                alt="Team Collaboration"
                loading="lazy"
                width="500"
                height="500"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6 text-foreground">
              Smart, Secure, & Scalable <br />
              Solutions For It Technology
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We combine innovation with reliability to deliver IT solutions that
              scale with your business. Our team brings deep technical expertise,
              fast response times, and a commitment to security and performance.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Experienced IT Professionals",
                "Scalable Technology Stack",
                "End-to-End Support",
                "Agile & Future-Ready Approach",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild className="rounded-full px-8 h-12">
              <Link to="/contact">
                Contact Us <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
