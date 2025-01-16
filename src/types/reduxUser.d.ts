import { ReduxActionType } from "./enum";

export interface User {
    name: string;
    email: string;
}

export interface AppState {
    loading: boolean;
    user: User | null;
    error: string | null;
}

export interface FetchUserRequestAction {
    type: ReduxActionType.FETCH_USER_REQUEST;
}

export interface FetchUserSuccessAction {
    type: ReduxActionType.FETCH_USER_SUCCESS;
    payload: User;
}

export interface FetchUserFailureAction {
    type: ReduxActionType.FETCH_USER_FAILURE;
    payload: string;
}

export type UserAction =
    | FetchUserRequestAction
    | FetchUserSuccessAction
    | FetchUserFailureAction;

// AppDispatch 타입 정의
export type AppDispatch = ThunkDispatch<AppState, undefined, UserAction>;
