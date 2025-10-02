import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      content: "ul. Puławska 303, 02-785 Warszawa",
      link: "https://maps.google.com/?cid=17436311761024461218"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "22 549 40 80",
      link: "tel:+48225494080"
    },
    {
      icon: Mail,
      title: "Email",
      content: "biuro@system-serwis.eu",
      link: "mailto:biuro@system-serwis.eu"
    },
    {
      icon: Clock,
      title: "Godziny pracy",
      content: "Pn-Pt: 8:00 - 18:00",
      link: null
    }
  ];

  return (
    <section id="kontakt" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jesteśmy gotowi odpowiedzieć na Twoje pytania i przygotować bezpłatną wycenę
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = info.link ? (
              <a 
                href={info.link} 
                className="text-primary hover:text-primary/80 transition-colors"
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {info.content}
              </a>
            ) : (
              <span className="text-card-foreground">{info.content}</span>
            );

            return (
              <Card key={index} className="text-center bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{info.title}</h3>
                  <div className="text-sm">{content}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-4xl mx-auto bg-card border-border">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  SYSTEM SERWIS Sp. z o.o.
                </h3>
                <p className="text-muted-foreground mb-6">
                  Skorzystaj z naszych usług i przekonaj się, dlaczego tysiące firm w Warszawie i okolicach nam ufa. 
                  Oferujemy kompleksowe rozwiązania sprzątające dostosowane do Twoich potrzeb.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-card-foreground">Siedziba firmy</p>
                      <a 
                        href="https://maps.google.com/?cid=17436311761024461218"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        ul. Puławska 303, 02-785 Warszawa
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-card-foreground">Zadzwoń do nas</p>
                      <a 
                        href="tel:+48225494080"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        22 549 40 80
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-secondary/50 rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Potrzebujesz wyceny?
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Skontaktuj się z nami telefonicznie lub mailowo, aby otrzymać bezpłatną wycenę dostosowaną do Twoich potrzeb.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                      <a href="tel:+48225494080">
                        <Phone className="w-4 h-4 mr-2" />
                        Zadzwoń
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10">
                      <a href="mailto:biuro@system-serwis.eu">
                        <Mail className="w-4 h-4 mr-2" />
                        Napisz
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
