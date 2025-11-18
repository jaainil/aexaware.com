/* stylelint-disable */
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import Logo from "@/assets/logo 2.svg";
import asciiArt from "@/assets/ascci.txt?raw";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/40 bg-background pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <Link to="/" className="block">
              <img
                src={Logo}
                alt="Aexaware Infotech"
                className="h-10 w-auto opacity-90"
              />
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xs">
              We help startups, enterprises, and businesses transform their
              ideas into cutting-edge digital experiences.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: info@aexaware.com</p>
              <p>Phone: +91 81407 34392</p>
            </div>
            <div className="flex gap-4 pt-4">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full bg-secondary/50 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                "Web Development",
                "App Development",
                "UI/UX Design",
                "Software Solutions",
                "E-com Development",
                "Cloud & DevOps",
                "AI/ML Integration",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {["About Us", "Portfolio", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">
              Join us
            </h4>
            <p className="text-muted-foreground mb-4">
              Looking for something else? Work with us.
            </p>
            <Button asChild className="rounded-full px-6">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <div className="mt-6 text-muted-foreground">
              <p>+91 81407 34392</p>
              <p>support@aexawareinfotech.com</p>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-border/40 pt-8 text-sm text-muted-foreground">
          <p>© 2025 / Aexaware infotech. All rights reserved.</p>
          <div className="flex gap-8">
            <span>VADODARA/IND</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-foreground transition-colors"
            >
              Scroll to Top
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full overflow-hidden flex justify-center opacity-50 pointer-events-none select-none bg-gradient-to-t from-muted/20 to-transparent">
        <pre className="font-mono text-[1.2vw] leading-[1.2vw] whitespace-pre text-muted-foreground">
          {asciiArt}
        </pre>
      </div>
    </footer>
  );
};
