import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Clients />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "System Serwis",
          "description": "Profesjonalna firma sprzątająca w Warszawie. Ponad 20 lat doświadczenia w sprzątaniu biur, biurowców i powierzchni komercyjnych.",
          "image": "https://www.system-serwis.eu/og-image.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ul. Puławska 303",
            "addressLocality": "Warszawa",
            "postalCode": "02-785",
            "addressCountry": "PL"
          },
          "telephone": "+48225494080",
          "email": "biuro@system-serwis.eu",
          "url": "https://www.system-serwis.eu",
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.3",
            "reviewCount": "6"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://maps.google.com/?cid=17436311761024461218"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Usługi sprzątania",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sprzątanie biur"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sprzątanie biurowców"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Serwis sprzątający"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sprzątanie powierzchni"
                }
              }
            ]
          }
        })}
      </script>
    </div>
  );
};

export default Index;
