import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { 
  Ticket, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  BarChart,
  Users,
  HelpCircle
} from "lucide-react";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6 text-emerald-400" />,
    title: "Support Requests",
    description: "For any general questions or help using EduSphere",
  },
  {
    icon: <AlertCircle className="h-6 w-6 text-emerald-400" />,
    title: "Bug Reports",
    description: "Report any bugs or issues you encounter within the system",
  },
  {
    icon: <HelpCircle className="h-6 w-6 text-emerald-400" />,
    title: "Feature Requests",
    description: "Suggest new features or improvements to make EduSphere better",
  },
  {
    icon: <BarChart className="h-6 w-6 text-emerald-400" />,
    title: "Instant Confirmation",
    description: "Receive immediate confirmation when your ticket is submitted",
  }
];

const steps = [
  {
    title: "Choose Your Ticket Category",
    description: "Select the most relevant category based on your issue, such as technical support, feature requests, or general feedback.",
  },
  {
    title: "Provide Detailed Information",
    description: "Describe your issue or suggestion in detail. This allows our team to get to the root of the problem or understand your idea clearly.",
  },
  {
    title: "Submit Your Ticket",
    description: "Once your information is submitted, our support team will start reviewing your ticket and work toward a solution.",
  },
  {
    title: "Get Notified",
    description: "You will receive real-time updates about your ticket's status. Whether it's being reviewed, in progress, or resolved, you'll always know what's going on.",
  }
];

export default function TicketSystem() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 to-slate-900 text-white flex flex-col">
      <Nav />

      <div className="container mx-auto px-4 pt-24 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              🎫 EduSphere Ticket System
            </h1>
            <p className="text-xl text-emerald-200 mb-8">
              Get the help you need, when you need it. Our ticket system ensures your concerns are addressed swiftly and effectively.
            </p>
            <p className="text-emerald-300">
              Whether you're encountering technical issues, need assistance with a feature, or want to provide feedback, 
              our ticket system ensures that your concerns are addressed swiftly and effectively.
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
                className="bg-emerald-900/40 backdrop-blur-lg p-6 rounded-lg border border-emerald-700/50 hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-emerald-200">{feature.title}</h3>
                </div>
                <p className="text-emerald-300">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          {/* How It Works Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">How It Works</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-emerald-900/40 backdrop-blur-lg p-6 rounded-lg border border-emerald-700/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-400 text-emerald-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-200 mb-2">{step.title}</h3>
                      <p className="text-emerald-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Use Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">
              Why Use the EduSphere Ticket System?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-emerald-900/40 backdrop-blur-lg p-6 rounded-lg border border-emerald-700/50">
                <h3 className="text-xl font-semibold text-emerald-200 mb-4">Efficient Resolution</h3>
                <p className="text-emerald-300">
                  Our support team works quickly to resolve issues, ensuring your EduSphere experience remains seamless.
                </p>
              </div>
              <div className="bg-emerald-900/40 backdrop-blur-lg p-6 rounded-lg border border-emerald-700/50">
                <h3 className="text-xl font-semibold text-emerald-200 mb-4">Transparent Process</h3>
                <p className="text-emerald-300">
                  Track your ticket status in real-time. No more waiting in uncertainty.
                </p>
              </div>
              <div className="bg-emerald-900/40 backdrop-blur-lg p-6 rounded-lg border border-emerald-700/50">
                <h3 className="text-xl font-semibold text-emerald-200 mb-4">Community Growth</h3>
                <p className="text-emerald-300">
                  Your feedback helps shape EduSphere's future features and improvements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center py-12 bg-emerald-900/40 backdrop-blur-lg rounded-lg border border-emerald-700/50"
          >
            <h2 className="text-3xl font-bold mb-6 text-emerald-200">Need Help? We're Ready!</h2>
            <p className="text-emerald-300 mb-8">
              Our support team is here to assist you with any questions or concerns.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600"
            >
              <MessageSquare className="mr-2 h-5 w-5" /> Create a Ticket
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}