"use client";

import React, { useEffect } from "react";
import { useUserStore } from "./store";

export default function ZustandPage() {
    const { user, loading, error, fetchUser } = useUserStore();

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <section className="flex flex-col h-full justify-center items-center">
            <h1>Zustand 상태관리 페이지</h1>
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