import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Logo from "@/assets/logo 2.svg";
import asciiArt from "@/assets/ascci.txt?raw";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40 bg-background pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 mb-16">
          {/* Brand Section - Spans 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="block w-fit">
              <img
                src={Logo}
                alt="Aexaware Infotech"
                className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              We help startups, enterprises, and businesses transform their
              ideas into cutting-edge digital experiences.
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Github, label: "GitHub", href: "#" },
                {
                  icon: Mail,
                  label: "Email",
                  href: "mailto:info@aexaware.com",
                },
              ].map(({ icon: Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex size-9 items-center justify-center rounded-full bg-secondary/50 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-medium text-foreground mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Web Development", path: "/services/web-development" },
                { name: "App Development", path: "/services/mobile-development" },
                { name: "UI/UX Design", path: "/services/ui-ux-design" },
                { name: "Software Solutions", path: "/services/software-solutions" },
                { name: "E-com Development", path: "/services/ecommerce" },
                { name: "Cloud & DevOps", path: "/services/cloud-devops" },
                { name: "AI/ML Integration", path: "/services/ai-ml-integration" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <ArrowRight className="mr-2 h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    <span className="transition-transform group-hover:translate-x-1">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company - Spans 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg font-medium text-foreground mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {["About", "Portfolio", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <ArrowRight className="mr-2 h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    <span className="transition-transform group-hover:translate-x-1">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA - Spans 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="font-serif text-lg font-medium text-foreground mb-6">
                Contact Us
              </h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <a
                  href="mailto:info@aexaware.com"
                  className="flex items-center gap-3 hover:text-foreground transition-colors group"
                >
                  <div className="flex size-8 items-center justify-center rounded-full bg-secondary/30 group-hover:bg-primary/10 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span>info@aexaware.com</span>
                </a>
                <a
                  href="tel:+918140734392"
                  className="flex items-center gap-3 hover:text-foreground transition-colors group"
                >
                  <div className="flex size-8 items-center justify-center rounded-full bg-secondary/30 group-hover:bg-primary/10 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span>+91 81407 34392</span>
                </a>
                <div className="flex items-center gap-3 group">
                  <div className="flex size-8 items-center justify-center rounded-full bg-secondary/30 transition-colors">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span>
                    Office no 13, 3rd Floor Aarya’s landmark, Canal Ring Road,
                    Sevasi Vadodara, Gujarat 391101
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-secondary/20 p-5 border border-border/50 backdrop-blur-sm">
              <h4 className="font-medium text-foreground mb-1">
                Join our team
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                We are always looking for talent.
              </p>
              <Button
                asChild
                className="w-full rounded-full h-9 text-xs"
                variant="outline"
              >
                <Link to="/contact">
                  Apply Now <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Aexaware Infotech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-foreground transition-colors ml-2"
            >
              Scroll to Top
            </button>
          </div>
        </div>
      </div>

      {/* ASCII Art Background */}
      <div className="mt-12 w-full overflow-hidden flex justify-center opacity-30 pointer-events-none select-none bg-gradient-to-t from-muted/20 to-transparent">
        <pre className="font-mono text-[1.7vw] leading-[1.5vw] whitespace-pre text-muted-foreground">
          {asciiArt}
        </pre>
      </div>
    </footer>
  );
};
