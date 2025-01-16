"use client";

import { useRecoilState, useRecoilValue } from "recoil";
import { fetchUserSelector, userState } from "./userAtom";
import React, { useEffect } from "react";

/**
 * Recoil을 사용하기 위해선 next, react, react-dom의 버젼을 다운그레이드 해야함.
 *  "next": "14.0.0",
    "react": "18.3.1",
    "react-dom": "18.3.1",
 */

/** userState를 구독하는 컴포넌트 */
const CurrentUserInfo = () => {
    const user = useRecoilValue(userState); // userState에서 데이터 가져오기
    if (!user) return <div>Loading...</div>

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default function RecoilPage() {
    const fetchUser = useRecoilValue(fetchUserSelector);
    const [, setUser] = useRecoilState(userState);

    useEffect(() => {
        setUser(fetchUser);
    }, [fetchUser, setUser])

    return (
        <section className="flex flex-col h-full justify-center items-center">
            <h1>Recoil 상태관리 페이지</h1>
            <div className="flex flex-col items-center mt-2">
                <h2>User Info</h2>
                <CurrentUserInfo />
            </div>
        </section>
    );
}