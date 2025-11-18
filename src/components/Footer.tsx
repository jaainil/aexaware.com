/* stylelint-disable */
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import Logo from "@/assets/logo 2.svg";

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
              Crafting digital experiences with purpose, precision, and a human
              touch.
            </p>
            <div className="flex gap-4">
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
                "Mobile Apps",
                "UI/UX Design",
                "Cloud Solutions",
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
              Newsletter
            </h4>
            <p className="text-muted-foreground mb-4">
              Occasional updates on design, tech, and studio life. No spam.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Email address"
                className="bg-secondary/30 border-transparent focus:border-primary rounded-full px-4"
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-full shrink-0"
              >
                <Mail size={16} />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-border/40 pt-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aexaware Infotech. Made with care.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
