const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-start justify-center pt-32 md:pt-48 relative bg-gradient-to-br from-background via-secondary/20 to-background"
    >
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}me.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Pedro Rainville
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Analista de Dados | Cientista de Dados
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Conheça meu trabalho
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
