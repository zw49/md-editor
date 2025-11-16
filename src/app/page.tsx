"use client";

import DocumentEditor from "@/components/DocumentEditor";
import { DocumentList } from "@/components/DocumentList";
import Menu from "@/components/Menu";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export default function Home() {
  const supabase = createClient();
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [document, setDocument] = useState<{ title: string; content: string }>({
    title: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectDocument = async (id: string) => {
    setSelectedDocId(id);
    setIsLoading(true);
    const { data, error } = await supabase
      .from("documents")
      .select("title,content")
      .eq("id", id)
      .single();
    setIsLoading(false);
    setDocument({ title: data?.title, content: data?.content });
    // fetch the content of the selected document
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
