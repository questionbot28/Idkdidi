import Nav from "@/components/nav";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Nav />
      
      <div className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About EduSphere
          </h1>
          
          <div className="space-y-8 text-slate-300">
            <p className="text-xl">
              EduSphere is a powerful Discord bot designed to enhance your server's educational and community experience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Mission</h2>
                <p>
                  To create an engaging and interactive learning environment within Discord communities, making education more accessible and enjoyable.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Vision</h2>
                <p>
                  To become the go-to educational tool for Discord communities, fostering knowledge sharing and collaborative learning.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">Why Choose EduSphere?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-purple-400 text-xl">•</span>
                  <p>Comprehensive educational tools with AI-powered question generation</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-purple-400 text-xl">•</span>
                  <p>High-quality music playback for study sessions</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-purple-400 text-xl">•</span>
                  <p>Advanced ticket system for organized support</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-purple-400 text-xl">•</span>
                  <p>Detailed invite tracking for community growth</p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
