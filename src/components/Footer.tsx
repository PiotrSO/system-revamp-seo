import logo from "@/assets/logo2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 text-white" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">System Serwis</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              
              Profesjonalna firma sprzątająca w Warszawie z ponad 20-letnim doświadczeniem. 
              Kompleksowe usługi sprzątania biur, biurowców i powierzchni komercyjnych.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Nasze usługi</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <button onClick={() => scrollToSection("oferta")} className="hover:text-white transition-colors">
                  Sprzątanie biur
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("oferta")} className="hover:text-white transition-colors">
                  Sprzątanie biurowców
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("oferta")} className="hover:text-white transition-colors">
                  Serwis sprzątający
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("oferta")} className="hover:text-white transition-colors">
                  Sprzątanie powierzchni
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>ul. Puławska 303</li>
              <li>02-785 Warszawa</li>
              <li>
                <a href="tel:+48225494080" className="hover:text-white transition-colors">
                  Tel: 22 549 40 80
                </a>
              </li>
              <li>
                <a href="mailto:biuro@system-serwis.eu" className="hover:text-white transition-colors">
                  biuro@system-serwis.eu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80">
              © {currentYear} System Serwis Sp. z o.o. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6 text-sm text-white/80">
              <button onClick={() => scrollToSection("o-nas")} className="hover:text-white transition-colors">
                O nas
              </button>
              <button onClick={() => scrollToSection("oferta")} className="hover:text-white transition-colors">
                Oferta
              </button>
              <button onClick={() => scrollToSection("kontakt")} className="hover:text-white transition-colors">
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
