/* stylelint-disable */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      <Hero />

      <main>
        {/* Philosophy / Intro */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <h2 className="font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
                  We believe technology should feel{" "}
                  <span className="italic text-muted-foreground">human</span>.
                </h2>
              </div>
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In a world of cookie-cutter templates and automated responses,
                  we take a different approach. We’re a team of craftsmen who
                  care deeply about the details—the way a button clicks, the
                  speed of a page load, the clarity of a line of copy.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don't just build websites or apps; we build relationships.
                  We work with a select group of clients to ensure every project
                  gets the attention it deserves. No assembly lines, no
                  outsourcing, just honest work.
                </p>
                <div className="pt-4">
                  <Button
                    variant="link"
                    className="p-0 text-lg font-medium text-primary hover:text-accent"
                    asChild
                  >
                    <Link to="/about">
                      Read more about our philosophy{" "}
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Editorial Layout */}
        <section className="bg-secondary/30 py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mb-16 md:mb-24">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                What we do
              </span>
              <h2 className="mt-4 font-serif text-4xl font-medium text-foreground md:text-5xl">
                Hand-crafted digital solutions.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Web Development",
                  desc: "Fast, accessible, and beautiful websites built with modern tools like React and Tailwind.",
                },
                {
                  title: "Application Design",
                  desc: "Complex functionality wrapped in simple, intuitive interfaces that users actually enjoy using.",
                },
                {
                  title: "Brand Identity",
                  desc: "More than just a logo. We help define your voice, your look, and your story in the digital space.",
                },
                {
                  title: "E-Commerce",
                  desc: "Online stores that convert. Smooth checkouts, easy management, and delightful shopping experiences.",
                },
                {
                  title: "Custom Software",
                  desc: "Have a unique problem? We build bespoke tools to streamline your operations and save you time.",
                },
                {
                  title: "Consultancy",
                  desc: "Not sure where to start? We offer honest advice and technical strategy to guide your next move.",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl bg-background p-8 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-secondary text-lg font-serif font-medium text-primary">
                    {i + 1}
                  </div>
                  <h3 className="mb-3 text-xl font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Work / Industries - List Layout */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end mb-16">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Who we help
                </span>
                <h2 className="mt-4 font-serif text-4xl font-medium text-foreground md:text-5xl">
                  Industries we know inside out.
                </h2>
              </div>
              <Button variant="outline" className="rounded-full" asChild>
                <Link to="/portfolio">View all projects</Link>
              </Button>
            </div>

            <div className="divide-y divide-border">
              {[
                {
                  name: "Healthcare & Medicine",
                  detail:
                    "Patient portals, telemedicine, and practice management.",
                },
                {
                  name: "Education & EdTech",
                  detail:
                    "LMS platforms, student dashboards, and interactive learning.",
                },
                {
                  name: "Logistics & Supply Chain",
                  detail:
                    "Fleet tracking, inventory systems, and route optimization.",
                },
                {
                  name: "Retail & E-Commerce",
                  detail:
                    "Custom storefronts, POS integrations, and loyalty programs.",
                },
                {
                  name: "Travel & Hospitality",
                  detail:
                    "Booking engines, itinerary planners, and guest experiences.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between transition-colors hover:bg-secondary/20 px-4 -mx-4 rounded-xl"
                >
                  <h3 className="text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-4 md:gap-8">
                    <p className="text-muted-foreground md:text-right">
                      {item.detail}
                    </p>
                    <ArrowUpRight className="size-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Simple & Clean */}
        <section className="bg-primary text-primary-foreground py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 flex justify-center">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="size-5 fill-accent text-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="font-serif text-3xl font-medium leading-snug md:text-4xl lg:text-5xl">
                "Aexaware didn't just build us a website; they helped us clarify
                our entire business model. The level of care and thought they
                put into every pixel is unmatched."
              </blockquote>
              <div className="mt-12">
                <cite className="not-italic">
                  <span className="block text-lg font-semibold">
                    Sarah Jenkins
                  </span>
                  <span className="block text-primary-foreground/70">
                    Product Lead, SaaS Startup
                  </span>
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Organic */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary/50 px-6 py-24 text-center sm:px-16">
              {/* Decorative blobs */}
              <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white blur-3xl opacity-60" />
              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl opacity-60" />

              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl">
                  Ready to build something real?
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  No sales pitches, no pressure. Just a friendly chat about your
                  project and how we can help.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="h-14 rounded-full px-8 text-lg"
                    asChild
                  >
                    <Link to="/contact">Let's Talk</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 rounded-full px-8 text-lg bg-transparent"
                    asChild
                  >
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
