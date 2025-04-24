import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleComplete, toggleEdit, updateTodo } from "./feature/todoSlice";

const TodoApp = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [editInput, setEditInput] = useState("");

    const handleAdd = () => {
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput("");
        }
    };

    const handleUpdate = (todo) => {
    if (editInput.trim()) {
        dispatch(updateTodo({ id: todo.id, newText: editInput }));
        setEditInput(""); // Clear after saving
    }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Todo App</h2>
            <input
                type="text"
                placeholder="Enter todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ margin: "10px 0" }}>
                        {todo.isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={editInput}
                                    onChange={(e) => setEditInput(e.target.value)}
                                />
                                <button onClick={() => handleUpdate(todo)}>Save</button>
                            </>
                        ) : (
                            <>
                                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                                    {todo.text}
                                </span>
                                <button onClick={() => dispatch(toggleComplete(todo.id))}>
                                    {todo.completed ? "Undo" : "Complete"}
                                </button>
                                <button onClick={() => {
                                    setEditInput(todo.text);
                                    dispatch(toggleEdit(todo.id));
                                }}>
                                    Edit
                                </button>
                            </>
                        )}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
