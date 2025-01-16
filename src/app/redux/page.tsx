"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./actions";
import { AppDispatch, AppState } from "@/types/reduxUser";

/** redux를 사용 */
export default function ReduxPage() {
    const dispatch = useDispatch<AppDispatch>();
    /**
     * 이렇게 모든 state를 여러개 가지고 올 경우 경고가 뜨게됨
     * Selector unknown returned the root state when called. This can lead to unnecessary rerenders.
       Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.
       useSelector는 범위를 지정해서 가지고 와야함 보통 하나씩 1:1대응하는것을 추천.
     * */
    // const { loading, user, error } = useSelector((state: AppState) => state);
    const loading = useSelector((state: AppState) => state.loading);
    const user = useSelector((state: AppState) => state.user);
    const error = useSelector((state: AppState) => state.error);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return (
        <section className="flex flex-col h-full justify-center items-center">
            <h1>Redux 상태관리 페이지</h1>
            <div className="flex flex-col items-center mt-2">
                <h2>User Info</h2>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {user && (
                    <div>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </div>
                )}
            </div>
        </section>
    );
}