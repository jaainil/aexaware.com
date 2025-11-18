/* stylelint-disable */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="container relative z-10 mx-auto flex flex-col gap-12 px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
              Aexaware Infotech · Trusted IT Innovation Partner
            </div>

            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-primary/60">
                We build what's next
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-[52px] lg:text-[64px] lg:leading-[1.05]">
                Bold ideas deserve refined digital products.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Aexaware Infotech partners with teams that want clean execution,
                measured delivery, and experiences that feel effortless across
                every screen.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact" className="text-base font-semibold">
                  Book a discovery call
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/portfolio" className="text-base font-semibold">
                  Browse recent work
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 rounded-3xl border border-primary/15 bg-card/60 p-6 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Mail className="size-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                    Email
                  </p>
                  <p className="text-base font-medium">info@aexaware.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <PhoneCall className="size-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                    Phone
                  </p>
                  <p className="text-base font-medium">+91 81407 34392</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-primary/10 bg-card/70 p-10 shadow-2xl">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/60">
                Trusted Partner
              </p>
              <h2 className="text-[32px] font-semibold leading-snug text-foreground">
                Quiet confidence. Measured delivery.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transforming ideas into scalable digital solutions with
                experienced teams, a client-first mindset, and secure,
                future-ready engineering.
              </p>
            </div>

            <div className="mt-10 grid gap-5">
              {[
                {
                  number: "01",
                  title: "Experienced & Agile Team",
                  description:
                    "Our skilled professionals bring deep expertise in modern technologies and follow agile practices to deliver high-quality solutions efficiently and flexibly.",
                },
                {
                  number: "02",
                  title: "Customer-Centric Approach",
                  description:
                    "Your goals are our priority. We collaborate closely with you to ensure the final product reflects your vision and business objectives.",
                },
                {
                  number: "03",
                  title: "Scalable & Secure Solutions",
                  description:
                    "We design robust and secure systems that scale with your business whether it’s a startup MVP or an enterprise-grade platform.",
                },
              ].map((feature) => (
                <div
                  key={feature.number}
                  className="rounded-2xl border border-primary/15 bg-background/90 p-5"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.5em] text-primary/60">
                    {feature.number}
                  </div>
                  <p className="mt-3 text-lg font-semibold text-foreground">
                    {feature.title}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
