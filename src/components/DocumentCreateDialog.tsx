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
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { toast } from "sonner";

export default function DocumentCreateDialog() {
  const [documentName, setDocumentName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseKey = process.env
    .NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY as string;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const handleDocumentCreate = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("documents")
      .insert([{ title: documentName, content: "" }])
      .select();
    if (error) {
      console.error(error);
      toast.error("Error creating document");
    } else {
      console.log(data);
      toast.success("Document created successfully");
      setIsOpen(false);
    }
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button className="w-full" onClick={() => setIsOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Document
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
            {isLoading && <Loader2Icon className="h-4 w-4 animate-spin" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
