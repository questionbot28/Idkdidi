import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, ChevronDown, X, Menu } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false); //Reintroduced isOpen state
  const [location] = useLocation();

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
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
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
            <Button
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white"
              onClick={() => window.open('https://discord.com/api/oauth2/authorize', '_blank')}
            >
              Login with Discord
            </Button>
          </div>

          </div>
      </div>
    </nav>
  );
}