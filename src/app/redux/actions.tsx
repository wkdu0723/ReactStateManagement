import { ReduxActionType } from "@/types/enum";
import { AppDispatch, AppState, FetchUserFailureAction, FetchUserRequestAction, FetchUserSuccessAction, User, UserAction } from "@/types/reduxUser";
import { ThunkAction } from "redux-thunk";


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

// 비동기 API 호출을 처리하는 Thunk 액션
export const fetchUser = (): ThunkResult<void> => {
    return (dispatch: AppDispatch) => {
        dispatch(fetchUserRequest());
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((response) => response.json())
            .then((data) => dispatch(fetchUserSuccess(data)))
            .catch((error) => dispatch(fetchUserFailure(error)));
    };
};