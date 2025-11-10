import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    id: 9,
    title: "Análise de Dados — Uber 2024 (Índia)",
    category: "data",
    description:
      "Análise operacional e financeira de corridas: frequência, cancelamentos, métricas de tempo, localização e tipos de veículo.",
    technologies: ["Python", "Pandas", "Jupyter", "Data Analysis"],
    url: "https://github.com/PedroRainville/analise-de-dados-UberDataSet",
    image: `${baseUrl}uber.png`,
  },
  {
    id: 7,
    title: "Análise de Dados — Marketplace Brasileiro (Olist)",
    category: "data",
    description:
      "Insights acionáveis sobre receita, vendedores, geografia e experiência do cliente.",
    technologies: ["Python", "Pandas", "Plotly", "SQL", "Google Colab"],
    url: "https://github.com/PedroRainville/MarketPulse-BR",
    image: `${baseUrl}marketPulse-BR.png`,
  },
  {
    id: 8,
    title: "Análise de Dados — Saúde na Índia (Vacinas e Infarto)",
    category: "data",
    description:
      "Exploração de dados de saúde para entender padrões entre vacinação e risco cardíaco.",
    technologies: ["Python", "Pandas", "Jupyter"],
    url: "https://github.com/PedroRainville/Analise-de-dados-India",
    image: `${baseUrl}vacinneIndia.png`,
  },
];

const categories = [
  { id: "all", label: "TODOS" },
  { id: "data", label: "ANÁLISE DE DADOS" },
  { id: "ml", label: "MACHINE LEARNING" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Portfolio de Projetos</h2>
          <p className="text-muted-foreground">
            Demonstração de soluções de problemas do negócio com as ferramentas e
            técnicas que domino
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const card = (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="aspect-video rounded-md mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-4xl opacity-50">📊</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );

            return project.url ? (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {card}
              </a>
            ) : (
              card
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
