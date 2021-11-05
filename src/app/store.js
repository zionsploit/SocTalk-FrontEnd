import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from './features/userSlices'
import tokenSliceReducer from './features/tokenSlice'

export default configureStore({
    reducer: {
        userReducer: userSliceReducer,
        tokenReducer: tokenSliceReducer
    }
})