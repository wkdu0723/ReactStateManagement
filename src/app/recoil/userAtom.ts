import { User } from "@/types/reduxUser";
import { atom, selector } from "recoil";

// Atom 상태 정의
export const userState = atom<User | null>({
    key: "userState",
    default: null,
});

// 비동기 데이터 처리
export const fetchUserSelector = selector<User>({
    key: "fetchUserSelector", // 유니크한 키
    get: async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users/1"
            );
            if (!response.ok) throw new Error("Failed to fetch user data");
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },
});
