import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "react 상태관리",
  description: "상태관리 라이브러리 테스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="absolute w-full h-full">
        {children}
      </body>
    </html>
  );
}
