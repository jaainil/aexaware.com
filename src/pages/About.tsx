/* stylelint-disable */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  const services = [
    { number: "01", title: "UI/UX design" },
    { number: "02", title: "Web development" },
    { number: "03", title: "Software Solutions" },
    { number: "04", title: "Cloud & DevOps" },
  ];

  const pillars = [
    {
      number: "01",
      title: "Our Mission",
      description:
        "We deliver strategic, expertly crafted 360° digital solutions seamlessly executed to drive measurable ROI and ensure 100% client satisfaction.",
    },
    {
      number: "02",
      title: "Our Vision",
      description:
        "To be the best result-oriented digital partner known for empowering businesses with a holistic approach to marketing and technology.",
    },
    {
      number: "03",
      title: "Our Value",
      description:
        "Committed to innovative, reliable, and efficient digital solutions that help businesses grow, adapt, and succeed in a rapidly changing world.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
              About Us
            </p>
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Who we are
            </h1>
            <p className="text-lg text-muted-foreground">
              At Aexaware Infotech, strategic planning and precise execution are
              at the core of every solution we deliver—tailored to each client’s
              unique goals and business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Studio intro */}
      <section className="bg-card py-16">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight text-foreground">
              We are a creative development studio
            </h2>
            <p className="text-lg text-muted-foreground">
              Aexaware Infotech is a full-service digital agency dedicated to
              helping businesses grow in the digital world. From custom web
              design and app development to branding, digital marketing, and
              content strategy, we provide end-to-end solutions that elevate
              your online presence and drive real results.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-background/80 p-8">
            <div className="grid gap-6">
              {services.map((service) => (
                <Card
                  key={service.number}
                  className="border-none bg-card/80 p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                      {service.number}
                    </span>
                    <span className="text-sm font-medium text-primary/70">
                      Read More
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
              Our Approach
            </p>
            <h2 className="text-4xl font-bold text-foreground">
              Crafting impactful digital experiences
            </h2>
            <p className="text-lg text-muted-foreground">
              Aexaware Infotech is a digital agency delivering expert solutions
              in web development, branding, UI/UX, SEO, and digital
              strategy—driving growth through innovation since day one.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card
                key={pillar.number}
                className="border-primary/20 bg-card/80 p-8"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                  {pillar.number}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="mx-auto max-w-4xl border-primary/20 bg-background/70 p-12 text-center">
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
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-background py-24">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
              Looking for something else?
            </p>
            <h2 className="text-4xl font-bold text-foreground">Contact Us</h2>
            <div className="space-y-4">
              {["Contact", "Work with us", "Support"].map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/70 p-4"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {label}
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      {label === "Support"
                        ? "support@aexawareinfotech.com"
                        : "+91 81407 34392"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                Follow us
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {["LinkedIn", "Instagram", "X (Twitter)", "Facebook"].map(
                  (social) => (
                    <button
                      key={social}
                      className="rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-foreground"
                    >
                      {social}
                    </button>
                  )
                )}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                Join us
              </p>
              <div className="mt-4 rounded-2xl border border-primary/20 bg-card/70 px-6 py-4">
                <p className="text-base font-semibold text-foreground">
                  Apply Now
                </p>
                <p className="text-sm text-muted-foreground">
                  support@aexawareinfotech.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
