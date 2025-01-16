"use client";

import { AppDispatch } from "@/types/reduxUser";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { useEffect } from "react";
import { fetchUserData } from "./userSlice";

/** redux-toolkit을 사용 */
export default function ReduxPage() {
    const dispatch = useDispatch<AppDispatch>(); // dispatch 타입을 AppDispatch로 설정
    const { loading, user, error } = useSelector((state: RootState) => {
        return state.user;
    });

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    return (
        <section className="flex flex-col h-full justify-center items-center">
            <h1>Redux-toolkit 상태관리 페이지</h1>
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