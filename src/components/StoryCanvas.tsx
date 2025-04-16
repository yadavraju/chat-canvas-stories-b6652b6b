
import { useState } from "react";
import StoryCard from "./StoryCard";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < stories.length - 1 ? prev + 1 : prev));
  };

  if (stories.length === 0) {
    return (
      <div className="flex items-center justify-center h-full bg-zinc-900 text-white/60">
        Start chatting to generate stories...
      </div>
    );
  }

  return (
    <div className="relative h-full">
      <StoryCard
        {...stories[currentIndex]}
        onPrevious={currentIndex > 0 ? handlePrevious : undefined}
        onNext={currentIndex < stories.length - 1 ? handleNext : undefined}
      />
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {stories.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === currentIndex ? "bg-white" : "bg-white/30"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
