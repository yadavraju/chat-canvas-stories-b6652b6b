import { useState } from "react";
import ChatInput from "@/components/ChatInput";
import StoryCanvas, { Story } from "@/components/StoryCanvas";
import { EditSidebar } from "@/components/EditSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [showResults, setShowResults] = useState(true);
  const isMobile = useIsMobile();

  const handleSendMessage = (message: string) => {
    const newStory: Story = {
      id: String(stories.length + 1),
      title: "Generated Story",
      description: `This story was generated from: "${message}"`,
      imageUrl: "/placeholder.svg"
    };
    
    setStories((prev) => [...prev, newStory]);
    
    if (isMobile) {
      setShowResults(false);
    }
  };

  const handleSettingsClick = (storyId: string) => {
    const story = stories.find((s) => s.id === storyId);
    if (story) {
      setSelectedStory(story);
      setSidebarOpen(true);
    }
  };

  return (
    <div className="flex h-screen bg-[#1A1F2C] relative overflow-hidden">
      <div className={`${
        isMobile ? (showResults ? 'w-full' : 'w-0') : 'w-1/2'
      } transition-all duration-300 flex flex-col border-r border-white/10`}>
        <div className="flex-1 p-4 overflow-y-auto bg-[#222222]/50">
          {/* Chat messages would go here */}
        </div>
        <ChatInput onSendMessage={handleSendMessage} />
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50 bg-white/10 hover:bg-white/20"
            onClick={() => setShowResults(false)}
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </Button>
        )}
      </div>

      <div className={`${
        isMobile ? (!showResults ? 'w-full' : 'w-0') : 'w-1/2'
      } transition-all duration-300 bg-[#1A1F2C] relative`}>
        <StoryCanvas stories={stories} onSettingsClick={handleSettingsClick} />
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-4 z-50 bg-white/10 hover:bg-white/20"
            onClick={() => setShowResults(true)}
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </Button>
        )}
      </div>

      <EditSidebar 
        open={sidebarOpen} 
        onOpenChange={setSidebarOpen}
        story={selectedStory}
      />
    </div>
  );
}
