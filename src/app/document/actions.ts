"use client"
// import { createClient } from "@/utils/supabase/server";
import { createClient } from "@/utils/supabase/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const supabase = createClient();

export const useDeleteDocument = () => {
  const queryClient = useQueryClient()

  return useMutation(
    {
      mutationFn: async ({ id }: { id: string }) => {
        const { data, error } = await supabase.from('documents').delete().eq("id", id)
        if (error) throw error
        return data
      },

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['documents'] })
      }
    }
  )
}

export const useCreateDocument = () => {
  const queryClient = useQueryClient()

  return useMutation(
    {
      mutationFn: async (documentName: string) => {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        const { data, error } = await supabase
          .from("documents")
          .insert([
            { user_id: session?.user?.id, title: documentName, content: "" },
          ])
          .select();
        if (error) {
          console.error(error);
        } else {
          console.log(data);
        }
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['documents'] })
      }
    },
  )
}

export const useFetchDocuments = () => {
  return useQuery({
    queryKey: ["documents"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("documents")
        .select("id,title,updated_at");
      if (error) console.error(error);
      return data;
    }
  })
};

