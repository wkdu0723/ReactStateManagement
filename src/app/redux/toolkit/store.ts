import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
    reducer: {
        user: userReducer, // "counter" 키로 userReducer 연결
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
