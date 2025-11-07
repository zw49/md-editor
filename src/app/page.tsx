"use client";

import DocumentEditor from "@/components/DocumentEditor";
import { DocumentList } from "@/components/DocumentList";
import Menu from "@/components/Menu";
import { useState } from "react";

export default function Home() {
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [document, setDocument] = useState<{ title: string; content: string }>({
    title: "",
    content: "",
  });

  const handleSelectDocument = (id: string, content: string, title: string) => {
    setSelectedDocId(id);
    setDocument({ title: title, content: content });
  };

  return (
    <div className="flex h-screen bg-background">
      <div className="w-80 flex-shrink-0">
        <DocumentList
          selectedDocId={selectedDocId}
          onSelectDocument={handleSelectDocument}
        />
      </div>
      <div className="flex-1 min-h-screen">
        <DocumentEditor
          id={selectedDocId}
          document={document}
          onChange={setDocument}
        />
      </div>
      <div className="fixed top-5 right-5">
        <Menu />
      </div>
    </div>
  );
}
