import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-energy.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 gradient-subtle opacity-80 z-0" />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-6 py-2 mb-8 animate-pulse">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-medium">World's First Energy-Backed Currency</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Why <span className="gradient-energy bg-clip-text text-transparent">QI</span> is Better <br />
          Than <span className="text-muted-foreground">USD</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          The future of money is here. QI is backed by energy—the most fundamental resource in our economy—providing real stability and value that fiat currencies can't match.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="group">
            Discover the Difference
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
