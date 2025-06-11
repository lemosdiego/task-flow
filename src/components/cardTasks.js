"use client";

import { useState } from "react";
import "./card.css";
import { HiPencilSquare } from "react-icons/hi2";
import { IoMdTrash } from "react-icons/io";
import CheckBox from "./checkbox/CheckBox";

export default function CardTasks({ task, onEdit, onDelete }) {
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
                ? "line-through #39ff14 3px"
                : "none",
            }}
          >
            <span>{item}</span>
            <CheckBox
              onClick={() => toggleCompleted(index)}
              className={completedSubTasks[index] ? "checked" : ""}
            />
          </li>
        ))}
      </ul>
      <div className="card-actions">
        <button className="edit-button" onClick={onEdit}>
          <HiPencilSquare className="icon-action text-[#39ff14]" />
        </button>
        <button className="delete-button" onClick={() => onDelete(task.id)}>
          <IoMdTrash className="icon-card-actions text-[#FF5252]" />
        </button>
      </div>
    </div>
  );
}
