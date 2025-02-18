import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { UserPlus, TrendingUp, Award, Users, Shield, Gift, Star, BarChart } from "lucide-react";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <TrendingUp className="h-6 w-6 text-orange-400" />,
    title: "Accurate Invite Tracking",
    description: "Automatically track invites and see who invited new members",
  },
  {
    icon: <Users className="h-6 w-6 text-orange-400" />,
    title: "Custom Welcome Messages",
    description: "Greet new members with personalized messages including invite stats",
  },
  {
    icon: <BarChart className="h-6 w-6 text-orange-400" />,
    title: "Detailed Statistics",
    description: "View comprehensive stats for each member's invite activity",
  },
  {
    icon: <Gift className="h-6 w-6 text-orange-400" />,
    title: "Reward System",
    description: "Set up automated rewards for top inviters in your server",
  }
];

const commands = [
  {
    command: "/invites",
    description: "View your invite statistics and rankings",
  },
  {
    command: "/leaderboard",
    description: "Display the server's invite leaderboard",
  },
  {
    command: "/invites user [@user]",
    description: "Check another user's invite count and history",
  },
  {
    command: "/invites config",
    description: "Configure invite tracking settings for your server",
  }
];

export default function InviteTracker() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-950 to-amber-900 text-white flex flex-col">
      <Nav />

      <div className="container mx-auto px-4 pt-24 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              🎉 Invite Tracker Bot
            </h1>
            <p className="text-xl text-orange-200 mb-8">
              Track and manage server invites with detailed analytics and automated rewards
            </p>
            <p className="text-orange-300">
              Whether you're running a community, event, or giveaway, our Invite Tracker Bot makes it 
              easier to monitor who invited whom, track invite counts, and reward your most active members.
            </p>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-orange-900/40 backdrop-blur-lg p-6 rounded-lg border border-orange-700/50 hover:border-orange-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-orange-200">{feature.title}</h3>
                </div>
                <p className="text-orange-300">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          {/* How It Works Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">How It Works</h2>
            <div className="grid gap-6">
              <div className="bg-orange-900/40 backdrop-blur-lg p-6 rounded-lg border border-orange-700/50">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-400 text-orange-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-orange-200 mb-2">Install the Bot</h3>
                    <p className="text-orange-300">
                      Add the Invite Tracker Bot to your server and follow the simple setup instructions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/40 backdrop-blur-lg p-6 rounded-lg border border-orange-700/50">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-400 text-orange-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-orange-200 mb-2">Track Invites Automatically</h3>
                    <p className="text-orange-300">
                      The bot begins tracking invites immediately, logging all invites and their sources.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/40 backdrop-blur-lg p-6 rounded-lg border border-orange-700/50">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-400 text-orange-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-orange-200 mb-2">Monitor and Reward</h3>
                    <p className="text-orange-300">
                      View detailed statistics and set up automated rewards for top inviters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Commands Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">Available Commands</h2>
            <div className="space-y-4">
              {commands.map((cmd, index) => (
                <div key={index} className="p-4 bg-orange-900/60 backdrop-blur-lg rounded-lg border border-orange-700/50">
                  <code className="text-orange-200">{cmd.command}</code>
                  <p className="text-orange-300 mt-2">{cmd.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">
              Why Use Our Invite Tracker?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-orange-900/40 backdrop-blur-lg p-6 rounded-lg border border-orange-700/50">
                <h3 className="text-xl font-semibold text-orange-200 mb-4">Boost Engagement</h3>
                <p className="text-orange-300">
                  Reward active members and encourage community growth through invites.
                </p>
              </div>
              <div className="bg-orange-900/40 backdrop-blur-lg p-6 rounded-lg border border-orange-700/50">
                <h3 className="text-xl font-semibold text-orange-200 mb-4">Automated Tracking</h3>
                <p className="text-orange-300">
                  No more manual tracking. Let the bot handle everything automatically.
                </p>
              </div>
              <div className="bg-orange-900/40 backdrop-blur-lg p-6 rounded-lg border border-orange-700/50">
                <h3 className="text-xl font-semibold text-orange-200 mb-4">Real-Time Updates</h3>
                <p className="text-orange-300">
                  Get instant notifications and updates on invite activity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center py-12 bg-orange-900/40 backdrop-blur-lg rounded-lg border border-orange-700/50"
          >
            <h2 className="text-3xl font-bold mb-6 text-orange-200">Ready to Grow Your Server?</h2>
            <p className="text-orange-300 mb-8">
              Start tracking invites and rewarding your community today!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
            >
              <UserPlus className="mr-2 h-5 w-5" /> Add Invite Tracker
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}