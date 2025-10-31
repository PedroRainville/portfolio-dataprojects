import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Sistema CRM Toca Imóveis",
    category: "automation",
    description:
      "Desenvolvimento de aplicações e soluções de automações com integração de IA",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Plataforma RH ClockIn.IT",
    category: "web",
    description:
      "Sistema de Recursos Humanos para empresas internacionais com suporte multilíngue",
    technologies: ["React", "TypeScript", "Swagger API"],
  },
  {
    id: 3,
    title: "Sistema de Gestão para Câmaras Municipais",
    category: "web",
    description:
      "Projeto de software para acompanhamento de ciclos de vida em câmaras municipais",
    technologies: ["Delphi", "MySQL", "SQL"],
  },
  {
    id: 4,
    title: "Análise de Dados com Machine Learning",
    category: "ml",
    description: "Projetos de análise e visualização de dados usando ML",
    technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
  },
  {
    id: 5,
    title: "Automação de Processos com IA",
    category: "automation",
    description: "Soluções de automação utilizando OpenAI GPT",
    technologies: ["Python", "OpenAI", "Node.js"],
  },
  {
    id: 6,
    title: "Dashboard de Análise de Dados",
    category: "web",
    description: "Visualização interativa de dados e métricas",
    technologies: ["React", "TypeScript", "D3.js"],
  },
];

const categories = [
  { id: "all", label: "TODOS" },
  { id: "web", label: "DESENVOLVIMENTO WEB" },
  { id: "automation", label: "AUTOMAÇÃO" },
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
            Demonstração de soluções de problemas do negócio.com as ferramentas e
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
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-4xl opacity-50">📊</span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
