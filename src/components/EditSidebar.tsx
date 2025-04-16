
import React, { useState, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { Story } from './StoryCanvas';
import { Upload } from 'lucide-react';

interface EditSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  story: Story | null;
}

export function EditSidebar({ open, onOpenChange, story }: EditSidebarProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Update state when story changes
  useEffect(() => {
    if (story) {
      setTitle(story.title);
      setDescription(story.description);
      setImageUrl(story.imageUrl);
    }
  }, [story]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Audio file selected:', file.name);
    }
  };

  const handleUpdate = () => {
    console.log('Updating story:', { title, description, imageUrl });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] bg-zinc-900 border-l border-white/10">
        <SheetHeader>
          <SheetTitle className="text-white">Edit Story</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {/* Preview Image */}
          <div className="space-y-4">
            <Label className="text-white">Current Image</Label>
            <div className="aspect-video rounded-lg overflow-hidden bg-black/20">
              {imageUrl && (
                <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
              )}
            </div>
            <div className="relative">
              <Button
                className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10"
                variant="outline"
              >
                <Upload className="mr-2 h-4 w-4" />
                Replace Image
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </Button>
            </div>
          </div>

          {/* Title Input */}
          <div className="space-y-2">
            <Label className="text-white">Title</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="bg-white/5 border-white/10 text-white"
            />
          </div>

          {/* Description Input */}
          <div className="space-y-2">
            <Label className="text-white">Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="bg-white/5 border-white/10 text-white min-h-[100px]"
            />
          </div>

          {/* Audio Upload */}
          <div className="space-y-2">
            <Label className="text-white">Audio Track</Label>
            <div className="relative">
              <Button
                className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10"
                variant="outline"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Audio
                <Input
                  type="file"
                  accept="audio/*"
                  onChange={handleAudioUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </Button>
            </div>
          </div>

          {/* Update Button */}
          <Button 
            className="w-full bg-white/10 hover:bg-white/20 text-white"
            onClick={handleUpdate}
          >
            Update Story
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
