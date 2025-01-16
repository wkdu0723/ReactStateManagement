"use client";

import React, { useEffect } from "react";
import { fetchUserApi } from "./api";
import { useUserContext } from "./userContext";

export default function ContextApiPage() {
    const { state, dispatch } = useUserContext();
    const { loading, user, error } = state;

    useEffect(() => {
        const fetchUser = async () => {
            dispatch({ type: "FETCH_USER_REQUEST" });
            try {
                const data = await fetchUserApi();
                dispatch({ type: "FETCH_USER_SUCCESS", payload: { name: data.name, email: data.email } });
            } catch (err) {
                if (err instanceof Error) dispatch({ type: "FETCH_USER_FAILURE", payload: err.message });
            }
        };

        fetchUser();
    }, [dispatch]);

    return (
        <section className="flex flex-col h-full justify-center items-center">
            <h1>Context API 상태관리 페이지</h1>
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
};