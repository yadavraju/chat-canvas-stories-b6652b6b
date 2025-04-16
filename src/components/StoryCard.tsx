
import React from 'react';
import { Download, Settings } from 'lucide-react';
import { Button } from './ui/button';

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
  return (
    <div className="relative bg-white/5 rounded-lg overflow-hidden mb-4">
      {/* Image Section */}
      <div className="relative h-[300px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
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
      </div>

      {/* Content Section */}
      <div className="p-4 bg-black/40">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-sm text-white/80 mb-4">{description}</p>
        
        {/* Audio Player */}
        <div className="w-full">
          <audio
            controls
            className="w-full h-8 [&::-webkit-media-controls-panel]:bg-black/40 [&::-webkit-media-controls-current-time-display]:text-white [&::-webkit-media-controls-time-remaining-display]:text-white"
          >
            <source src="#" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}
