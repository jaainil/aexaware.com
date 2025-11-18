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
            <div className="grid gap-12 md:grid-cols-3">
              <div className="space-y-4">
                <div className="text-4xl font-serif text-primary/20 font-bold">01</div>
                <h3 className="text-xl font-medium text-foreground">Experienced & Agile Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our skilled professionals bring deep expertise in modern technologies and follow agile practices to deliver high-quality solutions efficiently and flexibly.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-serif text-primary/20 font-bold">02</div>
                <h3 className="text-xl font-medium text-foreground">Customer-Centric Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your goals are our priority. We collaborate closely with you throughout the project to ensure the final product reflects your vision and business objectives.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-serif text-primary/20 font-bold">03</div>
                <h3 className="text-xl font-medium text-foreground">Scalable & Secure Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We design robust and secure systems that scale with your business whether it’s a startup MVP or an enterprise-grade platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Editorial Layout */}
        <section className="bg-secondary/30 py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mb-16 md:mb-24">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                What We Offer
              </span>
              <h2 className="mt-4 font-serif text-4xl font-medium text-foreground md:text-5xl">
                IT Services That Drive Growth
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Web Development",
                  desc: "Custom websites and web apps built for performance, scalability, and seamless user experiences.",
                },
                {
                  title: "App Development",
                  desc: "Native and cross-platform mobile apps that are fast, functional, and user-friendly.",
                },
                {
                  title: "UI/UX Design",
                  desc: "Modern, intuitive interfaces focused on user experience, engagement, and conversion optimization.",
                },
                {
                  title: "Software Solutions",
                  desc: "Custom ERP, CRM, and SaaS platforms tailored to streamline and scale your business operations.",
                },
                {
                  title: "E-com Development",
                  desc: "High-performance e-commerce sites built to convert visitors into loyal customers.",
                },
                {
                  title: "Cloud & DevOps",
                  desc: "Reliable cloud infrastructure and automated DevOps processes for better deployment and scalability.",
                },
                {
                  title: "AI/ML Integration",
                  desc: "Smart AI/ML-powered features that automate, analyze and optimize your business workflows.",
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
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-accent">
                    Read More <ArrowRight className="ml-2 size-4" />
                  </Button>
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
                  Industries We Serve
                </span>
                <h2 className="mt-4 font-serif text-4xl font-medium text-foreground md:text-5xl">
                  Solutions by Industry
                </h2>
              </div>
              <Button variant="outline" className="rounded-full" asChild>
                <Link to="/portfolio">View all projects</Link>
              </Button>
            </div>

            <div className="divide-y divide-border">
              {[
                {
                  name: "Health Care Tech",
                  detail:
                    "Custom EHR, EMR, ERX, and other software solutions for healthcare and medicine. We help established businesses such as hospitals, laboratories, and pharmacies, create turnkey products and simplify digital transformation.",
                },
                {
                  name: "EdTech Solutions",
                  detail:
                    "E-learning platforms, LMS, and digital tools for schools, colleges, and EdTech startups. We develop scalable, user-friendly learning systems that improve access, engagement, and management for educators, institutions, and students.",
                },
                {
                  name: "Smart Logistics",
                  detail:
                    "Smart logistics, fleet tracking, and supply chain software for faster, more efficient operations. Our custom logistics platforms streamline route planning, shipment tracking, and inventory management for logistics providers and warehousing businesses.",
                },
                {
                  name: "Online Marketplaces",
                  detail:
                    "Multi-vendor marketplaces, product listing systems, and secure payment gateways for B2B and B2C commerce. We create seamless, scalable marketplaces that enable vendors and customers to connect, transact, and grow—across industries and geographies.",
                },
                {
                  name: "Retail Systems",
                  detail:
                    "E-commerce stores, POS integrations, and customer engagement tools for online and offline retailers. We empower retail brands with technology that boosts sales, streamlines operations, and enhances the customer shopping experience.",
                },
                {
                  name: "Travel Platforms",
                  detail:
                    "Booking engines, itinerary planners, and travel management tools for agencies and platforms. We build modern, user-centric travel tech solutions that simplify planning, enhance bookings, and improve customer experiences globally.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-4 py-8 md:flex-row md:items-start md:justify-between transition-colors hover:bg-secondary/20 px-4 -mx-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-serif text-primary/40 font-bold">0{i + 1}</span>
                    <h3 className="text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex items-start gap-4 md:gap-8 max-w-2xl">
                    <p className="text-muted-foreground md:text-right leading-relaxed">
                      {item.detail}
                    </p>
                    <ArrowUpRight className="size-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 mt-1" />
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
                  Let’s Bring It to Life
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Book Your Free Expert Consultation Today!
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="h-14 rounded-full px-8 text-lg"
                    asChild
                  >
                    <Link to="/contact">Get Free Consultation</Link>
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
