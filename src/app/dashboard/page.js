"use client";

import "./dashboard.css";
import CardTasks from "@/components/cardTasks";
import FormTasks from "./form/FormTasks";
import CardPreview from "@/components/cardPreview";
import { useGetTasks } from "@/hooks/useGetTasks";
import { useFormVisibility } from "@/hooks/useFormVisibility";
import { AiOutlinePlus } from "react-icons/ai";
import { useDeleteTask } from "@/hooks/useDeleteTask";
import { useState } from "react";
import { useDeleteSubTask } from "@/hooks/useDeleteSubTask";

export default function Dashboard() {
  const { tasks, getTasks } = useGetTasks();
  const { showForm, openForm, closeForm, formRef } = useFormVisibility();
  const { deleteTask } = useDeleteTask();

  // Estado local para controlar a tarefa em edição (ou null para nova)
  const [editingTask, setEditingTask] = useState(null);

  //deletar subtarefa
  const { deleteSubTask } = useDeleteSubTask(getTasks);

  // Abre formulário para editar a tarefa passada
  const handleEdit = (task) => {
    setEditingTask(task);
    openForm();
  };

  // Abre formulário para criar nova tarefa
  const handleNewTask = () => {
    setEditingTask(null);
    openForm();
  };

  // Função para fechar o formulário e atualizar a lista
  const handleCloseForm = () => {
    setEditingTask(null);
    closeForm();
    getTasks();
  };

  // Deleta a tarefa e atualiza a lista
  const handleDelete = async (id) => {
    await deleteTask(id);
    getTasks();
  };

  return (
    <main className="dashboard-page">
      <div className="container-task">
        <button className="new-task-button" onClick={handleNewTask}>
          <span>Nova Tarefa</span>
          <AiOutlinePlus className="icon" />
        </button>

        {showForm && (
          <div ref={formRef}>
            <FormTasks task={editingTask} closeForm={handleCloseForm} />
          </div>
        )}

        {tasks.map((task) => (
          <CardPreview
            key={task.id}
            task={task}
            onEdit={() => handleEdit(task)}
            onDelete={() => handleDelete(task.id)}
            onDeleteSubTask={(taskId, subTaskIndex) =>
              deleteSubTask(taskId, subTaskIndex)
            }
          />
        ))}
      </div>

      <div className="container-card-task">
        <div className="tasks-list">
          {tasks.map((task) => (
            <CardTasks
              key={task.id}
              task={task}
              onEdit={() => handleEdit(task)}
              onDelete={() => handleDelete(task.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
