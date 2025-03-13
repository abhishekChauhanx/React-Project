import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';



const initialState = {
    notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [],
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addToNotes: (state, action) => {
            const note = action.payload;

            const isDulicate = state.notes.some(p => p.title === note.title)
            if (isDulicate) {
                toast.error("Already Exists!!")
                return
            }

            state.notes.push(note);
            localStorage.setItem("notes", JSON.stringify(state.notes))
            toast.success("Successfully Added!");
        },
        updateToNotes: (state, action) => {
            const note = action.payload
            const index = state.notes.findIndex((item) => item._id === note._id)

            if (index >= 0) {
                state.notes[index] = note
                localStorage.setItem("notes", JSON.stringify(state.notes))
                toast.success('Updated Notes')
            }

        },
        resetAllNotes: (state) => {
            state.notes = []
            localStorage.removeItem("notes")
        },
        removeFromNote: (state, action) => {
            const noteId = action.payload;
            const index = state.notes.findIndex((items) => items._id === noteId)

            if (index >= 0) {
                state.notes.splice(index, 1)
                localStorage.setItem("notes", JSON.stringify(state.notes))
                toast.success("Notes Deleted")
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToNotes, updateToNotes, resetAllNotes, removeFromNote } = noteSlice.actions

export default noteSlice.reducer