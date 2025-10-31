import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground mb-6">
            Estou sempre aberto a novos projetos e oportunidades
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="mailto:pedro.rainville@email.com"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:+5511900000000"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Telefone"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
          <p>© {new Date().getFullYear()} Pedro Rainville. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com React, TypeScript e Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
