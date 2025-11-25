/* stylelint-disable */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent!", {
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO
        title="Contact Aexaware Infotech – Let’s Build Together"
        description="Get in touch with Aexaware Infotech for custom web, mobile & AI solutions."
      />
      <Navbar />

      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left Column: Copy & Info */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Contact Us
              </span>
              <h1 className="mt-6 font-serif text-5xl font-medium leading-tight text-foreground md:text-6xl">
                Get in touch <br />
                <span className="italic text-muted-foreground">with us</span>.
              </h1>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
                We Should Talk. Whether you have a concrete project in mind or
                just a vague idea, we're here to listen.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <a
                      href="mailto:info@aexaware.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@aexaware.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <a
                      href="tel:+918140734392"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 81407 34392
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Address</h3>
                    <p className="text-muted-foreground max-w-xs">
                      Office no 13, 3rd Floor Aarya’s landmark, Canal Ring Road,
                      Sevasi Vadodara, Gujarat 391101
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      Working Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Mon – Fri : 9AM – 6PM
                    </p>
                    <p className="text-muted-foreground">Sat : 10AM - 12AM</p>
                    <p className="text-muted-foreground">Sun : Closed</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium text-foreground mb-4">
                    Follow us
                  </h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, href: "#" },
                      { icon: Instagram, href: "#" },
                      { icon: Twitter, href: "#" },
                      { icon: Facebook, href: "#" },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      >
                        <social.icon className="size-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="rounded-[2.5rem] bg-secondary/30 p-8 md:p-12 border border-border/50">
              <h2 className="text-2xl font-medium mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-background border-transparent focus:border-primary h-12"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="bg-background border-transparent focus:border-primary h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 ..."
                      className="bg-background border-transparent focus:border-primary h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select name="subject">
                    <SelectTrigger className="bg-background border-transparent focus:border-primary h-12">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="project">Start a Project</SelectItem>
                      <SelectItem value="career">Join the Team</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help you?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                    className="bg-background border-transparent focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full text-lg h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
