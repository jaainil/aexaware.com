/* stylelint-disable */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero - Personal & Direct */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Our Story
            </span>
            <h1 className="mt-6 font-serif text-5xl font-medium leading-tight text-foreground md:text-6xl lg:text-7xl">
              We’re not just coders. <br />
              We’re{" "}
              <span className="italic text-muted-foreground">partners</span>.
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              Aexaware started with a simple idea: software development
              shouldn't feel like a transaction. It should feel like a
              collaboration. We built this studio to bridge the gap between
              complex technology and the humans who use it.
            </p>
          </div>
        </div>
      </section>

      {/* The "Why" - Narrative Block */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white/50 p-8 md:p-12">
              {/* Abstract visual representation of collaboration */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              <div className="relative h-full w-full rounded-2xl border-2 border-dashed border-primary/10 flex items-center justify-center">
                <span className="font-serif text-2xl text-primary/40 italic">
                  Craftsmanship
                </span>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-4xl font-medium text-foreground">
                Quality over quantity. Always.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In an industry obsessed with scaling fast and breaking things,
                we prefer to move intentionally and build things that last. We
                don't churn out templates. We don't outsource our core work.
                Every line of code is written with purpose.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team is small by design. This allows us to maintain a level
                of quality and personal attention that larger agencies simply
                can't match. When you work with us, you're not just another
                ticket in a queue; you're a partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Human Centric */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-serif text-4xl font-medium text-foreground">
              The principles that guide us.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Transparency First",
                desc: "No hidden fees, no technical jargon designed to confuse. We explain everything in plain English so you're always in the loop.",
              },
              {
                title: "User-Obsessed",
                desc: "We don't build for algorithms; we build for people. If it's not intuitive and enjoyable to use, it's not finished.",
              },
              {
                title: "Long-Term Thinking",
                desc: "We build scalable, maintainable systems that grow with your business, not quick fixes that break in six months.",
              },
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <div className="text-sm font-bold text-accent">0{i + 1}</div>
                <h3 className="text-2xl font-medium text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Culture - "Join Us" Soft Sell */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            Want to build something meaningful?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
            We're always looking for talented designers and developers who share
            our passion for craftsmanship. If you care about the details, we'd
            love to hear from you.
          </p>
          <div className="mt-10">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full px-8"
              asChild
            >
              <a href="mailto:careers@aexaware.com">Say Hello</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
