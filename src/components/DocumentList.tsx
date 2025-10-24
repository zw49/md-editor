"use client";

import { useState } from "react";
import { Search, Plus, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Card } from "./ui/card";
import DocumentCreateDialog from "./DocumentCreateDialog";

interface Document {
  id: string;
  title: string;
  content: string;
  lastModified: Date;
}

interface DocumentListProps {
  documents: Document[];
  selectedDocId: string | null;
  onSelectDocument: (id: string) => void;
}

export function DocumentList({
  documents,
  selectedDocId,
  onSelectDocument,
}: DocumentListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocuments = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="flex flex-col h-full border-r bg-background">
      <div className="p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <DocumentCreateDialog />
      </div>

      <ScrollArea className="flex-1">
        <div className="px-4 pb-4 space-y-2">
          {filteredDocuments.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {searchQuery ? "No documents found" : "No documents yet"}
            </div>
          ) : (
            filteredDocuments.map((doc) => (
              <Card
                key={doc.id}
                className={`p-3 cursor-pointer transition-colors hover:bg-accent ${
                  selectedDocId === doc.id ? "bg-accent border-primary" : ""
                }`}
                onClick={() => onSelectDocument(doc.id)}
              >
                <div className="flex items-start gap-3">
                  <FileText className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="truncate">{doc.title}</div>
                    <div className="text-muted-foreground text-sm">
                      {formatDate(doc.lastModified)}
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
