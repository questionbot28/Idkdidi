import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-lg z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-bold text-xl">EduSphere</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground">Features</a>
            <a href="#commands" className="text-muted-foreground hover:text-foreground">Commands</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</a>
            <Button asChild variant="default">
              <a href="#">Add to Discord</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground">Features</a>
              <a href="#commands" className="text-muted-foreground hover:text-foreground">Commands</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</a>
              <Button asChild className="w-full">
                <a href="#">Add to Discord</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
