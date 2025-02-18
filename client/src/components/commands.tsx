import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const commands = [
  {
    command: "/quiz",
    description: "Generate a practice quiz",
    example: "/quiz math algebra"
  },
  {
    command: "/play",
    description: "Play music in voice channel",
    example: "/play never gonna give you up"
  },
  {
    command: "/invites",
    description: "View invite leaderboard",
    example: "/invites show"
  },
  {
    command: "/ticket",
    description: "Create a support ticket",
    example: "/ticket create help needed"
  }
];

export default function Commands() {
  const { toast } = useToast();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCommand = (command: string, index: number) => {
    navigator.clipboard.writeText(command);
    setCopiedIndex(index);
    toast({
      description: "Command copied to clipboard",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Command</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Example</TableHead>
            <TableHead className="w-[100px]">Copy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {commands.map((cmd, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <TableCell className="font-mono">{cmd.command}</TableCell>
              <TableCell>{cmd.description}</TableCell>
              <TableCell className="font-mono text-muted-foreground">
                {cmd.example}
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyCommand(cmd.example, index)}
                >
                  {copiedIndex === index ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
