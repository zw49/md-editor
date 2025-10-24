"use client";

import DocumentEditor from "@/components/DocumentEditor";
import { DocumentList } from "@/components/DocumentList";
import Menu from "@/components/Menu";
import { useState } from "react";

interface Document {
  id: string;
  title: string;
  content: string;
  lastModified: Date;
}

export default function Home() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      title: "Welcome Document",
      content:
        'Welcome to your document editor! This is a sample document to get you started.\n\nYou can edit this document or create new ones using the "New Document" button.',
      lastModified: new Date("2025-10-14"),
    },
    {
      id: "2",
      title: "Meeting Notes",
      content:
        "Team meeting on October 10, 2025\n\nAgenda:\n- Project updates\n- Timeline review\n- Action items",
      lastModified: new Date("2025-10-10"),
    },
    {
      id: "3",
      title: "Ideas & Brainstorming",
      content: "Collection of ideas for the upcoming quarter...",
      lastModified: new Date("2025-10-08"),
    },
  ]);
  const [selectedDocId, setSelectedDocId] = useState<string | null>("1");

  return (
    <div className="flex h-screen bg-background">
      <div className="w-80 flex-shrink-0">
        <DocumentList
          documents={documents}
          selectedDocId={selectedDocId}
          onSelectDocument={setSelectedDocId}
        />
      </div>
      <div className="flex-1 m-5">
        <DocumentEditor />
      </div>
      <div className="fixed top-5 right-5">
        <Menu />
      </div>
    </div>
  );
}
