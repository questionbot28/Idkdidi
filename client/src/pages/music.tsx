import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { Music2, PlayCircle, Radio, Library } from "lucide-react";

export default function Music() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-slate-900 text-white">
      <Nav />
      
      <div className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Music Features
          </h1>
          
          <div className="space-y-8">
            <p className="text-xl text-blue-200">
              High-quality music playback with advanced playlist management and controls.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-900/40 p-6 rounded-lg border border-blue-700/50 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <PlayCircle className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-200">Music Player</h3>
                </div>
                <p className="text-blue-300">Crystal clear audio playback with support for multiple sources.</p>
              </div>
              
              <div className="bg-blue-900/40 p-6 rounded-lg border border-blue-700/50 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Library className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-200">Playlist Management</h3>
                </div>
                <p className="text-blue-300">Create and manage playlists with ease.</p>
              </div>
            </div>
            
            <div className="bg-blue-900/40 p-8 rounded-lg border border-blue-700/50">
              <h2 className="text-2xl font-semibold mb-6 text-blue-200">Music Commands</h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-900/60 rounded-lg border border-blue-700/50">
                  <code className="text-blue-200">/play [song name or URL]</code>
                  <p className="text-blue-300 mt-2">Play a song from YouTube, Spotify, or SoundCloud</p>
                </div>
                <div className="p-4 bg-blue-900/60 rounded-lg border border-blue-700/50">
                  <code className="text-blue-200">/queue</code>
                  <p className="text-blue-300 mt-2">View and manage the current playlist</p>
                </div>
                <div className="p-4 bg-blue-900/60 rounded-lg border border-blue-700/50">
                  <code className="text-blue-200">/skip</code>
                  <p className="text-blue-300 mt-2">Skip to the next song in queue</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
