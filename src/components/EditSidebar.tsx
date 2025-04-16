
import React, { useState } from 'react';
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

interface EditSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  storyId: string | null;
}

export function EditSidebar({ open, onOpenChange, storyId }: EditSidebarProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real app, you would upload the file to a server here
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle audio file upload
      console.log('Audio file selected:', file.name);
    }
  };

  const handleUpdate = () => {
    // Handle the update logic here
    console.log('Updating story:', { storyId, title, description, imageUrl });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] bg-zinc-900 border-l border-white/10">
        <SheetHeader>
          <SheetTitle className="text-white">Edit Story</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-6 text-white/80">
          {/* Preview Image */}
          <div className="space-y-2">
            <Label className="text-white">Current Image</Label>
            <div className="aspect-video rounded-lg overflow-hidden bg-black/20">
              {imageUrl && <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />}
            </div>
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="text-white"
            />
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
            <Input
              type="file"
              accept="audio/*"
              onChange={handleAudioUpload}
              className="text-white"
            />
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
