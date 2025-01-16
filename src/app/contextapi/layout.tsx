"use client";

import { UserProvider } from "./userContext";

export default function ContextApiLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    );
};