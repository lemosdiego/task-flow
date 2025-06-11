"use client";

import { useState } from "react";
import "./card.css";
import { HiPencilSquare } from "react-icons/hi2";

export default function CardTasks({ task, onEdit }) {
  const [completedSubTasks, setCompletedSubTasks] = useState(
    Array(task.subtasks.length).fill(false)
  );

  const toggleCompleted = (index) => {
    const updated = [...completedSubTasks];
    updated[index] = !updated[index];
    setCompletedSubTasks(updated);
  };

  return (
    <div className="card">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <ul className="card-subtasks">
        {task.subtasks.map((item, index) => (
          <li
            key={index}
            className="card-subtas-item"
            style={{
              textDecoration: completedSubTasks[index]
                ? "line-through"
                : "none",
            }}
          >
            <span>{item}</span>
            <span
              onClick={() => toggleCompleted(index)}
              className="mark-complete"
            >
              {completedSubTasks[index] ? "desfazer" : "completo"}
            </span>
          </li>
        ))}
      </ul>
      <div className="card-actions">
        <button className="edit-button" onClick={onEdit}>
          <HiPencilSquare className="icon-action text-[#39ff14]" />
        </button>
      </div>
    </div>
  );
}
