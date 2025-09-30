import { Card } from "@/components/ui/card";
import { Zap, Shield, TrendingUp, Users } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Energy-Backed Value",
    description: "QI's value is tied to energy costs—the most fundamental resource. Unlike USD's arbitrary printing, QI has intrinsic worth based on physics and economics.",
    gradient: "gradient-energy",
  },
  {
    icon: Shield,
    title: "Inherent Stability",
    description: "Energy backing creates a natural value floor. While fiat currencies fluctuate based on policy decisions, QI remains stable through its direct relationship with energy.",
    gradient: "gradient-value",
  },
  {
    icon: TrendingUp,
    title: "Responsive Supply",
    description: "QI's supply expands with demand, maintaining stability while enabling scale. No artificial scarcity or inflationary printing—just market-driven equilibrium.",
    gradient: "gradient-energy",
  },
  {
    icon: Users,
    title: "Privacy & Utility",
    description: "Built for daily use with cash-like privacy features and fixed denominations. QI is designed for transactions, not speculation.",
    gradient: "gradient-value",
  },
];

export const AdvantagesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The <span className="gradient-energy bg-clip-text text-transparent">QI Advantage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes QI fundamentally superior to traditional fiat currencies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-smooth group hover:scale-105"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${advantage.gradient} flex items-center justify-center mb-6 group-hover:glow-primary transition-smooth`}
                >
                  <Icon className="w-7 h-7 text-background" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
