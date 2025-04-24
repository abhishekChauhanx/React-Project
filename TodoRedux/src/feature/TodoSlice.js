import { createSlice, nanoid } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload,
                completed: false,
                isEditing: false
            })

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(p => p.id !== action.payload)
        },
        toggleEdit: (state, action) => {
            const todo = state.todos.find(p => p.id === action.payload);
            if (todo) todo.isEditing = !todo.isEditing
        },
        toggleComplete: (state, action) => {
            const todo = state.todos.find(t => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
          },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;

            const todo = state.todos.find(p => p.id === id);

            if (todo) {
                todo.text = newText;
                todo.isEditing = false
            }
        },
    }
})

export const { addTodo, removeTodo, updateTodo, toggleEdit,toggleComplete } = todoSlice.actions;
export default todoSlice.reducer