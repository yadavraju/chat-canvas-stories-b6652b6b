
import React from 'react';

interface StoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function StoryCard({
  title,
  description,
  imageUrl,
}: StoryCardProps) {
  return (
    <div className="relative h-[350px] bg-black/10 rounded-lg overflow-hidden mb-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
        <div className="w-full p-6">
          <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
          <p className="text-sm text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
}
