import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "wouter";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { name: "About", path: "/about" },
    { name: "Support", path: "/support" },
    { name: "Music", path: "/music" },
    { name: "Ticket System", path: "/ticket" },
    { name: "Invite Tracker", path: "/invite" },
    { name: "Question Generator", path: "/generator" },
  ];

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-lg z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Dropdown */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-bold text-xl flex items-center gap-2">
                  EduSphere <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {pages.map((page) => (
                  <DropdownMenuItem key={page.path}>
                    <Link href={page.path} className="w-full">
                      {page.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

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
              {pages.map((page) => (
                <Link 
                  key={page.path}
                  href={page.path}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {page.name}
                </Link>
              ))}
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