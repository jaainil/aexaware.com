import { Button } from "@/components/ui/button";
import { ArrowUpRight, Code, Smartphone, Cloud, Brain } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesGrid = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight max-w-xl text-foreground">
            Scalable Solutions <br />
            for Every Stage
          </h2>
          <Button asChild variant="default" className="rounded-full px-6 h-12">
            <Link to="/services">
              View All Services <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 h-full">
            {/* Top Card (Large) */}
            <div className="flex-1 bg-card border border-border rounded-3xl p-8 flex flex-col justify-between group hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Custom Web & Software</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Build secure, scalable web portals, SaaS platforms, and enterprise software tailored to your specific business workflows.
                </p>
                <Link to="/services" className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                  Learn More <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
            {/* Bottom Card (Small) */}
            <div className="h-1/3 bg-secondary/50 rounded-3xl p-8 flex flex-col justify-center group hover:bg-secondary/70 transition-colors">
               <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center mb-3 text-primary">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-foreground">Mobile App Development</h3>
              <p className="text-muted-foreground text-xs">
                Native and hybrid mobile apps designed for speed, performance, and seamless user experiences on iOS and Android.
              </p>
            </div>
          </div>

          {/* Column 2 (Center Image) */}
          <div className="md:col-span-1 h-full">
            <div className="h-full w-full rounded-3xl overflow-hidden relative group border border-border">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
                alt="Global Connectivity" 
                loading="lazy"
                width="400"
                height="600"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 h-full">
             {/* Top Card (Small) */}
             <div className="h-1/3 bg-secondary/50 rounded-3xl p-8 flex flex-col justify-center group hover:bg-secondary/70 transition-colors">
               <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center mb-3 text-primary">
                <Cloud className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-foreground">Cloud & DevOps</h3>
              <p className="text-muted-foreground text-xs">
                Automate your infrastructure with secure cloud solutions and CI/CD pipelines for faster, reliable deployment.
              </p>
            </div>
            {/* Bottom Card (Large) */}
            <div className="flex-1 bg-secondary/50 rounded-3xl p-8 flex flex-col justify-end group hover:bg-secondary/70 transition-colors">
               <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center mb-4 text-primary">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">AI & ML Integration</h3>
              <p className="text-muted-foreground text-sm">
                Future-proof your business with intelligent automation, predictive analytics, and custom machine learning models that drive smarter decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
