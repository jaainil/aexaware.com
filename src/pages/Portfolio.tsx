/* stylelint-disable */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Portfolio = () => {
  const projects = [
    {
      title: "J K Fertilizers",
      year: "2025",
      category: "Web Development",
      description:
        "A comprehensive digital presence for a leading fertilizer manufacturer, featuring product catalogs and dealer locators.",
      tags: ["React", "Tailwind CSS", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "SV Engineering",
      year: "2025",
      category: "Corporate Website",
      description:
        "Modern corporate website showcasing engineering solutions, project portfolios, and technical capabilities.",
      tags: ["Next.js", "TypeScript", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1581094794329-cd1096a7a438?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Bharat Krushi Bio Fertilizer",
      year: "2025",
      category: "E-Commerce",
      description:
        "Full-featured e-commerce platform for bio-fertilizers with secure payment integration and inventory management.",
      tags: ["Shopify", "Custom Theme", "Liquid"],
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Qreius",
      year: "2025",
      category: "SaaS Platform",
      description:
        "A robust software ecosystem built from the ground up, handling complex data workflows and user management.",
      tags: ["React", "Python", "AWS"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Algogist",
      year: "2025",
      category: "Tech Blog",
      description:
        "A high-performance technical blog and resource hub for developers and algorithm enthusiasts.",
      tags: ["Gatsby", "GraphQL", "MDX"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const faqs = [
    {
      question: "What web development services does your team provide?",
      answer:
        "We provide complete web development solutions including custom website design, front-end and back-end development, WordPress sites, and eCommerce platforms. Our websites are secure, responsive, fast-loading, and built to support your business goals with scalable performance and clean user experience.",
    },
    {
      question: "Do you build Android and iOS mobile applications?",
      answer:
        "Yes, we specialize in developing high-quality mobile applications for both Android and iOS platforms. We use modern cross-platform technologies like React Native and Flutter to ensure a seamless user experience and efficient development process.",
    },
    {
      question: "Can you redesign or improve existing UX/UI designs?",
      answer:
        "Absolutely. We can audit your current design, identify pain points, and create a refreshed, user-centric UI/UX that improves engagement and conversion rates.",
    },
    {
      question: "What technologies do you use in software development?",
      answer:
        "We use a wide range of modern technologies including React, Next.js, Node.js, Python, TypeScript, and cloud services like AWS and Azure, selecting the best stack for each specific project.",
    },
    {
      question: "Do you offer cloud setup and DevOps support?",
      answer:
        "Yes, we provide comprehensive cloud infrastructure setup, migration services, and ongoing DevOps support to ensure your applications are scalable, secure, and reliable.",
    },
    {
      question: "How do you ensure security and scalability?",
      answer:
        "We follow industry best practices for security, including regular audits and secure coding standards. Our architectures are designed to be scalable from day one, utilizing cloud-native solutions that grow with your business.",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
              Our Work
            </span>
            <h1 className="font-serif text-5xl font-medium leading-tight text-foreground md:text-6xl lg:text-7xl mb-8">
              Selected projects & <br className="hidden md:block" />
              <span className="text-primary">success stories.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Explore how we've helped businesses across various industries
              transform their digital presence and achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-background border border-border/50 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="mb-2 text-2xl font-medium text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                FAQ
              </span>
              <h2 className="mt-4 font-serif text-4xl font-medium text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Got questions? We've got answers. If you don't see what you're
                looking for, feel free to reach out.
              </p>
              <Button className="mt-8 rounded-full" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-medium text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            Let’s Bring It to Life
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
            Ready to start your next project? Book your free expert consultation
            today!
          </p>
          <div className="mt-10">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full px-8 h-14 text-lg"
              asChild
            >
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
