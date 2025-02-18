import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { LifeBuoy, MessageSquare, Globe, Clock } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-slate-900 text-white">
      <Nav />
      
      <div className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Support Center
          </h1>
          
          <div className="space-y-8">
            <p className="text-xl text-purple-200">
              Need help with EduSphere? Our support team is here to assist you 24/7.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-900/40 p-6 rounded-lg border border-purple-700/50 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-200">Discord Support</h3>
                </div>
                <p className="text-purple-300">Join our Discord server for live support and community help.</p>
              </div>
              
              <div className="bg-purple-900/40 p-6 rounded-lg border border-purple-700/50 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-200">Documentation</h3>
                </div>
                <p className="text-purple-300">Browse our comprehensive guides and documentation.</p>
              </div>
            </div>
            
            <div className="bg-purple-900/40 p-8 rounded-lg border border-purple-700/50">
              <h2 className="text-2xl font-semibold mb-6 text-purple-200">Support Hours</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="font-medium text-purple-200">Discord Support</p>
                    <p className="text-purple-300">24/7 Community Support</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <LifeBuoy className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="font-medium text-purple-200">Technical Support</p>
                    <p className="text-purple-300">Monday - Friday, 9 AM - 5 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
