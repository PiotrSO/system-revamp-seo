import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import serviceOffice from "@/assets/service-office.png";
import serviceBuilding from "@/assets/service-building.png";
import serviceMaintenance from "@/assets/service-maintenance.png";
import serviceSurface from "@/assets/service-surface.png";

const Services = () => {
  const services = [
    {
      title: "Sprzątanie biur",
      description: "Kompleksowe usługi sprzątania pomieszczeń biurowych dostosowane do Twoich potrzeb",
      image: serviceOffice,
      features: ["Mycie podłóg", "Odkurzanie", "Dezynfekcja powierzchni", "Wynoszenie śmieci"]
    },
    {
      title: "Sprzątanie biurowców",
      description: "Profesjonalna obsługa dużych obiektów biurowych i powierzchni komercyjnych",
      image: serviceBuilding,
      features: ["Serwis całodobowy", "Utrzymanie czystości", "Mycie okien", "Czyszczenie elewacji"]
    },
    {
      title: "Serwis sprzątający",
      description: "Stały serwis porządkowy dla firm wymagających regularnej obsługi",
      image: serviceMaintenance,
      features: ["Serwis poranny/wieczorny", "Regularne wizyty", "Elastyczny harmonogram", "Dedykowany opiekun"]
    },
    {
      title: "Sprzątanie powierzchni",
      description: "Czyszczenie i utrzymanie różnych rodzajów powierzchni biurowych",
      image: serviceSurface,
      features: ["Pranie wykładzin", "Czyszczenie tapicerki", "Polerowanie podłóg", "Konserwacja"]
    }
  ];

  return (
    <section id="oferta" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nasza oferta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferujemy kompleksowe usługi sprzątania dostosowane do indywidualnych potrzeb każdego klienta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border bg-card hover:scale-105"
            >
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-secondary flex items-center justify-center">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-32 h-32 object-contain"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-card-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
