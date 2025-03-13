import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    name: string,
    email: string
}

const initialState: CounterState = {
    name: "Zoker1",
    email: 'zoker@gmail.com',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateAction: (state,action) => {
          state.name = action.payload.name
          state.email = action.payload.email
        },
        removeUser:(state)=> state={}

      
    },
})

// Action creators are generated for each case reducer function
export const { updateAction,removeUser } = userSlice.actions

export default userSlice.reducer