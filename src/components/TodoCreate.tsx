import { useDispatch } from "react-redux";
import { TodoType } from "../types/Types";
import { createTodo } from "../redux/todoSlice";
import { useState } from "react";

function TodoCreate() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim().length === 0) {
      alert("Todo Giriniz!");
      return;
    }

    const payload: TodoType = {
      id: Math.floor(Math.random() * 10000),
      content: newTodo,
    };

    dispatch(createTodo(payload));
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Todo Giriniz..."
        className="todo-input"
        type="text"
      />
      <button onClick={handleCreateTodo} className="todo-create-button">
        Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;
