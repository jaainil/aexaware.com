import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Rocket,
  Users,
  CheckCircle2,
  Code2,
  BarChart3,
  Globe,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
              About Aexaware Infotech
            </span>
            <h1 className="font-serif text-5xl font-medium leading-tight text-foreground md:text-6xl lg:text-7xl mb-8">
              Strategic Innovation. <br className="hidden md:block" />
              <span className="text-primary">Flawless Execution.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              We are a full-service digital agency dedicated to helping
              businesses grow in the digital world. From custom web design to
              data-driven marketing, we provide end-to-end solutions that drive
              real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full px-8 text-lg h-12"
                asChild
              >
                <a href="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-lg h-12"
                asChild
              >
                <a href="#story">Our Story</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="story" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-3xl shadow-lg hidden md:block max-w-xs">
                <p className="font-serif text-2xl font-medium mb-2">100%</p>
                <p className="text-sm opacity-90">
                  Client Satisfaction Commitment
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-4xl font-medium text-foreground">
                More than just a development studio.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Aexaware Infotech, strategic planning and precise execution
                  are at the core of every solution we deliver. We understand
                  that every business is unique, which is why we tailor our
                  approach to meet your specific goals and challenges.
                </p>
                <p>
                  We aren't just service providers; we are your digital growth
                  partners. Whether it's crafting a stunning UI/UX, developing
                  robust software, or executing a high-ROI digital marketing
                  campaign, our team is dedicated to elevating your online
                  presence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { icon: Globe, label: "Web Development" },
                  { icon: Code2, label: "Software Solutions" },
                  { icon: Users, label: "UI/UX Design" },
                  { icon: BarChart3, label: "Digital Marketing" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-medium text-foreground mb-6">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-muted-foreground">
              We are driven by a commitment to excellence and a passion for
              innovation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "We deliver strategic, expertly crafted 360° digital solutions seamlessly executed to drive measurable ROI and ensure 100% client satisfaction.",
              },
              {
                icon: Lightbulb,
                title: "Our Vision",
                desc: "To be the best result-oriented digital marketing agency known to empower businesses in achieving their goals through a holistic approach to brand marketing.",
              },
              {
                icon: Rocket,
                title: "Our Values",
                desc: "Committed to delivering innovative, reliable & efficient digital solutions that empower businesses to grow, adapt & succeed in a rapidly changing modern world.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process (New Section) */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-medium mb-6">
                How We Work
              </h2>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                We believe in a transparent, collaborative process that keeps
                you involved at every step. From the initial spark of an idea to
                the final launch, we ensure precision and quality.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full"
                asChild
              >
                <a href="/contact">Start Your Project</a>
              </Button>
            </div>
            <div className="grid gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  desc: "We dive deep into your business goals to create a roadmap for success.",
                },
                {
                  step: "02",
                  title: "Design & Development",
                  desc: "Our experts craft intuitive designs and robust code tailored to your needs.",
                },
                {
                  step: "03",
                  title: "Testing & Launch",
                  desc: "Rigorous quality assurance ensures a flawless deployment to the world.",
                },
                {
                  step: "04",
                  title: "Growth & Optimization",
                  desc: "We monitor performance and iterate to maximize your ROI continuously.",
                },
              ].map((phase, i) => (
                <div
                  key={i}
                  className="flex gap-6 items-start p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm"
                >
                  <span className="text-3xl font-serif font-bold opacity-50">
                    {phase.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{phase.title}</h3>
                    <p className="opacity-80 text-sm leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team (New Section) */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-foreground mb-6">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The creative minds and technical experts behind Aexaware Infotech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="group text-center">
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden bg-secondary">
                  <img
                    src={`https://i.pravatar.cc/400?img=${i + 10}`}
                    alt="Team Member"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">
                  Team Member {i + 1}
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Specialist
                </p>
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
              Let’s Bring It to Life
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Ready to transform your digital presence? Book your free expert
              consultation today and let's discuss how we can help you achieve
              your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-lg"
                asChild
              >
                <a href="/contact">Book Free Consultation</a>
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

export default About;
