import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import Logo from "@/assets/logo 2.svg";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "All Services", path: "/services" },
        { name: "Web Development", path: "/services/web-development" },
        { name: "Mobile App Development", path: "/services/mobile-development" },
        { name: "UI/UX Design", path: "/services/ui-ux-design" },
        { name: "Software Solutions", path: "/services/software-solutions" },
        { name: "E-Commerce", path: "/services/ecommerce" },
        { name: "Cloud & DevOps", path: "/services/cloud-devops" },
        { name: "AI/ML Integration", path: "/services/ai-ml-integration" },
      ],
    },
    { name: "Portfolio", path: "/portfolio" }, // Mapping Pages to Portfolio for now as placeholder
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0" aria-label="Aexaware Infotech Home">
            <img
              src={Logo}
              alt="Aexaware Infotech Logo"
              className="h-8 w-auto transition group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    {link.dropdown ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                          {link.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {link.dropdown.map((item) => (
                              <li key={item.path}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={item.path}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">{item.name}</div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link to={link.path}>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent hover:bg-transparent hover:text-primary focus:bg-transparent data-[active]:bg-transparent",
                            location.pathname === link.path
                              ? "text-foreground font-semibold"
                              : "text-muted-foreground"
                          )}
                        >
                          {link.name}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center shrink-0">
            <Button asChild className="rounded-full px-6">
              <Link to="/contact">
                Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-primary/20 animate-fade-in bg-background/95 backdrop-blur-md absolute top-20 left-0 right-0 px-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="flex flex-col space-y-2">
                    <span className="text-base font-medium text-foreground px-2">{link.name}</span>
                    <div className="pl-4 flex flex-col space-y-2 border-l border-primary/20 ml-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-sm font-medium transition-colors hover:text-primary ${
                            location.pathname === item.path
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-medium transition-colors hover:text-primary ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Button asChild className="w-full mt-4" variant="default">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

