import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { Ticket, MessageSquare, Clock, CheckCircle } from "lucide-react";

export default function TicketSystem() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 to-slate-900 text-white">
      <Nav />
      
      <div className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            Ticket System
          </h1>
          
          <div className="space-y-8">
            <p className="text-xl text-emerald-200">
              Streamline your server's support process with our advanced ticket management system.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-900/40 p-6 rounded-lg border border-emerald-700/50 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="h-6 w-6 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-emerald-200">Support Tickets</h3>
                </div>
                <p className="text-emerald-300">Create and manage support tickets with ease.</p>
              </div>
              
              <div className="bg-emerald-900/40 p-6 rounded-lg border border-emerald-700/50 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-emerald-200">Quick Response</h3>
                </div>
                <p className="text-emerald-300">Track and manage response times effectively.</p>
              </div>
            </div>
            
            <div className="bg-emerald-900/40 p-8 rounded-lg border border-emerald-700/50">
              <h2 className="text-2xl font-semibold mb-6 text-emerald-200">Ticket Commands</h2>
              <div className="space-y-4">
                <div className="p-4 bg-emerald-900/60 rounded-lg border border-emerald-700/50">
                  <code className="text-emerald-200">/ticket create [reason]</code>
                  <p className="text-emerald-300 mt-2">Create a new support ticket</p>
                </div>
                <div className="p-4 bg-emerald-900/60 rounded-lg border border-emerald-700/50">
                  <code className="text-emerald-200">/ticket close</code>
                  <p className="text-emerald-300 mt-2">Close an active ticket</p>
                </div>
                <div className="p-4 bg-emerald-900/60 rounded-lg border border-emerald-700/50">
                  <code className="text-emerald-200">/ticket list</code>
                  <p className="text-emerald-300 mt-2">View all active tickets</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
