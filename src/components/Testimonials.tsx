import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "M S",
      rating: 5,
      text: "Od czterech lat korzystamy z tej firmy sprzątającej i nie zawiedli nas ani razu. Zawsze punktualni i robią świetną robotę.",
      date: "2 lata temu"
    },
    {
      name: "Patryk Pisarski",
      rating: 5,
      text: "Polecam serdecznie. Bardzo profesjonalna, solidna, dokładna i terminowa firma. Mają profesjonalny sprzęt sprzątający i naprawdę bardzo szybko i sprawnie uporali się z posprzątaniem całego biura.",
      date: "2 lata temu"
    },
    {
      name: "Piotr Sobotka",
      rating: 5,
      text: "Najlepsza firma sprzątająca w Warszawie! Staranność, terminowość, dobry kontakt z klientem. Szczerze polecam!",
      date: "2 lata temu"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Opinie naszych klientów
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.3</span>
          </div>
          <p className="text-muted-foreground">Na podstawie opinii Google</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
