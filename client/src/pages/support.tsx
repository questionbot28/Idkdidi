import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { LifeBuoy, Music2, BookOpen, Ticket, Sparkles, Bot, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-slate-900 text-white flex flex-col">
      <Nav />

      <div className="container mx-auto px-4 pt-24 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What is EduSphere?
            </h1>
            <p className="text-2xl text-purple-200 mb-8">
              The Ultimate Discord Bot for Music, Education, and More
            </p>
            <p className="text-lg text-purple-300 mb-8">
              EduSphere is an all-in-one Discord bot designed to enhance your server experience. 
              Whether you need high-quality music, seamless ticketing, AI-powered question paper generation, 
              or powerful invite tracking, EduSphere has you covered!
            </p>
            <p className="text-purple-200 italic">
              Join thousands of users enjoying an interactive and feature-packed experience.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-purple-900/40 p-8 rounded-lg border border-purple-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <Music2 className="h-8 w-8 text-purple-400" />
                <h2 className="text-2xl font-semibold text-purple-200">Next-Gen Music Experience</h2>
              </div>
              <p className="text-purple-300">
                Enjoy crystal-clear music with AI-powered playlists, custom sound effects, 
                and a unique soundboard DJ mode—all designed to make your music sessions 
                more immersive and interactive.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-purple-900/40 p-8 rounded-lg border border-purple-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-8 w-8 text-purple-400" />
                <h2 className="text-2xl font-semibold text-purple-200">Smart Learning Tools</h2>
              </div>
              <p className="text-purple-300">
                Generate question papers for Class 11 and 12 effortlessly, 
                making studying and exam prep easier than ever.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-purple-900/40 p-8 rounded-lg border border-purple-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <Ticket className="h-8 w-8 text-purple-400" />
                <h2 className="text-2xl font-semibold text-purple-200">Seamless Ticket System</h2>
              </div>
              <p className="text-purple-300">
                Handle support requests and server management with an advanced 
                ticketing system designed for efficiency and ease of use.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-purple-900/40 p-8 rounded-lg border border-purple-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-8 w-8 text-purple-400" />
                <h2 className="text-2xl font-semibold text-purple-200">Beautiful & Engaging UI</h2>
              </div>
              <p className="text-purple-300">
                EduSphere isn't just functional—it's visually stunning! From interactive 
                animations to real-time progress bars, every feature is crafted to be 
                both beautiful and user-friendly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-2 bg-purple-900/40 p-8 rounded-lg border border-purple-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-8 w-8 text-purple-400" />
                <h2 className="text-2xl font-semibold text-purple-200">AI-Powered Features</h2>
              </div>
              <p className="text-purple-300">
                From lyrics overlays and beat matching to text-to-image generation, 
                EduSphere leverages AI to bring you the future of Discord bot experiences.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-purple-900/40 rounded-lg border border-purple-700/50"
          >
            <h2 className="text-3xl font-bold mb-8 text-purple-200">
              Ready to upgrade your Discord server?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <Bot className="mr-2 h-5 w-5" /> Add to Discord
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-200 hover:bg-purple-900/50"
              >
                <LifeBuoy className="mr-2 h-5 w-5" /> Join Our Community
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}