import { createContext, useContext } from "react";
// Create Contextt
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
});

// Provider
export const TodoProvider = TodoContext.Provider


export const useTodo = () => {
    return useContext(TodoContext)
}
