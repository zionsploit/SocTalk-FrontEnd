import { createSlice } from "@reduxjs/toolkit";
import localStorage from "local-storage";

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        value: localStorage.get('token')
    },
    reducers: {
        token: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { token } = tokenSlice.actions;
export default tokenSlice.reducer;