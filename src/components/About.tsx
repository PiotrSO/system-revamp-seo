const About = () => {
  return (
    <section id="o-nas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Firma sprzątająca biura Warszawa
            </h2>
            <p className="text-lg text-muted-foreground">
              Profesjonalna firma sprzątająca System Serwis
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
            <p className="text-lg leading-relaxed">
              Szukasz <strong className="text-primary">firmy sprzątającej w Warszawie?</strong> Dobrze trafiłeś! 
              Doskonale zdajemy sobie sprawę, jak ważna jest higiena oraz jaki komfort wynika z przebywania 
              w czystych i uporządkowanych pomieszczeniach.
            </p>

            <p className="leading-relaxed">
              Zadbane biuro w pozytywny sposób wpływa na samopoczucie pracowników, dzięki czemu mogą osiągać lepsze wyniki w pracy. 
              Pomoc, jaką oferuje nasza firma sprzątająca biura Warszawa, jest kompleksowa oraz dostosowana do potrzeb klientów.
            </p>

            <p className="leading-relaxed">
              Do każdego zlecenia podchodzimy indywidualnie, zaczynając od poznania Państwa potrzeb, przez przygotowanie 
              wstępnej oferty i wyceny, aż do podjęcia współpracy i realizacji uzgodnionej usługi. Chętnie słuchamy 
              wszelkich sugestii i wskazówek, a następnie wykonujemy niezbędne obowiązki z ich uwzględnieniem.
            </p>

            <div className="bg-secondary/50 rounded-lg p-8 my-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Kompleksowe sprzątanie biur w Warszawie
              </h3>
              <p className="leading-relaxed mb-4">
                Regularne sprzątanie obiektów biurowych jest bardzo ważne – doskonale wie o tym każdy, 
                kto chociaż przez krótki czas pracował w miejscu, gdzie panował nieład. Uporządkowana 
                i higieniczna przestrzeń niesie za sobą wiele korzyści.
              </p>
              <p className="leading-relaxed">
                Nasze doświadczenie pozwala na elastyczne dopasowanie zakresu usług i czasu, 
                w którym są świadczone, do potrzeb i oczekiwań naszych klientów.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-lg text-card-foreground mb-3">Podstawowy zakres prac</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Mycie podłóg i odkurzanie wykładzin
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Usuwanie kurzu z powierzchni
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Mycie i dezynfekcja łazienek
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Wynoszenie i segregacja śmieci
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Obsługa aneksów kuchennych
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-lg text-card-foreground mb-3">Prace dodatkowe</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Sprzątanie poremontowe
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Mycie okien i przeszkleń
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Wymiana mat wejściowych
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Pranie wykładzin dywanowych
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Podlewanie kwiatów
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
