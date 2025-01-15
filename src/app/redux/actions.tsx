import { ThunkAction, ThunkDispatch } from "redux-thunk";

export enum ReduxActionType {
    FETCH_USER_REQUEST = "FETCH_USER_REQUEST",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
}

export interface User {
    id: number;
    name: string;
    email: string;
}

interface AppState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

interface FetchUserRequestAction {
    type: ReduxActionType.FETCH_USER_REQUEST;
}

interface FetchUserSuccessAction {
    type: ReduxActionType.FETCH_USER_SUCCESS;
    payload: User;
}

interface FetchUserFailureAction {
    type: ReduxActionType.FETCH_USER_FAILURE;
    payload: string;
}

export type UserAction = FetchUserRequestAction | FetchUserSuccessAction | FetchUserFailureAction;

export const fetchUserRequest = (): FetchUserRequestAction => ({
    type: ReduxActionType.FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (user: User): FetchUserSuccessAction => ({
    type: ReduxActionType.FETCH_USER_SUCCESS,
    payload: user,
});

export const fetchUserFailure = (error: string): FetchUserFailureAction => ({
    type: ReduxActionType.FETCH_USER_FAILURE,
    payload: error,
});

// ThunkAction 타입 정의
export type ThunkResult<R> = ThunkAction<R, AppState, undefined, UserAction>;
// AppDispatch 타입 정의
export type AppDispatch = ThunkDispatch<AppState, undefined, UserAction>;

// 비동기 API 호출을 처리하는 Thunk 액션
export const fetchUser = (): ThunkResult<void> => {
    return (dispatch: AppDispatch) => {
        dispatch(fetchUserRequest());
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((data) => dispatch(fetchUserSuccess(data)))
            .catch((error) => dispatch(fetchUserFailure(error)));
    };
};