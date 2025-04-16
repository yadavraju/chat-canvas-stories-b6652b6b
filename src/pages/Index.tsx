
import { useState } from "react";
import ChatInput from "@/components/ChatInput";
import StoryCanvas, { Story } from "@/components/StoryCanvas";

const sampleStories: Story[] = [
  {
    id: "1",
    title: "Minimal Divergence",
    description: "Where paths divide, choices emerge. The clean white space punctuated by a single black line represented the moment of decision - a reminder that sometimes the most profound journeys begin with the simplest of divergences.",
    imageUrl: "/lovable-uploads/046c38ba-18c2-48f6-9ca1-ab535b8f7e26.png"
  },
  {
    id: "2",
    title: "The Silent Resilience",
    description: "In the quiet corners of forgotten gardens, the rubber plant stands tall, a testament to nature's resilience and quiet determination. Its glossy leaves catch the sunlight in a dance of shadows, telling stories of patience and endurance through changing seasons.",
    imageUrl: "/lovable-uploads/fba6fdca-c1aa-4ea9-a91e-36720c4ad442.png"
  }
];

export default function Index() {
  const [stories, setStories] = useState<Story[]>(sampleStories);

  const handleSendMessage = (message: string) => {
    // In a real app, you would send this message to an API
    // and get a response to generate a new story
    const newStory: Story = {
      id: String(stories.length + 1),
      title: "Generated Story",
      description: `This story was generated from: "${message}"`,
      imageUrl: "/placeholder.svg"
    };
    
    setStories((prev) => [...prev, newStory]);
  };

  return (
    <div className="flex h-screen bg-zinc-900">
      <div className="w-1/2 flex flex-col border-r border-white/10">
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Chat messages would go here */}
        </div>
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
      
      <div className="w-1/2">
        <StoryCanvas stories={stories} />
      </div>
    </div>
  );
}
