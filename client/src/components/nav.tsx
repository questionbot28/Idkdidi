
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "wouter";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

const colorThemes = [
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-violet-500',
  'from-yellow-500 to-amber-500',
  'from-violet-400 to-indigo-400'
];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentColorIndex((prevIndex) => 
      prevIndex === colorThemes.length - 1 ? 0 : prevIndex + 1
    );
  }, 1000);

  return () => clearInterval(interval);
}, []);

const getPageTheme = () => colorThemes[currentColorIndex];

  const pages = [
    { name: "About", path: "/about" },
    { name: "Support", path: "/support" },
    { name: "Music", path: "/music" },
    { name: "Ticket System", path: "/ticket" },
    { name: "Invite Tracker", path: "/invite" },
    { name: "Question Generator", path: "/generator" },
  ];

  return (
    <nav className={`fixed w-full bg-background/80 backdrop-blur-lg z-50 border-b bg-gradient-to-r transition-all duration-500 ease-in-out ${getPageTheme()}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo, Home and Dropdown */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="mr-2 text-white hover:text-white/80">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-bold text-xl flex items-center gap-2 text-white hover:text-white/80">
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
            <a href="#features" className="text-white hover:text-white/80">Features</a>
            <a href="#commands" className="text-white hover:text-white/80">Commands</a>
            <a href="#faq" className="text-white hover:text-white/80">FAQ</a>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-white hover:text-white/80"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              {pages.map((page) => (
                <Link 
                  key={page.path}
                  href={page.path}
                  className="text-white hover:text-white/80"
                >
                  {page.name}
                </Link>
              ))}
              <a href="#features" className="text-white hover:text-white/80">Features</a>
              <a href="#commands" className="text-white hover:text-white/80">Commands</a>
              <a href="#faq" className="text-white hover:text-white/80">FAQ</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
