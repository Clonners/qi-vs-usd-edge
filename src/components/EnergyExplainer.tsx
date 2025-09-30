import { Card } from "@/components/ui/card";
import { Activity, TrendingUp, Users } from "lucide-react";

export const EnergyExplainer = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How <span className="gradient-energy bg-clip-text text-transparent">Energy-Backing</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            QI's revolutionary emission mechanism creates a direct mathematical relationship between energy costs and token supply
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-primary" />
                  Energy-Proportional Emissions
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  QI rewards are issued in direct proportion to the energy (hash) difficulty required to mine blocks. When mining becomes more energy-intensive, QI rewards increase proportionally to compensate miners. When energy costs decrease, QI rewards decrease accordingly.
                </p>
                <div className="bg-muted/30 rounded-lg p-6 border border-border">
                  <code className="text-primary font-mono">Block Reward (QI) ∝ Difficulty</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Each QI token represents approximately the same amount of energy, regardless of when it was mined
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp className="w-5 h-5" />
                    <h4 className="font-semibold">Rising Difficulty</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    More energy needed → Higher QI rewards → Maintains energy-value relationship
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-secondary">
                    <Activity className="w-5 h-5" />
                    <h4 className="font-semibold">Falling Difficulty</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Less energy needed → Lower QI rewards → Preserves stability
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex items-start gap-4 mb-6">
              <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Market-Driven Supply</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unlike traditional cryptocurrencies with predetermined supply schedules or fiat currencies with arbitrary printing, QI's supply responds dynamically to actual market conditions and usage patterns.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h4 className="font-semibold text-primary mb-2">Miner-Selected Emissions</h4>
                <p className="text-sm text-muted-foreground">
                  Miners choose between Quai or QI rewards based on market conditions, ensuring supply reflects actual demand
                </p>
              </div>
              
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
                <h4 className="font-semibold text-secondary mb-2">Token Conversions</h4>
                <p className="text-sm text-muted-foreground">
                  Anyone can convert between QI and Quai at the current mining reward ratio, fine-tuning supply based on utility demand
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
