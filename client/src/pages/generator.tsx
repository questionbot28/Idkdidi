import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { 
  Brain, 
  BookOpen, 
  GraduationCap, 
  Star, 
  Clock,
  Target,
  Users,
  Sparkles
} from "lucide-react";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <BookOpen className="h-6 w-6 text-red-400" />,
    title: "Customizable Quiz System",
    description: "Create and take quizzes on various subjects with tailored difficulty levels",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-red-400" />,
    title: "Instant Feedback",
    description: "Receive immediate feedback with correct answers and explanations",
  },
  {
    icon: <Target className="h-6 w-6 text-red-400" />,
    title: "Study Resources",
    description: "Access helpful resources, study guides, and academic tips",
  },
  {
    icon: <Clock className="h-6 w-6 text-red-400" />,
    title: "Progress Tracking",
    description: "Monitor your academic progress and identify areas for improvement",
  }
];

const benefits = [
  {
    title: "Interactive Learning",
    description: "Engage with content through quizzes, flashcards, and multiple-choice questions",
  },
  {
    title: "Personalized Study Plans",
    description: "Create custom study plans based on your academic goals",
  },
  {
    title: "Study Reminders",
    description: "Stay on track with notifications about upcoming quizzes and deadlines",
  },
  {
    title: "Collaborative Learning",
    description: "Join study sessions with classmates for group learning experiences",
  }
];

export default function QuestionGenerator() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 to-slate-900 text-white flex flex-col">
      <Nav />

      <div className="container mx-auto px-4 pt-24 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              📚 EduSphere Education Bot
            </h1>
            <p className="text-xl text-red-200 mb-8">
              Your Personal Learning Assistant for Enhanced Educational Experience
            </p>
            <p className="text-red-300">
              Whether you're a student looking for interactive quizzes, study reminders, or educational resources, 
              or an educator wanting to engage your students, EduSphere is here to make your educational journey 
              easier, more efficient, and more enjoyable.
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
                className="bg-red-900/40 backdrop-blur-lg p-6 rounded-lg border border-red-700/50 hover:border-red-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-red-200">{feature.title}</h3>
                </div>
                <p className="text-red-300">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Quiz System Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Interactive Learning System</h2>
            <div className="bg-red-900/40 p-8 rounded-lg border border-red-700/50">
              <div className="space-y-6">
                <div className="p-4 bg-red-900/60 rounded-lg border border-red-700/50">
                  <code className="text-red-200">/quiz create [subject] [topic]</code>
                  <p className="text-red-300 mt-2">Generate custom quizzes for specific subjects and topics</p>
                </div>
                <div className="p-4 bg-red-900/60 rounded-lg border border-red-700/50">
                  <code className="text-red-200">/quiz difficulty [easy|medium|hard]</code>
                  <p className="text-red-300 mt-2">Adjust quiz difficulty to match your learning level</p>
                </div>
                <div className="p-4 bg-red-900/60 rounded-lg border border-red-700/50">
                  <code className="text-red-200">/quiz collaborate</code>
                  <p className="text-red-300 mt-2">Start a collaborative study session with classmates</p>
                </div>
                <div className="p-4 bg-red-900/60 rounded-lg border border-red-700/50">
                  <code className="text-red-200">/quiz progress</code>
                  <p className="text-red-300 mt-2">View your learning progress and statistics</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-red-400">
              Why Choose EduSphere?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-red-900/40 backdrop-blur-lg p-6 rounded-lg border border-red-700/50"
                >
                  <h3 className="text-xl font-semibold text-red-200 mb-4">{benefit.title}</h3>
                  <p className="text-red-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center py-12 bg-red-900/40 backdrop-blur-lg rounded-lg border border-red-700/50"
          >
            <h2 className="text-3xl font-bold mb-6 text-red-200">Ready to Enhance Your Learning?</h2>
            <p className="text-red-300 mb-8">
              Start your educational journey with EduSphere today!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
            >
              <GraduationCap className="mr-2 h-5 w-5" /> Get Started with EduSphere
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}