const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-secondary/20 to-background"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTItMnYtMmgtMnYyaDJ6bTAtNHYtMmgtMnYyaDJ6bTAtNHYtMmgtMnYyaDJ6bTAtNHYtMmgtMnYyaDJ6bS0yLTJ2LTJoLTJ2Mmgyem0wIDB2Mmgydi0yaC0yem00IDB2Mmgydi0yaC0yem00IDB2Mmgydi0yaC0yem00IDB2Mmgydi0yaC0yem00IDB2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0tMiAydi0yaC0ydjJoMnptLTQgMHYtMmgtMnYyaDJ6bS00IDB2LTJoLTJ2Mmgyem0tNCAwdi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
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
