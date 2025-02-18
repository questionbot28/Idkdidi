import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { UserPlus, TrendingUp, Award, Users } from "lucide-react";

export default function InviteTracker() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-950 to-slate-900 text-white">
      <Nav />
      
      <div className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Invite Tracker
          </h1>
          
          <div className="space-y-8">
            <p className="text-xl text-orange-200">
              Track and manage server invites with detailed analytics and leaderboards.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-900/40 p-6 rounded-lg border border-orange-700/50 hover:border-orange-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-orange-200">Analytics</h3>
                </div>
                <p className="text-orange-300">Track invite performance with detailed statistics.</p>
              </div>
              
              <div className="bg-orange-900/40 p-6 rounded-lg border border-orange-700/50 hover:border-orange-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-orange-200">Leaderboards</h3>
                </div>
                <p className="text-orange-300">Recognize top inviters with automated leaderboards.</p>
              </div>
            </div>
            
            <div className="bg-orange-900/40 p-8 rounded-lg border border-orange-700/50">
              <h2 className="text-2xl font-semibold mb-6 text-orange-200">Invite Commands</h2>
              <div className="space-y-4">
                <div className="p-4 bg-orange-900/60 rounded-lg border border-orange-700/50">
                  <code className="text-orange-200">/invites</code>
                  <p className="text-orange-300 mt-2">View your invite statistics</p>
                </div>
                <div className="p-4 bg-orange-900/60 rounded-lg border border-orange-700/50">
                  <code className="text-orange-200">/leaderboard</code>
                  <p className="text-orange-300 mt-2">Display the server's invite leaderboard</p>
                </div>
                <div className="p-4 bg-orange-900/60 rounded-lg border border-orange-700/50">
                  <code className="text-orange-200">/invites user [@user]</code>
                  <p className="text-orange-300 mt-2">Check another user's invite count</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
