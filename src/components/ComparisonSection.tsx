import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "Value Backing",
    qi: "Energy costs (physics-based)",
    usd: "Government trust (policy-based)",
    qiWins: true,
  },
  {
    feature: "Supply Control",
    qi: "Market-driven, demand-responsive",
    usd: "Centralized, arbitrary printing",
    qiWins: true,
  },
  {
    feature: "Intrinsic Value",
    qi: "Energy floor guarantees worth",
    usd: "No intrinsic value backing",
    qiWins: true,
  },
  {
    feature: "Inflation Protection",
    qi: "Energy-proportional emissions",
    usd: "Subject to monetary policy",
    qiWins: true,
  },
  {
    feature: "Transaction Privacy",
    qi: "Cash-like privacy features",
    usd: "Fully traceable, monitored",
    qiWins: true,
  },
  {
    feature: "Stability Mechanism",
    qi: "Physics and economics-based",
    usd: "Central bank interventions",
    qiWins: true,
  },
];

export const ComparisonSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            QI vs USD: <span className="gradient-value bg-clip-text text-transparent">Side by Side</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A clear comparison reveals the fundamental advantages of energy-backed currency
          </p>
        </div>
        
        <Card className="max-w-5xl mx-auto bg-card/50 backdrop-blur-sm border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 text-muted-foreground font-semibold">Feature</th>
                  <th className="text-left p-6 font-semibold">
                    <span className="gradient-energy bg-clip-text text-transparent text-lg">QI</span>
                  </th>
                  <th className="text-left p-6 font-semibold text-muted-foreground text-lg">USD</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => (
                  <tr
                    key={index}
                    className="border-b border-border/50 hover:bg-muted/20 transition-smooth"
                  >
                    <td className="p-6 font-medium">{comparison.feature}</td>
                    <td className="p-6">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{comparison.qi}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{comparison.usd}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};
