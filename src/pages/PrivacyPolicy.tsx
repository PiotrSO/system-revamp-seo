import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Polityka Prywatności</h1>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Administrator danych osobowych</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Administratorem danych osobowych jest System Serwis Sp. z o.o. z siedzibą w Krakowie.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Zakres zbieranych danych</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                W ramach formularza wyceny zbieramy następujące dane osobowe:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Imię i nazwisko</li>
                <li>Nazwa firmy</li>
                <li>Numer telefonu</li>
                <li>Adres e-mail</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Cel przetwarzania danych</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Dane osobowe przetwarzane są w celu przygotowania wyceny usług oraz nawiązania kontaktu w sprawie przedstawionego zapytania.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Podstawa prawna przetwarzania</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Przetwarzanie danych osobowych odbywa się na podstawie zgody wyrażonej przez użytkownika (art. 6 ust. 1 lit. a RODO).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Prawa użytkownika</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Każda osoba, której dane dotyczą, ma prawo do:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Sprostowania danych</li>
                <li>Usunięcia danych</li>
                <li>Ograniczenia przetwarzania</li>
                <li>Przenoszenia danych</li>
                <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                <li>Cofnięcia zgody w dowolnym momencie</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Okres przechowywania danych</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Dane osobowe będą przechowywane przez okres niezbędny do realizacji zapytania oraz przez okres wymagany przepisami prawa.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Kontakt</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                W sprawach dotyczących ochrony danych osobowych można kontaktować się pod adresem: biuro@system-serwis.eu
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
