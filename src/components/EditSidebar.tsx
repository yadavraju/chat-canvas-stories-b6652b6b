
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface EditSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  storyId: string | null;
}

export function EditSidebar({ open, onOpenChange, storyId }: EditSidebarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] bg-zinc-900 border-l border-white/10">
        <SheetHeader>
          <SheetTitle className="text-white">Edit Story</SheetTitle>
        </SheetHeader>
        <div className="mt-6 text-white/80">
          {/* TODO: Add form fields for editing story */}
          Editing story: {storyId}
        </div>
      </SheetContent>
    </Sheet>
  );
}
