
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface StoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onPrevious?: () => void;
  onNext?: () => void;
}

export default function StoryCard({
  title,
  description,
  imageUrl,
  onPrevious,
  onNext,
}: StoryCardProps) {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="relative h-full bg-black/20 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className={cn(
          "w-full p-8 transition-all duration-300",
          showDetails ? "translate-y-0" : "translate-y-full"
        )}>
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-white/90">{description}</p>
        </div>
      </div>

      <button 
        className="absolute top-4 right-4 text-white/80 hover:text-white"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide details" : "Show details"}
      </button>

      {onPrevious && (
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
