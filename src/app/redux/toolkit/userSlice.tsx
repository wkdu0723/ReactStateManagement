// import { AppState } from "@/types/reduxUser";
import { AppState } from "@/types/reduxUser";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 비동기 작업을 처리하는 createAsyncThunk
export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        return response.json();
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: null,
        error: null,
    } as AppState,
    reducers: {}, // 동기 액션 처리
    extraReducers: (builder) => { // 비동기 액션 처리
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUserData.fulfilled, (state: AppState, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUserData.rejected, (state: AppState, action) => {
                state.loading = false;
                state.error = action.error.message ?? null;
            });
    },
});

export default userSlice.reducer;