import { useSaveTasks } from "@/hooks/useSaveTasks";
import { AiOutlinePlus } from "react-icons/ai";
import "./form.css";

export default function FormTasks({ task, closeForm, clearEditTask }) {
  const {
    title,
    setTitle,
    description,
    setDescription,
    subTaskInput,
    setSubTaskInput,
    subTasks,
    setSubTasks,
    handleSubmit,
  } = useSaveTasks(task, closeForm, clearEditTask); // <-- Aqui passa como onClearEdit

  function handleAddSubTask() {
    if (subTaskInput.trim() !== "") {
      setSubTasks([...subTasks, subTaskInput]);
      setSubTaskInput("");
    }
  }

  return (
    <form className="form-new-task" onSubmit={handleSubmit}>
      <div className="box-1">
        <input
          type="text"
          placeholder="Titulo da Tarefa"
          className="task-inputs"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Descrição da Tarefa"
          className="task-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="box-3">
        <input
          type="text"
          placeholder="Escreva subtarefas (opcional)"
          className="task-inputs"
          value={subTaskInput}
          onChange={(e) => setSubTaskInput(e.target.value)}
        />
        <AiOutlinePlus
          className="icon-form"
          onClick={handleAddSubTask}
          title="Adicionar subtarefa"
        />
      </div>
      <ul>
        {subTasks.map((subTask, index) => (
          <li key={index}>{subTask}</li>
        ))}
      </ul>
      <button type="submit" className="btn-submit">
        {task ? "Salvar Edição" : "Adicionar Tarefa"}
      </button>
    </form>
  );
}
