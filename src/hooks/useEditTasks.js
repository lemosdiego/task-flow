import { useState } from "react";

export function useEditTask() {
  const [editingTask, setEditingTask] = useState(null);

  // Função para iniciar a edição: define a tarefa que será editada
  const startEditTask = (task) => {
    setEditingTask(task);
  };

  // Função para limpar a edição (quando cancelar ou finalizar)
  const clearEditTask = () => {
    setEditingTask(null);
  };

  return {
    editingTask,
    startEditTask,
    clearEditTask,
  };
}
