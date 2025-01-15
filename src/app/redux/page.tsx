"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, fetchUser } from "./actions";
import { State } from "./reducer";

export default function ReduxPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, user, error } = useSelector((state: State) => state);

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
