/* stylelint-disable */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Database,
  LineChart,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
                <div className="text-4xl font-serif text-primary/20 font-bold">
                  01
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  Strategic Planning
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't just build; we plan. Every project starts with a deep
                  dive into your goals to ensure our solutions drive real
                  business value.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-serif text-primary/20 font-bold">
                  02
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  Precise Execution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of experts delivers pixel-perfect designs and robust
                  code, ensuring your project is launched on time and within
                  budget.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-serif text-primary/20 font-bold">
                  03
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  Continuous Growth
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We build scalable systems that grow with you. From MVP to
                  enterprise, we are your long-term partners in digital success.
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
                  icon: Code2,
                  title: "Web Development",
                  desc: "Custom websites and web apps built for performance, scalability, and seamless user experiences.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Apps",
                  desc: "Native and cross-platform mobile apps that are fast, functional, and user-friendly.",
                },
                {
                  icon: Palette,
                  title: "UI/UX Design",
                  desc: "Modern, intuitive interfaces focused on user experience, engagement, and conversion optimization.",
                },
                {
                  icon: Cloud,
                  title: "Cloud Solutions",
                  desc: "Reliable cloud infrastructure and automated DevOps processes for better deployment and scalability.",
                },
                {
                  icon: Database,
                  title: "Custom Software",
                  desc: "Tailored software solutions to automate processes, improve efficiency, and solve complex business problems.",
                },
                {
                  icon: LineChart,
                  title: "Digital Marketing",
                  desc: "Data-driven marketing strategies to increase brand visibility, traffic, and conversions.",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl bg-background p-8 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="size-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary hover:text-accent"
                    asChild
                  >
                    <Link to="/services">
                      Read More <ArrowRight className="ml-2 size-4" />
                    </Link>
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
                <Link to="/services">View all solutions</Link>
              </Button>
            </div>

            <div className="divide-y divide-border">
              {[
                {
                  name: "Health Care Tech",
                  detail:
                    "Custom EHR, EMR, and telemedicine solutions that simplify digital transformation for hospitals and clinics.",
                },
                {
                  name: "EdTech Solutions",
                  detail:
                    "Scalable e-learning platforms and LMS that improve access and engagement for educators and students.",
                },
                {
                  name: "Smart Logistics",
                  detail:
                    "Fleet tracking and supply chain software for faster, more efficient operations and route planning.",
                },
                {
                  name: "E-Commerce & Retail",
                  detail:
                    "High-converting online stores and POS integrations that boost sales and enhance customer experiences.",
                },
                {
                  name: "FinTech",
                  detail:
                    "Secure and robust financial platforms for banking, payments, and investment management.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-4 py-8 md:flex-row md:items-start md:justify-between transition-colors hover:bg-secondary/20 px-4 -mx-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-serif text-primary/40 font-bold">
                      0{i + 1}
                    </span>
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

        {/* Testimonials - Carousel */}
        <section className="bg-primary text-primary-foreground py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mb-16 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
                Testimonials
              </span>
              <h2 className="mt-4 font-serif text-4xl font-medium md:text-5xl">
                Trusted by innovative businesses.
              </h2>
            </div>

            <div className="mx-auto max-w-5xl">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {[
                    {
                      quote:
                        "We partnered with Aexaware to bring our vision of a modern e-commerce platform to life. From design to deployment, they handled everything with precision. The site not only looks great but also scales smoothly as our customer base grows.",
                      author: "Pavan D.",
                      role: "Zeck Switches",
                    },
                    {
                      quote:
                        "Aexaware built and deployed our software ecosystem from the ground up. They took charge of everything—website development, infrastructure setup, and scaling strategies. The result was a robust, secure, and future-proof platform.",
                      author: "Rajan R.",
                      role: "Qreius.com",
                    },
                    {
                      quote:
                        "We needed an e-commerce solution that was both functional and easy for our customers to use. Aexaware delivered exactly that. Their team guided us from concept to a fully operational online store, ensuring smooth deployment and ongoing reliability.",
                      author: "Arvind S.",
                      role: "Bharat Krushi Biofertilizer",
                    },
                    {
                      quote:
                        "The team at Aexaware is simply outstanding. They understood our complex requirements and delivered a custom software solution that has streamlined our operations significantly. Their attention to detail and commitment to quality are commendable.",
                      author: "Meera K.",
                      role: "TechInnovate Solutions",
                    },
                  ].map((testimonial, i) => (
                    <CarouselItem
                      key={i}
                      className="pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="flex h-full flex-col justify-between rounded-3xl bg-primary-foreground/5 p-8 backdrop-blur-sm">
                        <div>
                          <div className="mb-6 flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className="size-4 fill-accent text-accent"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <blockquote className="text-lg leading-relaxed text-primary-foreground/90">
                            "{testimonial.quote}"
                          </blockquote>
                        </div>
                        <div className="mt-8 border-t border-primary-foreground/10 pt-6">
                          <cite className="not-italic">
                            <span className="block font-semibold">
                              {testimonial.author}
                            </span>
                            <span className="block text-sm text-primary-foreground/60">
                              {testimonial.role}
                            </span>
                          </cite>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="mt-12 flex justify-center gap-4">
                  <CarouselPrevious className="static translate-y-0 hover:bg-primary-foreground/10 hover:text-primary-foreground" />
                  <CarouselNext className="static translate-y-0 hover:bg-primary-foreground/10 hover:text-primary-foreground" />
                </div>
              </Carousel>
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
