
import { useState } from "react";
import StoryCard from "./StoryCard";
import { ScrollArea } from "./ui/scroll-area";

export interface Story {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface StoryCanvasProps {
  stories: Story[];
}

export default function StoryCanvas({ stories }: StoryCanvasProps) {
  if (stories.length === 0) {
    return (
      <div className="flex items-center justify-center h-full bg-zinc-900 text-white/60">
        Start chatting to generate stories...
      </div>
    );
  }

  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-4 p-4">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            {...story}
          />
        ))}
      </div>
    </ScrollArea>
  );
}
