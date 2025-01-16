import { applyMiddleware, createStore } from "redux";
import userReducer from "./reducer";
import { thunk } from "redux-thunk";

/**
 * 현재는 사용되지않음
 * redux toolkit의 configureStore 사용 권고
 * 기존 redux의 상태관리 테스트를 위해 사용
*/
export const store = createStore(userReducer, applyMiddleware(thunk));