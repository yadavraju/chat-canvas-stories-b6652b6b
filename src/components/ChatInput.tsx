
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t border-white/10 bg-[#222222]/30 backdrop-blur-xl">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/40"
      />
      <Button 
        type="submit" 
        size="icon"
        className="bg-white/5 hover:bg-white/10 text-white"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
