import "./card.css";
import { HiPencilSquare } from "react-icons/hi2";
import { IoMdTrash } from "react-icons/io";

export default function CardPreview({ task, onEdit, onDelete }) {
  return (
    <span className="task-create">
      <h3>{task.title}</h3>
      <div className="task-actions">
        <button className="edit-button" onClick={onEdit}>
          <HiPencilSquare className="icon-action text-[#39ff14]" />
        </button>
        <button className="delete-button" onClick={() => onDelete(task.id)}>
          <IoMdTrash className="icon-card-actions text-[#FF5252]" />
        </button>
      </div>
    </span>
  );
}
