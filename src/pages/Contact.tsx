import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
import { Mail, MapPin, Phone } from "lucide-react";
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
      <Navbar />

      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left Column: Copy & Info */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Get in touch
              </span>
              <h1 className="mt-6 font-serif text-5xl font-medium leading-tight text-foreground md:text-6xl">
                Let's start a <br />
                <span className="italic text-muted-foreground">
                  conversation
                </span>
                .
              </h1>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
                Whether you have a concrete project in mind or just a vague
                idea, we're here to listen. No sales pressure, just honest
                advice.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email us</h3>
                    <p className="text-muted-foreground">hello@aexaware.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We usually reply within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Call us</h3>
                    <p className="text-muted-foreground">+91 81407 34392</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mon-Fri, 9am - 6pm IST.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Visit us</h3>
                    <p className="text-muted-foreground">
                      Vadodara, Gujarat, India
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Coffee is on us.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="rounded-3xl bg-secondary/30 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      required
                      className="bg-background border-transparent focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      className="bg-background border-transparent focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">I'm interested in...</Label>
                  <Select name="interest">
                    <SelectTrigger className="bg-background border-transparent focus:border-primary">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="app">Mobile App</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Tell us a bit about your project
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What are you building? What are your goals?"
                    rows={5}
                    required
                    className="bg-background border-transparent focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  We respect your privacy. No spam, ever.
                </p>
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
