"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

// resto do código...

export function useDeleteSubTask(refreshTasks) {
  const [isDeletingSubTask, setIsDeletingSubTask] = useState(false);
  const [deletingSubTaskInfo, setDeletingSubTaskInfo] = useState(null);
  // Pode guardar { taskId, subTaskIndex } para controle, se quiser

  const deleteSubTask = async (taskId, subTaskIndex) => {
    setIsDeletingSubTask(true);
    setDeletingSubTaskInfo({ taskId, subTaskIndex });

    try {
      // Busca a tarefa pelo ID (assumindo que você tem acesso à lista ou pode buscar)
      const { data: taskData, error: fetchError } = await supabase
        .from("tasks")
        .select("subtasks")
        .eq("id", taskId)
        .single();

      if (fetchError) throw fetchError;
      if (!taskData) throw new Error("Tarefa não encontrada");

      // Filtra a subtarefa que será removida
      const updatedSubTasks = taskData.subtasks.filter(
        (_, i) => i !== subTaskIndex
      );

      // Atualiza no banco
      const { error: updateError } = await supabase
        .from("tasks")
        .update({ subtasks: updatedSubTasks })
        .eq("id", taskId);

      if (updateError) throw updateError;

      alert("Subtarefa deletada com sucesso");
      if (typeof refreshTasks === "function") await refreshTasks(); // Atualiza a lista de tarefas
    } catch (error) {
      alert("Erro ao deletar subtarefa");
      console.error(error);
    } finally {
      setIsDeletingSubTask(false);
      setDeletingSubTaskInfo(null);
    }
  };

  return {
    isDeletingSubTask,
    deletingSubTaskInfo,
    deleteSubTask,
  };
}
