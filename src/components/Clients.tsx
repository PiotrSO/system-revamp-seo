import deloitteLogo from "@/assets/clients/deloitte.png";
import allianzLogo from "@/assets/clients/allianz.png";
import pkoLogo from "@/assets/clients/pko.jpg";
import mediaSaturnLogo from "@/assets/clients/media-saturn.png";
import multimediaPolskaLogo from "@/assets/clients/multimedia-polska.png";
import bonduelleLogo from "@/assets/clients/bonduelle.png";
import skfLogo from "@/assets/clients/skf.png";
import premierResearchLogo from "@/assets/clients/premier-research.png";
import aegonLogo from "@/assets/clients/aegon.png";
import ceracoLogo from "@/assets/clients/ceraco.png";

const Clients = () => {
  const clients = [
    { name: "Deloitte", logo: deloitteLogo },
    { name: "Allianz", logo: allianzLogo },
    { name: "PKO Bank", logo: pkoLogo },
    { name: "Media Saturn", logo: mediaSaturnLogo },
    { name: "Multimedia Polska", logo: multimediaPolskaLogo },
    { name: "Bonduelle", logo: bonduelleLogo },
    { name: "SKF Group", logo: skfLogo },
    { name: "Premier Research", logo: premierResearchLogo },
    { name: "AEGON", logo: aegonLogo },
    { name: "Ceraco", logo: ceracoLogo }
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Zaufali nam
          </h2>
          <p className="text-muted-foreground">
            Współpracujemy z wiodącymi firmami w Polsce
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => {
            const isAllianz = client.name === "Allianz";
            const isPKO = client.name === "PKO Bank";
            const isSmaller = client.name === "Deloitte" || client.name === "Media Saturn" || client.name === "Ceraco";
            let sizeClass = "h-12 md:h-16 w-auto object-contain";
            
            if (isAllianz) {
              sizeClass = "h-22 md:h-31 w-auto object-contain";
            } else if (isPKO) {
              sizeClass = "h-14 md:h-20 w-auto object-contain";
            } else if (isSmaller) {
              sizeClass = "h-10 md:h-13 w-auto object-contain";
            }
            
            return (
              <div
                key={index}
                className="transition-all duration-300 hover:scale-110"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className={sizeClass}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
