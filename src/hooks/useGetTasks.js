// src/hooks/useGetTasks.js
"use client";

import { supabase } from "@/lib/supabase/client";
import { useState, useEffect, useCallback } from "react";

export function useGetTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  // useCallback evita recriação desnecessária da função
  const getTasks = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      alert("Erro ao carregar tarefas: " + error.message);
      console.error("Erro ao buscar tarefas:", error);
    } else {
      setTasks(data || []);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    getTasks(); // chama a função ao montar
  }, [getTasks]);

  return {
    tasks,
    loading,
    getTasks,
  };
}
