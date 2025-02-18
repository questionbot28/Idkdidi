import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { Brain, BookOpen, GraduationCap, Star } from "lucide-react";

export default function QuestionGenerator() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 to-slate-900 text-white">
      <Nav />
      
      <div className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Question Generator
          </h1>
          
          <div className="space-y-8">
            <p className="text-xl text-red-200">
              Generate practice questions and quizzes for various subjects and topics.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-900/40 p-6 rounded-lg border border-red-700/50 hover:border-red-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-red-400" />
                  <h3 className="text-xl font-semibold text-red-200">Multiple Subjects</h3>
                </div>
                <p className="text-red-300">Generate questions for Math, Science, History, and more.</p>
              </div>
              
              <div className="bg-red-900/40 p-6 rounded-lg border border-red-700/50 hover:border-red-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-6 w-6 text-red-400" />
                  <h3 className="text-xl font-semibold text-red-200">Difficulty Levels</h3>
                </div>
                <p className="text-red-300">Choose from various difficulty levels for optimal learning.</p>
              </div>
            </div>
            
            <div className="bg-red-900/40 p-8 rounded-lg border border-red-700/50">
              <h2 className="text-2xl font-semibold mb-6 text-red-200">Generator Commands</h2>
              <div className="space-y-4">
                <div className="p-4 bg-red-900/60 rounded-lg border border-red-700/50">
                  <code className="text-red-200">/quiz [subject] [topic]</code>
                  <p className="text-red-300 mt-2">Generate a quiz for a specific subject and topic</p>
                </div>
                <div className="p-4 bg-red-900/60 rounded-lg border border-red-700/50">
                  <code className="text-red-200">/quiz difficulty [easy|medium|hard]</code>
                  <p className="text-red-300 mt-2">Set the difficulty level for generated questions</p>
                </div>
                <div className="p-4 bg-red-900/60 rounded-lg border border-red-700/50">
                  <code className="text-red-200">/quiz stats</code>
                  <p className="text-red-300 mt-2">View your quiz performance statistics</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
