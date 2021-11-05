import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {}
    },
    reducers: {
        getLoginInfo: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { getLoginInfo } = userSlice.actions

export default userSlice.reducer;
