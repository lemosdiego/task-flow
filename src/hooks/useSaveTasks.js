"use client";

import { supabase } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export function useSaveTasks(task, onClose, onClearEdit) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subTaskInput, setSubTaskInput] = useState("");
  const [subTasks, setSubTasks] = useState([]);

  // Carrega os dados da tarefa quando está em modo de edição
  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setSubTasks(task.subtasks || []);
    } else {
      clearForm();
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (task) {
      // Modo de edição
      const { error } = await supabase
        .from("tasks")
        .update({
          title,
          description,
          subtasks: subTasks,
        })
        .eq("id", task.id);

      if (error) {
        alert("Erro ao atualizar tarefa");
        console.error(error);
      } else {
        alert("Tarefa atualizada com sucesso");
        clearForm();
        if (typeof onClearEdit === "function") onClearEdit();
        if (typeof onClose === "function") onClose();
      }
    } else {
      // Nova tarefa
      const { error } = await supabase.from("tasks").insert([
        {
          title,
          description,
          subtasks: subTasks,
        },
      ]);

      if (error) {
        alert("Erro ao cadastrar tarefa");
        console.error(error);
      } else {
        alert("Tarefa cadastrada com sucesso");
        clearForm();
        if (typeof onClose === "function") onClose();
      }
    }
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setSubTaskInput("");
    setSubTasks([]);
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    subTaskInput,
    setSubTaskInput,
    subTasks,
    setSubTasks,
    handleSubmit,
  };
}
