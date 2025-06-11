// "use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export function useDeleteTask(refreshTasks) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const deleteTask = async (id) => {
    setIsDeleting(true);
    setDeletingId(id);

    const { error } = await supabase.from("tasks").delete().eq("id", id);

    if (error) {
      alert("Erro ao deletar tarefa");
      console.error(error);
    } else {
      alert("Tarefa deletada com sucesso");
      if (typeof refreshTasks === "function") await refreshTasks(); // Atualiza lista
    }

    setIsDeleting(false);
    setDeletingId(null);
  };

  return {
    isDeleting,
    deletingId,
    deleteTask,
  };
}
