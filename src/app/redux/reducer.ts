import { AppState } from "@/types/reduxUser";
import { ReduxActionType, UserAction } from "./actions";

const initialState: AppState = {
    loading: false,
    user: null,
    error: null,
};

export const userReducer = (state = initialState, action: UserAction) => {
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

export default userReducer;