import { motion } from "framer-motion";
import { GraduationCap, Music, Users, Ticket, MessageSquare, Brain, PlayCircle, Lock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Educational Tools",
    description: "Generate practice questions and quizzes to help students learn",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    icon: <Music className="h-8 w-8 text-primary" />,
    title: "Music Player",
    description: "High-quality music streaming with playlist management",
    image: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Invite Tracking",
    description: "Track and manage server invites with detailed analytics",
    image: "https://images.unsplash.com/photo-1506729623306-b5a934d88b53"
  },
  {
    icon: <Ticket className="h-8 w-8 text-primary" />,
    title: "Ticket System",
    description: "Organized support ticket management for your community",
    image: "https://images.unsplash.com/photo-1604175246901-47caa4f038c8"
  }
];

export default function Features() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src={feature.image} 
                alt={feature.title}
                className="rounded-lg w-full h-48 object-cover"
              />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
