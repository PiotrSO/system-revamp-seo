import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <img src={logo} alt="System Serwis - Rzetelna Firma" className="h-12 md:h-14 w-auto" />

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("o-nas")} className="text-foreground hover:text-primary transition-colors">
              O nas
            </button>
            <button onClick={() => scrollToSection("oferta")} className="text-foreground hover:text-primary transition-colors">
              Oferta
            </button>
            <button onClick={() => scrollToSection("dlaczego-my")} className="text-foreground hover:text-primary transition-colors">
              Dlaczego my
            </button>
            <button onClick={() => scrollToSection("kontakt")} className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </button>
            <Button onClick={() => scrollToSection("kontakt")} className="bg-primary hover:bg-primary/90">
              <Phone className="w-4 h-4 mr-2" />
              Zamów wycenę
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 bg-background/95 backdrop-blur-md">
            <button
              onClick={() => scrollToSection("o-nas")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              O nas
            </button>
            <button
              onClick={() => scrollToSection("oferta")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Oferta
            </button>
            <button
              onClick={() => scrollToSection("dlaczego-my")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Dlaczego my
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Kontakt
            </button>
            <div className="px-4">
              <Button onClick={() => scrollToSection("kontakt")} className="w-full bg-primary hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Zamów wycenę
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
