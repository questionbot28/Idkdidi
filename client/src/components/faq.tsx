import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is EduSphere free to use?",
    answer: "Yes, EduSphere is completely free to use with basic features. We also offer premium features for advanced users."
  },
  {
    question: "How do I add EduSphere to my server?",
    answer: "Click the 'Add to Discord' button at the top of the page and follow the OAuth2 flow to add the bot to your server."
  },
  {
    question: "What permissions does EduSphere need?",
    answer: "EduSphere needs basic permissions like Send Messages, Read Messages, and Connect to Voice Channel to function properly."
  },
  {
    question: "Can I customize the quiz topics?",
    answer: "Yes, you can specify subjects and topics when generating quizzes using the /quiz command."
  },
  {
    question: "How does the music player work?",
    answer: "Simply join a voice channel and use /play followed by a song name or URL. EduSphere will join and start playing."
  }
];

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
