
import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './Feature/NoteSlice'

export const store = configureStore({
    reducer: {
        note: noteReducer
    },
})

