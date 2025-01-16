import { ReduxActionType } from "@/types/enum";
import { AppState, UserAction } from "@/types/reduxUser";
import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from "react";

// 초기 상태
const initialState: AppState = {
    loading: false,
    user: null,
    error: null,
};

// 리듀서 정의
const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case ReduxActionType.FETCH_USER_REQUEST:
            return { ...state, loading: true };
        case ReduxActionType.FETCH_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case ReduxActionType.FETCH_USER_FAILURE:
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