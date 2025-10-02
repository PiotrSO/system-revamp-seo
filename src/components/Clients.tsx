const Clients = () => {
  const clients = [
    "Deloitte", "Allianz", "PKO Bank", "Media Saturn", "Multimedia Polska",
    "Bonduelle", "SKF Group", "Premier Research", "AEGON", "Ceraco"
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
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-muted-foreground hover:text-foreground transition-colors font-semibold text-sm md:text-base"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
