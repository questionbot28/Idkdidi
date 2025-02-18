import { motion } from "framer-motion";
import { Bot, Sparkles, Music, Ticket, Users } from "lucide-react";
import Nav from "@/components/nav";
import Features from "@/components/features";
import Commands from "@/components/commands";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-violet-950 to-purple-900"> {/* Changed background color */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent mb-6"> {/* Changed primary color */}
                EduSphere Bot
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The all-in-one Discord bot for education, music, and community management
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a 
                  href="https://discord.com/api/oauth2/authorize" 
                  className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2" {/* Changed primary color */}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bot className="h-5 w-5" />
                  Add to Discord
                </motion.a>
                <motion.a 
                  href="https://discord.gg/edusphere"
                  className="border border-violet-500/20 hover:bg-violet-500/5 px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2" {/* Changed primary color */}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="h-5 w-5" />
                  Join Support Server
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07"
                  alt="Discord Bot Interface"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-violet-500/10 backdrop-blur-lg rounded-lg p-4"> {/* Changed primary color */}
                  <div className="flex items-center gap-3">
                    <Bot className="h-8 w-8 text-violet-500" /> {/* Changed primary color */}
                    <div>
                      <p className="font-medium">Online 24/7</p>
                      <p className="text-sm text-muted-foreground">Ready to assist</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-100"> {/* Changed background color */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-lg text-muted-foreground">
              Powerful features to enhance your Discord server
            </p>
          </div>
          <Features />
        </div>
      </section>

      {/* Commands Section */}
      <section className="py-20 bg-gradient-to-b from-violet-950 to-purple-900"> {/* Changed background color */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Available Commands</h2>
            <p className="text-lg text-muted-foreground">
              Discover what EduSphere can do
            </p>
          </div>
          <Commands />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We've got answers
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-violet-950 to-purple-900"> {/* Changed background color */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of servers already using EduSphere
          </p>
          <motion.a 
            href="https://discord.com/api/oauth2/authorize"
            className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2" {/* Changed primary color */}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bot className="h-5 w-5" />
            Add EduSphere to Discord
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}