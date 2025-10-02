import { Award, Users, Sparkles, Wrench } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Award,
      title: "Ponad 20 lat na rynku",
      description: "Długoletnie doświadczenie, profesjonalizm i odpowiedzialność pozwoliły nam na zdobycie zaufania klientów na terenie całego kraju."
    },
    {
      icon: Users,
      title: "Zaufana kadra pracownicza",
      description: "Jesteśmy wiarygodni i uczciwi. Pracuje dla nas zespół pracowników od lat związany z naszą firmą. Ręczymy za ich sprawiedliwość."
    },
    {
      icon: Sparkles,
      title: "Wysoki poziom usług",
      description: "Doświadczenie pracowników i kadry kierowniczej gwarantuje wysoką jakość świadczonych przez nas usług. Wszyscy są doskonale wyszkoleni."
    },
    {
      icon: Wrench,
      title: "Nowoczesne maszyny",
      description: "Posiadamy profesjonalne maszyny i urządzenia renomowanych producentów: NILFISK, COMAC, Kaercher, Numatic oraz wysokiej jakości środki chemiczne."
    }
  ];

  return (
    <section id="dlaczego-my" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dlaczego warto wybrać System Serwis?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jesteśmy profesjonalną firmą sprzątającą w Warszawie, która wyróżnia się na rynku dzięki kompleksowej obsłudze i indywidualnemu podejściu do każdego klienta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
