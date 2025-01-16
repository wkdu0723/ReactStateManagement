
"use client";

import React from "react";
import { RecoilRoot } from "recoil";

export default function RecoilLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <RecoilRoot>
            <React.Suspense fallback={<div>Loading...</div>}>
                {children}
            </React.Suspense>
        </RecoilRoot>
    );
};