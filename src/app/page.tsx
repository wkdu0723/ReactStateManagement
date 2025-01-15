import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-col h-full justify-center items-center">
        <h1 className="">React 상태관리 종류</h1>
        <div className="flex gap-2 justify-center mt-2">
          <Link className="flex bg-blue-300 w-auto rounded-md p-2" href={"/redux"}>Redux 상태관리 페이지</Link>
          <Link className="flex bg-blue-300 w-auto rounded-md p-2" href={"/contextapi"}>Context Api 상태관리 페이지</Link>
          <Link className="flex bg-blue-300 w-auto rounded-md p-2" href={"/recoil"}>Recoil 상태관리 페이지</Link>
        </div>
      </div>
  );
}
