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
  Globe,
  ShieldCheck,
  Zap,
  Layers,
  Cpu,
  Server,
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
              Our Expertise
            </span>
            <h1 className="font-serif text-5xl font-medium leading-tight text-foreground md:text-6xl lg:text-7xl mb-8">
              Digital solutions that <br className="hidden md:block" />
              <span className="text-primary">drive growth.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              We combine creativity with technical excellence to build products
              that transform businesses. From concept to launch, we are your
              partners in innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full px-8 text-lg h-12"
                asChild
              >
                <Link to="/contact">
                  Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-lg h-12"
                asChild
              >
                <a href="#capabilities">Explore Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-medium text-foreground mb-6">
              Core Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer a comprehensive suite of digital services designed to
              meet the evolving needs of modern businesses.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Web Development",
                desc: "Custom websites and web applications built with modern frameworks for speed, scalability, and SEO.",
                tags: ["React", "Next.js", "TypeScript"],
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                desc: "Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android.",
                tags: ["React Native", "Flutter", "iOS/Android"],
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                desc: "User-centric design that blends aesthetics with functionality to create intuitive digital products.",
                tags: ["Figma", "Prototyping", "User Research"],
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                desc: "Secure and scalable cloud infrastructure setup, migration, and management services.",
                tags: ["AWS", "Azure", "DevOps"],
              },
              {
                icon: Database,
                title: "Custom Software",
                desc: "Tailored software solutions to automate processes, improve efficiency, and solve complex business problems.",
                tags: ["Node.js", "Python", "Enterprise"],
              },
              {
                icon: LineChart,
                title: "Digital Marketing",
                desc: "Data-driven marketing strategies to increase brand visibility, traffic, and conversions.",
                tags: ["SEO", "PPC", "Analytics"],
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative bg-background p-8 rounded-3xl border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
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

      {/* Our Solutions - Feature Highlight */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl font-medium text-foreground">
                Solutions tailored to your industry.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that every industry has unique challenges. Our
                team has deep expertise in delivering specialized solutions for
                various sectors.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "E-Commerce",
                    desc: "High-converting online stores with seamless checkout experiences.",
                  },
                  {
                    title: "Healthcare",
                    desc: "HIPAA-compliant applications for patient management and telemedicine.",
                  },
                  {
                    title: "FinTech",
                    desc: "Secure and robust financial platforms for banking and payments.",
                  },
                  {
                    title: "Education",
                    desc: "Interactive learning management systems and educational portals.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary h-fit">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-lg">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-secondary/50 border border-border">
                {/* Abstract representation of industry solutions */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="grid grid-cols-2 gap-4 p-8 h-full">
                  <div className="bg-background rounded-2xl shadow-sm p-6 flex flex-col justify-center items-center text-center">
                    <Globe className="h-10 w-10 text-primary mb-4" />
                    <span className="font-medium">Global Reach</span>
                  </div>
                  <div className="bg-background rounded-2xl shadow-sm p-6 flex flex-col justify-center items-center text-center mt-8">
                    <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                    <span className="font-medium">Secure</span>
                  </div>
                  <div className="bg-background rounded-2xl shadow-sm p-6 flex flex-col justify-center items-center text-center -mt-8">
                    <Zap className="h-10 w-10 text-primary mb-4" />
                    <span className="font-medium">Fast</span>
                  </div>
                  <div className="bg-background rounded-2xl shadow-sm p-6 flex flex-col justify-center items-center text-center">
                    <Layers className="h-10 w-10 text-primary mb-4" />
                    <span className="font-medium">Scalable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-medium mb-16">
            Powered by modern technology.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-80">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Python",
              "PostgreSQL",
              "AWS",
              "Docker",
              "Flutter",
              "Tailwind CSS",
              "Figma",
              "GraphQL",
            ].map((tech, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto bg-background rounded-[2.5rem] p-12 shadow-2xl border border-border/50">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
              Ready to scale your business?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Let's build something amazing together. Contact us today for a
              free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-lg"
                asChild
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10 h-14 text-lg"
                asChild
              >
                <a href="tel:+918140734392">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
