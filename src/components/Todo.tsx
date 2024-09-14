import { useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck, FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    if (newContent.trim() === "") {
      alert("Todo içeriği boş olamaz.");
      return;
    }

    dispatch(
      updateTodo({
        id,
        content: newContent,
      })
    );
    setIsEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        padding: "16px",
        marginTop: "25px",
        borderRadius: "5px",
      }}
    >
      {isEditing ? (
        <input
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          style={{
            width: "400px",
            border: "none",
            borderBottom: "1px solid lightblue",
            outline: "none",
          }}
        />
      ) : (
        <div>{content}</div>
      )}
      <div>
        <IoMdRemoveCircleOutline
          onClick={handleRemoveTodo}
          className="icons"
          style={{ marginRight: "8px" }}
        />
        {isEditing ? (
          <FaCheck onClick={handleUpdateTodo} className="icons" />
        ) : (
          <FaRegEdit onClick={() => setIsEditing(true)} className="icons" />
        )}
      </div>
    </div>
  );
}

export default Todo;
