import React, { useState } from "react";
import "./Todo.css";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  function hanldeSubmit() {
    if (!value.trim()) {
      return;
    }
    const todo = {
      text: value,
      id: Date.now()
    };
    setTodos((prev) => [...prev, todo]);
    setValue("");
  }

  function handleClose(id) {
   setTodos(prev => prev.filter((i)=>  i.id !==id   ))
  }
  return (
    <div className="container">
      <input
        type="text"
        placeholder="New todos"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={hanldeSubmit}>Add</button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button onClick={()=>handleClose(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
