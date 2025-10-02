const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                SS
              </div>
              <div>
                <div className="font-bold text-lg">SYSTEM SERWIS</div>
                <div className="text-xs text-background/70">Firma Sprzątająca</div>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Profesjonalna firma sprzątająca w Warszawie z ponad 20-letnim doświadczeniem. 
              Kompleksowe usługi sprzątania biur, biurowców i powierzchni komercyjnych.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Nasze usługi</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <button onClick={() => scrollToSection("oferta")} className="hover:text-background transition-colors">
                  Sprzątanie biur
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("oferta")} className="hover:text-background transition-colors">
                  Sprzątanie biurowców
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("oferta")} className="hover:text-background transition-colors">
                  Serwis sprzątający
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("oferta")} className="hover:text-background transition-colors">
                  Sprzątanie powierzchni
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>ul. Puławska 303</li>
              <li>02-785 Warszawa</li>
              <li>
                <a href="tel:+48225494080" className="hover:text-background transition-colors">
                  Tel: 22 549 40 80
                </a>
              </li>
              <li>
                <a href="mailto:biuro@system-serwis.eu" className="hover:text-background transition-colors">
                  biuro@system-serwis.eu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              © {currentYear} System Serwis Sp. z o.o. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6 text-sm text-background/70">
              <button onClick={() => scrollToSection("o-nas")} className="hover:text-background transition-colors">
                O nas
              </button>
              <button onClick={() => scrollToSection("oferta")} className="hover:text-background transition-colors">
                Oferta
              </button>
              <button onClick={() => scrollToSection("kontakt")} className="hover:text-background transition-colors">
                Kontakt
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
