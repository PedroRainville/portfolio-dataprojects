import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Sobre Mim */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-primary">Sobre mim</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                Analista e Cientista de Dados com experiência em análise de dados, 
                visualização de informações e desenvolvimento de insights estratégicos 
                para tomada de decisão. Especialista em transformar dados brutos em 
                informações valiosas para o negócio.
              </p>
              <p>
                Conhecimento em ferramentas de análise e visualização de dados, 
                bancos de dados SQL, Python para análise estatística, Power BI, Excel 
                avançado e metodologias ágeis para projetos de dados.
              </p>
            </CardContent>
          </Card>

          {/* Contatos */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-primary">Contatos</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Email:</p>
                  <p className="text-sm">pedrorainville11@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Telefone:</p>
                  <p className="text-sm">(14) 99793-3005</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Localização:</p>
                  <p className="text-sm">Marília, São Paulo, Brasil</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn:</p>
                  <a
                    href="https://www.linkedin.com/in/pedrorainville/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    linkedin.com/in/pedrorainville
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Curriculum */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Curriculum</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Experiência */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">
                Experiência
              </h3>
              
              <div className="space-y-6">
                {/* Toca Imóveis */}
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <div>
                      <h4 className="font-bold">Analista de Sistemas</h4>
                      <p className="text-sm text-muted-foreground">
                        Toca Imóveis · Tempo integral
                      </p>
                      <p className="text-xs text-muted-foreground">
                        mai de 2025 - o momento · 6 meses
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Marília, São Paulo, Brasil · Presencial
                      </p>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-6">
                    <li>Desenvolvimento de aplicações e soluções de automações</li>
                    <li>Administração de CRM Kurole e gestão de permissões de usuários</li>
                    <li>
                      Gestão de ativos de TI (computadores, sistemas e softwares) com
                      compliance LGPD
                    </li>
                    <li>Administração e manutenção de bases de dados corporativos</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    Stack: React.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, Python,
                    OpenAI
                  </p>
                </div>

                {/* Sistema Contábil Alphaville */}
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <div>
                      <h4 className="font-bold">Técnico de Hardware</h4>
                      <p className="text-sm text-muted-foreground">
                        Sistema Contábil Alphaville · Autônomo
                      </p>
                      <p className="text-xs text-muted-foreground">
                        nov de 2021 - o momento · 4 anos
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Marília, São Paulo, Brasil · Presencial
                      </p>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-6">
                    <li>Instalação e configuração de periféricos</li>
                    <li>Orientação técnica para uso e cuidados com equipamentos</li>
                    <li>
                      Acompanhamento periódico de máquinas para evitar falhas e prolongar
                      vida útil
                    </li>
                  </ul>
                </div>

                {/* SpinShow */}
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <div>
                      <h4 className="font-bold">Serviços para Eventos</h4>
                      <p className="text-sm text-muted-foreground">
                        SpinShow · Freelance
                      </p>
                      <p className="text-xs text-muted-foreground">
                        mai de 2023 - out de 2025 · 2 anos 6 meses
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Marília, São Paulo, Brasil · Presencial
                      </p>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-6">
                    <li>
                      Recepcionar e orientar convidados sobre plataformas imersivas
                    </li>
                    <li>Operar equipamentos de vídeo com foco em qualidade e segurança</li>
                    <li>
                      Apoiar montagem e desmontagem de equipamentos no local do evento
                    </li>
                  </ul>
                </div>

                {/* ClockIn.IT */}
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <div>
                      <h4 className="font-bold">Programador de Front-end</h4>
                      <p className="text-sm text-muted-foreground">
                        ClockIn.IT · Autônomo
                      </p>
                      <p className="text-xs text-muted-foreground">
                        abr de 2024 - mai de 2025 · 1 ano 2 meses
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">Remota</p>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-6">
                    <li>Desenvolvimento de features front-end com React e TypeScript</li>
                    <li>Testagem e documentação de APIs com Swagger</li>
                    <li>Liderança na tradução do sistema para espanhol</li>
                    <li>Implementação de rotinas de testes UI/UX</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    Stack: React.js, TypeScript, HTML5, CSS, JavaScript, Swagger API,
                    Postman
                  </p>
                </div>

                {/* WEBLINE SISTEMAS */}
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <div>
                      <h4 className="font-bold">Estagiário de Projetos de TI</h4>
                      <p className="text-sm text-muted-foreground">
                        WEBLINE SISTEMAS · Estágio
                      </p>
                      <p className="text-xs text-muted-foreground">
                        jun de 2023 - dez de 2023 · 7 meses
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Marília, São Paulo, Brasil · Presencial
                      </p>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-6">
                    <li>Acompanhamento dos ciclos de vida de projetos de software</li>
                    <li>Comunicação com stakeholders</li>
                    <li>Análise em banco de dados SQL</li>
                    <li>Desenvolvimento de sistema em Delphi</li>
                  </ul>
                </div>

                {/* Unimar EAD */}
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <div>
                      <h4 className="font-bold">Estagiário Administrativo e Suporte TI</h4>
                      <p className="text-sm text-muted-foreground">
                        Unimar EAD · Estágio
                      </p>
                      <p className="text-xs text-muted-foreground">
                        jan de 2023 - jun de 2023 · 6 meses
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Marília, São Paulo, Brasil
                      </p>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-6">
                    <li>Atividades administrativas com Microsoft Excel intermediário</li>
                    <li>
                      Resolução de problemas de TI relacionados à plataforma Unimar EAD
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Formação e Tecnologias */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">
                Formação
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-bold">Análise e Desenvolvimento de Sistemas</h4>
                  <p className="text-sm text-muted-foreground">2021 - 2023</p>
                  <p className="text-sm text-muted-foreground">
                    Universidade de Marília, Marília - SP
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-bold">Pós-graduação Lato Sensu - Especialização, Ciência de Dados e Inteligência Artificial</h4>
                  <p className="text-sm text-muted-foreground">fev de 2024 - mar de 2025</p>
                  <p className="text-sm text-muted-foreground">Universidade de Marília, Marília - SP</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">
                Tecnologias
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Análise de Dados</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Python (Pandas, NumPy)</span>
                        <span className="text-xs text-muted-foreground">Intermediário</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full w-[60%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">SQL (MySQL, PostgreSQL)</span>
                        <span className="text-xs text-muted-foreground">Intermediário</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full w-[65%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">R</span>
                        <span className="text-xs text-muted-foreground">Junior</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full w-[45%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Excel</span>
                        <span className="text-xs text-muted-foreground">Avançado</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full w-[80%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Visualização de Dados</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Power BI</span>
                        <span className="text-xs text-muted-foreground">Intermediário</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full w-[70%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Tableau</span>
                        <span className="text-xs text-muted-foreground">Junior</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full w-[50%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Matplotlib / Seaborn</span>
                        <span className="text-xs text-muted-foreground">Intermediário</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full w-[60%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Machine Learning & Estatística</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Scikit-learn</span>
                        <span className="text-xs text-muted-foreground">Junior</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full w-[50%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Estatística Descritiva</span>
                        <span className="text-xs text-muted-foreground">Intermediário</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full w-[65%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Análise Preditiva</span>
                        <span className="text-xs text-muted-foreground">Junior</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full w-[45%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
