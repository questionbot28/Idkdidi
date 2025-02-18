import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { Bot, Star, Sparkles, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white flex flex-col">
      <Nav />

      <div className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About EduSphere
            </h1>
            <p className="text-2xl text-blue-200 mb-8">
              The All-in-One Discord Bot for Music, Education, and More
            </p>
            <p className="text-lg text-slate-300">
              EduSphere isn't just another Discord bot—it's a revolutionary tool designed to enhance your server's experience 
              with powerful features, seamless automation, and stunning visuals. Whether you're here for high-quality music, 
              AI-powered learning tools, or server management, EduSphere has everything you need in one sleek package.
            </p>
          </div>

          {/* Why EduSphere Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-blue-400">Why EduSphere?</h2>
            <div className="grid gap-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex items-start gap-4">
                <Bot className="h-6 w-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">A Bot That Does It All</h3>
                  <p className="text-slate-300">
                    EduSphere combines the best features of music, education, ticketing, invite tracking, 
                    and AI automation into one powerful bot.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Beautiful & Interactive UI</h3>
                  <p className="text-slate-300">
                    From real-time animations to engaging visuals, EduSphere is built to be as fun as it is functional.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex items-start gap-4">
                <Star className="h-6 w-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">AI-Powered Innovation</h3>
                  <p className="text-slate-300">
                    With AI-generated playlists, smart question paper creation, and text-to-image generation, 
                    EduSphere brings the future of Discord bots to your server.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex items-start gap-4">
                <Users className="h-6 w-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Community-Centric</h3>
                  <p className="text-slate-300">
                    Whether you're studying, vibing to music, or managing a community, EduSphere is designed 
                    to make interactions on Discord smoother and more enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16 bg-slate-800/50 p-8 rounded-lg border border-slate-700"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h2>
            <p className="text-slate-300 mb-8">
              EduSphere was created with one goal: to make Discord more than just a chat platform. 
              We aim to bring together music lovers, students, and server admins by providing a bot 
              that's both powerful and easy to use.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">We believe in:</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">
                  <strong className="text-blue-300">Simplicity</strong> – No complicated setups, just plug and play.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">
                  <strong className="text-blue-300">Innovation</strong> – Constant updates with cutting-edge features.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">
                  <strong className="text-blue-300">Community</strong> – Built for users, shaped by feedback.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center py-12 bg-slate-800/50 rounded-lg border border-slate-700"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Join Us Today!</h2>
            <p className="text-xl text-slate-300 mb-8">Ready to upgrade your Discord experience?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                <Bot className="mr-2 h-5 w-5" /> Add to Discord
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-200 hover:bg-blue-900/50"
              >
                <Users className="mr-2 h-5 w-5" /> Join Our Community
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}