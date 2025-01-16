import { AppState } from "@/types/reduxUser";
import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from "react";

// 액션 타입 정의
type UserAction =
    | { type: "FETCH_USER_REQUEST" }
    | { type: "FETCH_USER_SUCCESS"; payload: { name: string; email: string } }
    | { type: "FETCH_USER_FAILURE"; payload: string };

// 초기 상태
const initialState: AppState = {
    loading: false,
    user: null,
    error: null,
};

// 리듀서 정의
const userReducer = (state: AppState, action: UserAction): AppState => {
    switch (action.type) {
        case "FETCH_USER_REQUEST":
            return { ...state, loading: true, error: null };
        case "FETCH_USER_SUCCESS":
            return { ...state, loading: false, user: action.payload };
        case "FETCH_USER_FAILURE":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// Context 생성
const UserContext = createContext<{
    state: AppState;
    dispatch: Dispatch<UserAction>;
}>({
    state: initialState,
    dispatch: () => undefined,
});

// Provider 컴포넌트
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);