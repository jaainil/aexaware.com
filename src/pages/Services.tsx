/* stylelint-disable */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Server,
  Cloud,
  Shield,
  Code,
  Sparkles,
  Layers,
  Database,
  Smartphone,
  ShoppingBag,
  Brain,
  Building,
  Rocket,
  Users,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Managed IT & Support",
      description:
        "Proactive monitoring, maintenance, and 24/7 support that keeps your critical systems running smoothly without interruption.",
      link: "/services#managed-it",
      features: [
        "24/7 monitoring with proactive alerts and rapid response",
        "Help desk support and user onboarding assistance",
        "Backup and disaster recovery planning",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "Modern infrastructure automation, CI/CD pipelines, and cloud optimization for faster, more reliable deployments.",
      link: "/services#cloud-devops",
      features: [
        "Infrastructure as code with automated scaling and deployment",
        "Cloud cost optimization and performance tuning",
        "Container orchestration and microservices architecture",
      ],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Enterprise security frameworks, vulnerability management, and compliance solutions for SOC 2, HIPAA, and GDPR.",
      link: "/services#security",
      features: [
        "Security audits, penetration testing, and incident response",
        "Compliance documentation and regulatory alignment",
        "Employee security training and awareness programs",
      ],
    },
    {
      icon: Code,
      title: "Custom Software & Integrations",
      description:
        "Tailored solutions, API development, and system integrations designed for your unique business requirements.",
      link: "/services#custom-engineering",
      features: [
        "Custom API development and third-party system integration",
        "Legacy system modernization and data migration",
        "Workflow automation and business process optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Native and cross-platform applications with delightful UX, seamless performance, and modern feature sets.",
      link: "/services#apps",
      features: [
        "iOS and Android native experiences",
        "Cross-platform builds using React Native / Flutter",
        "Publishing, analytics, and lifecycle management",
      ],
    },
    {
      icon: Sparkles,
      title: "Experience Design (UI/UX)",
      description:
        "Strategic research, UX mapping, and modern interface design that elevates every user journey.",
      link: "/services#uiux",
      features: [
        "User research, persona development, and journey mapping",
        "Design systems, component libraries, and prototypes",
        "Conversion optimization and accessibility audits",
      ],
    },
    {
      icon: Database,
      title: "Software Solutions (ERP/CRM)",
      description:
        "Custom ERP, CRM, and internal tools engineered to automate operations and centralize intelligence.",
      link: "/services#software-solutions",
      features: [
        "ERP/CRM customization and integration",
        "Data migration, warehousing, and reporting",
        "Workflow automation and governance",
      ],
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Engineering",
      description:
        "Headless storefronts, marketplaces, and omnichannel commerce optimized for conversion and retention.",
      link: "/services#ecommerce",
      features: [
        "Platform builds on Shopify, Magento, and custom stacks",
        "Multi-vendor marketplace experiences",
        "Payment, fulfillment, and loyalty integrations",
      ],
    },
    {
      icon: Brain,
      title: "AI/ML Enablement",
      description:
        "Intelligent automations, data models, and copilots that unlock new efficiencies across your value chain.",
      link: "/services#ai-ml",
      features: [
        "Use-case discovery and ROI analysis",
        "Model development, training, and evaluation",
        "Deployment, monitoring, and responsible AI guardrails",
      ],
    },
    {
      icon: Layers,
      title: "Product Strategy & PMO",
      description:
        "Fractional product leadership, roadmapping, and delivery governance to keep releases on track.",
      link: "/services#product",
      features: [
        "Roadmap and release planning",
        "Design/engineering squad orchestration",
        "KPIs, analytics, and iteration cadences",
      ],
    },
  ];

  const deliveryHighlights = [
    {
      title: "Discovery to Launch",
      description:
        "Product audits, roadmaps, and iterative delivery with stakeholder workshops every sprint.",
    },
    {
      title: "Managed Delivery Pods",
      description:
        "Cross-functional squads with engineering, design, QA, and PM coverage embedded into your org.",
    },
    {
      title: "Continuous Optimization",
      description:
        "Post-launch enhancements, observability, and growth experiments to sustain momentum.",
    },
  ];

  const industries = [
    {
      icon: Rocket,
      title: "Startups",
      description:
        "Fast setup, scalable from day one, no upfront infrastructure investment.",
    },
    {
      icon: Building,
      title: "Mid-Market",
      description:
        "Balance growth and stability with managed services and security oversight.",
    },
    {
      icon: Users,
      title: "Enterprise",
      description:
        "Full-scale infrastructure management with dedicated support and compliance.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              Complete Digital Product Services
            </div>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Services that move your{" "}
              <span className="text-primary">business forward</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              From concept to scale, Aexaware Infotech delivers the engineering,
              experience design, and operations you need to launch faster and
              grow smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mb-16 flex flex-col gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
              Capabilities
            </p>
            <h2 className="text-4xl font-bold leading-tight text-foreground">
              Build, launch, and optimize with confidence
            </h2>
            <p className="text-lg text-muted-foreground">
              A single partner for strategy, product, design, engineering,
              DevOps, and growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="space-y-6">
                <div className="rounded-3xl border border-primary/20 bg-card/70 p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                      <service.icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-sm text-primary/80">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-sm font-semibold text-primary"
                  >
                    Explore offering →
                  </Link>
                </div>

                <ul className="space-y-4 rounded-3xl border border-dashed border-primary/20 bg-background/80 p-6">
                  {service.features?.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery philosophy */}
      <section className="bg-card py-24">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[0.8fr,1.2fr] lg:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
              How we deliver
            </p>
            <h2 className="text-4xl font-bold leading-tight text-foreground">
              Orchestrated teams, measurable outcomes
            </h2>
            <p className="text-lg text-muted-foreground">
              We blend onshore strategy with offshore execution to bring
              experienced product minds, designers, and engineers into a single
              pod aligned to your roadmap.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {deliveryHighlights.map((highlight) => (
              <Card
                key={highlight.title}
                className="h-full border-primary/20 bg-background/80 p-6"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement fit */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-12 max-w-3xl text-center mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
              Engagement fit
            </p>
            <h2 className="text-4xl font-bold leading-tight text-foreground">
              Who we serve
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you are validating an MVP or modernizing enterprise
              systems, we adapt to your velocity and governance needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {industries.map((segment) => (
              <Card
                key={segment.title}
                className="border-primary/20 bg-card/80 p-8 text-center"
              >
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  <segment.icon className="size-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {segment.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {segment.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="mx-auto max-w-4xl border-primary/20 bg-background/70 p-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
              Let’s plan your next release
            </p>
            <h2 className="mt-4 text-4xl font-bold text-foreground">
              Build smarter, move faster
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Share your goals—our solution architects will craft a sprint-based
              plan with transparent milestones, resourcing, and budgets.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View Case Studies</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
