import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { Music2, PlayCircle, Radio, Library, Bell, Mail, Headphones, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

export default function Music() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-slate-900 text-white flex flex-col">
      <Nav />

      <div className="container mx-auto px-4 pt-24 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Music Like Never Before
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Now available with slash commands and a visually immersive experience in all your servers.
            </p>

            {/* Mock Phone Display - Styled after Rythm */}
            <div className="relative max-w-xs mx-auto mb-12 bg-blue-900/30 backdrop-blur-lg p-6 rounded-3xl border border-blue-700/50">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Music2 className="h-6 w-6 text-blue-400" />
                  <div className="flex-1">
                    <div className="h-2 bg-blue-400/30 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="h-2 w-2/3 bg-blue-400/20 rounded"></div>
                <div className="h-2 w-1/2 bg-blue-400/20 rounded"></div>
                {/* Progress Bar */}
                <div className="w-full h-1 bg-blue-900 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-blue-400 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              >
                <Globe className="mr-2 h-5 w-5" /> Add EduSphere
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-200 hover:bg-blue-900/50"
              >
                <Users className="mr-2 h-5 w-5" /> Join Community
              </Button>
            </div>
          </div>

          {/* Mobile Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Taking Music to the Next Level</h2>
            <p className="text-blue-200 mb-8">
              EduSphere is evolving to bring you a seamless mobile experience, 
              allowing you to enjoy your favorite tracks anytime, anywhere.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button variant="outline" className="border-blue-500 text-blue-200">
                <Bell className="mr-2 h-5 w-5" /> Join Waitlist
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-200">
                <Mail className="mr-2 h-5 w-5" /> Stay Updated
              </Button>
            </div>

            <p className="text-blue-300 text-sm">🚀 Coming soon to iOS & Android!</p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">
              More Than Just a Music Bot
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-900/40 backdrop-blur-lg p-6 rounded-lg border border-blue-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <Headphones className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-200">Live Listening</h3>
                </div>
                <p className="text-blue-300">Play songs in perfect sync with your friends.</p>
              </div>

              <div className="bg-blue-900/40 backdrop-blur-lg p-6 rounded-lg border border-blue-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <Library className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-200">Shared Playlists</h3>
                </div>
                <p className="text-blue-300">Let everyone contribute to the queue.</p>
              </div>

              <div className="bg-blue-900/40 backdrop-blur-lg p-6 rounded-lg border border-blue-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <PlayCircle className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-200">Discover New Music</h3>
                </div>
                <p className="text-blue-300">Share and explore trending tracks.</p>
              </div>

              <div className="bg-blue-900/40 backdrop-blur-lg p-6 rounded-lg border border-blue-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <Radio className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-200">Custom Radio</h3>
                </div>
                <p className="text-blue-300">Tune in to handpicked playlists updated regularly.</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-blue-900/40 backdrop-blur-lg rounded-lg border border-blue-700/50"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-400">
              Be Part of the EduSphere Experience
            </h2>
            <p className="text-blue-200 mb-8">
              Stay connected, get the latest updates, and interact with our growing community of music lovers.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              <Users className="mr-2 h-5 w-5" /> Join Our Discord
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}