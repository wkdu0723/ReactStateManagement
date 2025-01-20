import { create } from "zustand";
import { AppState } from "@/types/reduxUser";

export interface UserState extends AppState {
    fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
    user: null,
    loading: false,
    error: null,
    fetchUser: async () => {
        if (get().loading) return;
        set({ loading: true, error: null }); // 로딩 시작
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users/1"
            );
            if (!response.ok) throw new Error("Failed to fetch user data");
            const data = await response.json();
            set({ user: data, loading: false }); // 사용자 정보 설정 및 로딩 완료
        } catch (error) {
            if (error instanceof Error)
                set({ error: error.message, loading: false }); // 에러 처리 및 로딩 완료
        }
    },
}));
