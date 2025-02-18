import { Link } from "wouter";
import { Github, MessageCircle, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900/90 border-t border-slate-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">EduSphere</h3>
            <p className="text-slate-300 mb-4">
              The ultimate Discord bot for education, music, and community management.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-300 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/music" className="text-slate-300 hover:text-white transition-colors">
                  Music
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-white mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ticket" className="text-slate-300 hover:text-white transition-colors">
                  Ticket System
                </Link>
              </li>
              <li>
                <Link href="/invite" className="text-slate-300 hover:text-white transition-colors">
                  Invite Tracker
                </Link>
              </li>
              <li>
                <Link href="/generator" className="text-slate-300 hover:text-white transition-colors">
                  Question Generator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} EduSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}