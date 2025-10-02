import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Dbamy o czystość Twojego biura
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Profesjonalna firma sprzątająca w Warszawie z ponad 20-letnim doświadczeniem
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("kontakt")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              Zamów wycenę
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("oferta")}
              className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 backdrop-blur-sm"
            >
              Zobacz ofertę
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 text-primary-foreground">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Ponad 20 lat na rynku</span>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Zaufana kadra pracownicza</span>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Nowoczesne maszyny i urządzenia</span>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Wysokiej jakości środki</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
