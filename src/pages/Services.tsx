import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Server, Cloud, Shield, Code, Building, Rocket, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Managed IT & Support",
      description:
        "Proactive monitoring, maintenance, and 24/7 support that keeps your critical systems running smoothly without interruption.",
      link: "/services",
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
      link: "/services",
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
      link: "/services",
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
      link: "/services",
      features: [
        "Custom API development and third-party system integration",
        "Legacy system modernization and data migration",
        "Workflow automation and business process optimization",
      ],
    },
  ];

  const scenarios = [
    {
      icon: Rocket,
      title: "Startups",
      description: "Fast setup, scalable from day one, no upfront infrastructure investment.",
    },
    {
      icon: Building,
      title: "Mid-Market",
      description: "Balance growth and stability with managed services and security oversight.",
    },
    {
      icon: Users,
      title: "Enterprise",
      description: "Full-scale infrastructure management with dedicated support and compliance.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <span className="text-sm font-medium text-primary">
                Comprehensive Infrastructure Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              What We <span className="text-primary">Deliver</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              End-to-end infrastructure services designed for businesses that demand reliability, security, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="space-y-6">
                <ServiceCard {...service} />
                <ul className="pl-6 space-y-4 border-l-2 border-primary/20">
                  {service.features?.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which Service Fits You */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Which Service <span className="text-primary">Fits You?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We tailor our approach based on your company stage and infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <Card
                key={index}
                className="p-8 border-primary/20 bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <scenario.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{scenario.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {scenario.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto p-12 md:p-16 border-primary/20 bg-background/50 backdrop-blur-sm text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Your Infrastructure Roadmap
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a strategy call to discuss your infrastructure challenges and goals. No obligation—just clear, expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
