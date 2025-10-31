import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Portfolio de Projetos
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
