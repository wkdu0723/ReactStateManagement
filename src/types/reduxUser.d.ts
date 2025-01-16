export interface User {
    name: string;
    email: string;
}

export interface AppState {
    loading: boolean;
    user: User | null;
    error: string | null;
}

// AppDispatch 타입 정의
export type AppDispatch = ThunkDispatch<AppState, undefined, UserAction>;
