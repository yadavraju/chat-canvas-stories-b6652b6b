
import React, { useState } from 'react';
import { Download, Settings, Play, Pause } from 'lucide-react';
import { Button } from './ui/button';
import { AspectRatio } from './ui/aspect-ratio';

interface StoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onSettingsClick?: () => void;
}

export default function StoryCard({
  title,
  description,
  imageUrl,
  onSettingsClick,
}: StoryCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Audio play/pause logic would go here
  };

  return (
    <div className="relative w-full bg-white/5 rounded-lg overflow-hidden mb-4">
      <AspectRatio ratio={9/16} className="relative bg-black/20">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 bg-black/20 hover:bg-black/40"
          >
            <Download className="h-4 w-4 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 bg-black/20 hover:bg-black/40"
            onClick={onSettingsClick}
          >
            <Settings className="h-4 w-4 text-white" />
          </Button>
        </div>
      </AspectRatio>

      <div className="p-4 bg-black/40">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-sm text-white/80 mb-4">{description}</p>
        
        <div className="flex items-center gap-3 text-white/80">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 bg-black/20 hover:bg-black/40"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-white" />
            ) : (
              <Play className="h-4 w-4 text-white" />
            )}
          </Button>
          <span>Ambient soundtrack available</span>
        </div>
      </div>
    </div>
  );
}
