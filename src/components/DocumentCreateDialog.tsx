"use client";
import { Loader2Icon, Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { toast } from "sonner";
import { useCreateDocument } from "@/app/document/actions";

export default function DocumentCreateDialog() {
  const [documentName, setDocumentName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const documentCreateMutation = useCreateDocument()

  const handleDocumentCreate = () => {
    documentCreateMutation.mutate(documentName);
    setIsOpen(false)
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="w-full">
        <Button className="w-full" asChild>
          <div>
            <Plus className="mr-2 h-4 w-4" />
            New Document
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Document</DialogTitle>
          <DialogDescription>
            You can create a new document here. Click save when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name-1">Title</Label>
            <Input
              id="name-1"
              name="name"
              value={documentName}
              placeholder="New Document"
              onChange={(e) => setDocumentName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleDocumentCreate} type="submit">
            Save changes{" "}
            {documentCreateMutation.isPending && <Loader2Icon className="h-4 w-4 animate-spin" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
