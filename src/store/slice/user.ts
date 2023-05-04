import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface User {
    token: string
}

const initialState: User = {
    token: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set_user_token: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        }
    }
})

export const {set_user_token} = userSlice.actions