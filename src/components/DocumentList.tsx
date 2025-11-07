"use client";

import { useEffect, useState } from "react";
import { Search, Plus, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Card } from "./ui/card";
import DocumentCreateDialog from "./DocumentCreateDialog";
import { createClient } from "@supabase/supabase-js";

interface Document {
  id: string;
  title: string;
  content: string;
  updated_at: string;
}

interface DocumentListProps {
  selectedDocId: string | null;
  onSelectDocument: (id: string, content: string, title: string) => void;
}

export function DocumentList({
  selectedDocId,
  onSelectDocument,
}: DocumentListProps) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseKey = process.env
    .NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY as string;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const { data, error } = await supabase
        .from("documents")
        .select("id,title,content,updated_at");

      if (error) console.error(error);
      else {
        console.log(data);
        setDocuments(data as Document[]);
      }
    };

    fetchDocuments();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocuments = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
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
                onClick={() => onSelectDocument(doc.id, doc.content, doc.title)}
              >
                <div className="flex items-start gap-3">
                  <FileText className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="truncate">{doc.title}</div>
                    <div className="text-muted-foreground text-sm">
                      {formatDate(doc.updated_at)}
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
