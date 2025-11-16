"use server"

import { createClient } from "@/utils/supabase/server";


export const updateDocumentContent = async (documentId: string, content: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('documents')
    .update({ content })
    .eq('id', documentId)
    .select()

  console.log(data)
  if (error) {
    console.error(error)
    return error;
  }
  return data
}
