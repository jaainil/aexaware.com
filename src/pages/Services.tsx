/* stylelint-disable */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Database,
  LineChart,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "We build fast, responsive websites that look great on any device. From simple landing pages to complex web applications, we write clean code that scales.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Need an app for iOS or Android? We create native-feeling experiences that users love, using modern cross-platform technologies to save you time and money.",
      tags: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Design is more than just making things pretty. We focus on usability and user experience, ensuring your product is intuitive and solves real problems.",
      tags: ["Figma", "Prototyping", "User Research", "Design Systems"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Move your business to the cloud securely. We handle server setup, deployment pipelines, and infrastructure management so you can focus on growth.",
      tags: ["AWS", "Azure", "DevOps", "CI/CD"],
    },
    {
      icon: Database,
      title: "Custom Software",
      description:
        "Off-the-shelf software not cutting it? We build bespoke internal tools, CRMs, and automation scripts tailored exactly to your business workflows.",
      tags: ["Node.js", "Python", "SQL", "API Integration"],
    },
    {
      icon: LineChart,
      title: "Digital Strategy",
      description:
        "Technology is an investment. We help you plan your digital roadmap, choose the right tech stack, and optimize your online presence for maximum ROI.",
      tags: ["Consulting", "SEO", "Analytics", "Growth"],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Our Expertise
            </span>
            <h1 className="mt-6 font-serif text-5xl font-medium leading-tight text-foreground md:text-6xl lg:text-7xl">
              Everything you need to <br />
              <span className="italic text-muted-foreground">thrive</span>{" "}
              online.
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              We don't believe in one-size-fits-all solutions. Whether you're a
              startup looking for an MVP or an enterprise needing a system
              overhaul, we tailor our services to fit your specific goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-3xl bg-background p-8 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="mb-6 inline-flex rounded-2xl bg-secondary p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="size-6" />
                  </div>
                  <h3 className="mb-3 text-2xl font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Simple Steps */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-medium text-foreground">
              How we work together.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              No black boxes. We keep our process simple and transparent so you
              always know where your project stands.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-4 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We listen. We learn about your business, your users, and your goals.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "We plan. We define the scope, the tech stack, and the timeline.",
              },
              {
                step: "03",
                title: "Build",
                desc: "We code. We design. We build your product with regular updates.",
              },
              {
                step: "04",
                title: "Launch",
                desc: "We deliver. We test, deploy, and support you as you go live.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-background pt-4 md:pt-0">
                <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold mx-auto md:mx-0">
                  {item.step}
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2 md:text-left text-center">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-center md:text-left">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
            Let's discuss how we can help bring your vision to life. No
            commitment, just a conversation.
          </p>
          <div className="mt-10">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full px-8 h-14 text-lg"
              asChild
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
