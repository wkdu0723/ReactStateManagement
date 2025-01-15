import { ReduxActionType, User, UserAction } from "./actions";

export type State = {
    loading: boolean;
    user: User | null;
    error: string | null;
};

const initialState: State = {
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