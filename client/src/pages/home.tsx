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
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6">
                EduSphere Bot
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The all-in-one Discord bot for education, music, and community management
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="#" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium"
                >
                  Add to Discord
                </a>
                <a 
                  href="#"
                  className="border border-primary/20 hover:bg-primary/5 px-8 py-3 rounded-lg font-medium"
                >
                  Join Support Server
                </a>
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
                <div className="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-lg rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <Bot className="h-8 w-8 text-primary" />
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
      <section className="py-20 bg-slate-50">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Easy to Use Commands</h2>
            <p className="text-lg text-muted-foreground">
              Get started with these simple commands
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
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of servers already using EduSphere
          </p>
          <a 
            href="#" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2"
          >
            <Sparkles className="h-5 w-5" />
            Add EduSphere to Discord
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}