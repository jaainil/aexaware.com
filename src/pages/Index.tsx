/* stylelint-disable */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { ServiceCard } from "@/components/ServiceCard";
import { IndustryCard } from "@/components/IndustryCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Quote,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  PhoneCall,
} from "lucide-react";

const Index = () => {
  const featureHighlights = [
    {
      number: "01",
      eyebrow: "Agile Team",
      title: "Experienced & Agile Team",
      description:
        "Our skilled professionals bring deep expertise in modern technologies and follow agile practices to deliver high-quality solutions efficiently and flexibly.",
    },
    {
      number: "02",
      eyebrow: "Client-First Approach",
      title: "Customer-Centric Approach",
      description:
        "Your goals are our priority. We collaborate closely with you throughout the project to ensure the final product reflects your vision and business objectives.",
    },
    {
      number: "03",
      eyebrow: "Secure & Scalable",
      title: "Scalable & Secure Solutions",
      description:
        "We design robust and secure systems that scale with your business whether it’s a startup MVP or an enterprise-grade platform.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Custom websites and web apps built for performance, scalability, and seamless user experiences.",
      link: "/services",
    },
    {
      number: "02",
      title: "App Development",
      description:
        "Native and cross-platform mobile apps that are fast, functional, and user-friendly.",
      link: "/services",
    },
    {
      number: "03",
      title: "UI/UX Design",
      description:
        "Modern, intuitive interfaces focused on user experience, engagement, and conversion optimization.",
      link: "/services",
    },
    {
      number: "04",
      title: "Software Solutions",
      description:
        "Custom ERP, CRM, and SaaS platforms tailored to streamline and scale your business operations.",
      link: "/services",
    },
    {
      number: "05",
      title: "E-com Development",
      description:
        "High-performance e-commerce sites built to convert visitors into loyal customers.",
      link: "/services",
    },
    {
      number: "06",
      title: "Cloud & DevOps",
      description:
        "Reliable cloud infrastructure and automated DevOps processes for better deployment and scalability.",
      link: "/services",
    },
    {
      number: "07",
      title: "AI/ML Integration",
      description:
        "Smart AI/ML-powered features that automate, analyze, and optimize your business workflows.",
      link: "/services",
    },
  ];

  const industries = [
    {
      number: "01",
      title: "Health Care Tech",
      description:
        "Custom EHR, EMR, ERX, and medical software for hospitals, laboratories, and pharmacies to simplify digital transformation.",
      subtext: "Hospitals · Labs · Pharmacies",
    },
    {
      number: "02",
      title: "EdTech Solutions",
      description:
        "E-learning platforms, LMS, and digital tools that improve access, engagement, and management for educators and learners.",
      subtext: "Schools · Colleges · EdTech Startups",
    },
    {
      number: "03",
      title: "Smart Logistics",
      description:
        "Fleet tracking, supply chain orchestration, and route optimization software for faster, data-driven operations.",
      subtext: "Logistics Providers · Warehousing",
    },
    {
      number: "04",
      title: "Online Marketplaces",
      description:
        "Multi-vendor ecosystems, listing systems, and secure payment gateways that connect vendors and buyers globally.",
      subtext: "B2B · B2C · Niche Platforms",
    },
    {
      number: "05",
      title: "Retail Systems",
      description:
        "POS integrations, omnichannel commerce, and customer engagement tools that boost sales and streamline operations.",
      subtext: "Offline & Online Retail Brands",
    },
    {
      number: "06",
      title: "Travel Platforms",
      description:
        "Booking engines, itinerary planners, and travel management solutions that elevate customer journeys worldwide.",
      subtext: "Agencies · OTAs · Global Travel",
    },
  ];

  const testimonials = [
    {
      quote:
        "Aexaware mapped our entire product vision into a phased roadmap and delivered each release with impeccable quality.",
      author: "Product Lead, SaaS Startup",
    },
    {
      quote:
        "They proactively guided our team on experience design, architecture, and security so we could scale confidently.",
      author: "CTO, Retail Enterprise",
    },
  ];

  const contactLinks = [
    {
      label: "Contact",
      value: "+91 81407 34392",
      href: "tel:+918140734392",
    },
    {
      label: "Work with us",
      value: "+91 81407 34392",
      href: "tel:+918140734392",
    },
    {
      label: "Support",
      value: "support@aexawareinfotech.com",
      href: "mailto:support@aexawareinfotech.com",
    },
  ];

  const socialLinks = [
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com" },
    { label: "Instagram", icon: Instagram, href: "https://www.instagram.com" },
    { label: "X (Twitter)", icon: Twitter, href: "https://www.twitter.com" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <main className="space-y-0">
        {/* Feature Pillars */}
        <section className="bg-card/30 py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                Agile Team · Client-First · Secure & Scalable
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground">
                Your trusted IT innovation partner for modern, resilient digital
                platforms.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {featureHighlights.map((feature) => (
                <FeatureCard key={feature.number} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative overflow-hidden bg-background py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container relative z-10 mx-auto px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                What We Offer
              </p>
              <h2 className="text-4xl font-bold leading-tight text-foreground">
                IT Services That Drive Growth
              </h2>
              <p className="text-lg text-muted-foreground">
                From concept to launch to optimization, our full-stack team
                builds the products and platforms your users love.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.number} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-card py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                Industries We Serve
              </p>
              <h2 className="text-4xl font-bold leading-tight text-foreground">
                Solutions by Industry
              </h2>
              <p className="text-lg text-muted-foreground">
                Purpose-built platforms for healthcare, education, logistics,
                retail, travel, and more.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {industries.map((industry) => (
                <IndustryCard key={industry.number} {...industry} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-background py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mb-12 max-w-3xl text-center mx-auto space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                Client Feedback
              </p>
              <h2 className="text-4xl font-bold text-foreground">
                What Our Clients Say
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="relative flex h-full flex-col gap-6 border-primary/20 bg-card/70 p-8"
                >
                  <Quote className="size-10 text-primary/40" />
                  <p className="text-lg text-foreground leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="text-sm font-semibold text-muted-foreground">
                    {testimonial.author}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-card py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
          <div className="container relative z-10 mx-auto px-6 lg:px-8">
            <Card className="mx-auto max-w-5xl border-primary/30 bg-background/80 p-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                Let’s Bring It to Life
              </p>
              <h2 className="mt-4 text-4xl font-bold text-foreground">
                Book Your Free Expert Consultation Today!
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We help startups and enterprises translate ambitious ideas into
                scalable, secure digital products.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="hero">
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact & Social */}
        <section className="bg-background py-24">
          <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                Looking for something else?
              </p>
              <h2 className="text-4xl font-bold text-foreground">Contact Us</h2>
              <div className="space-y-4">
                {contactLinks.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/70 p-4 transition hover:border-primary/60"
                  >
                    {contact.label === "Support" ? (
                      <Mail className="size-5 text-primary" />
                    ) : (
                      <PhoneCall className="size-5 text-primary" />
                    )}
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        {contact.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                  Follow us
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/60"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <social.icon className="size-4 text-primary" />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                  Join us
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  <a
                    href="mailto:support@aexawareinfotech.com"
                    className="rounded-2xl border border-primary/20 bg-card/70 px-6 py-4 text-left transition hover:border-primary/60"
                  >
                    <p className="text-base font-semibold text-foreground">
                      Apply Now
                    </p>
                    <p className="text-sm text-muted-foreground">
                      support@aexawareinfotech.com
                    </p>
                  </a>
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
