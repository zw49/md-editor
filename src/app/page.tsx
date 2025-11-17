"use client";

import DocumentEditor from "@/components/DocumentEditor";
import { DocumentList } from "@/components/DocumentList";
import Menu from "@/components/Menu";
import { createClient } from "@/utils/supabase/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";


export const SelectedDocumentContext = createContext<string | null>(null);

const queryClient = new QueryClient();

export default function Home() {
  // lets use a context for the selected document
  const supabase = createClient();

  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

  const [document, setDocument] = useState<{ title: string; content: string }>({
    title: "",
    content: "",
  });
  // const [isLoading, setIsLoading] = useState(false);

  const handleSelectDocument = async (id: string) => {
    setSelectedDocId(id);
    // setIsLoading(true);
    const { data } = await supabase
      .from("documents")
      .select("title,content")
      .eq("id", id)
      .single();
    // setIsLoading(false);
    setDocument({ title: data?.title, content: data?.content });
    // fetch the content of the selected document
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SelectedDocumentContext value={selectedDocId}>
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
            <Menu setSelectedDocumentId={setSelectedDocId} />
          </div>
        </div>
      </SelectedDocumentContext>
    </QueryClientProvider>
  );
}
