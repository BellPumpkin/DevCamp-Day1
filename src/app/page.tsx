import Link from "next/link";
import {ModeToggle} from "@/components/ModeToggle";

const btnStyle = "flex w-1/3 h-3/4 min-w-[300px] min-h-[300px] border border-neutral-300 rounded-md overflow-hidden justify-center items-center hover:opacity-80";
const textStyle = "text-7xl font-bold";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center gap-10">
      <div className='absolute top-9 right-9'>
        <ModeToggle/>
      </div>
      <Link href={"/login"} className={`${btnStyle}  bg-blue-300`}>
        <h1 className={`${textStyle}`}>로그인</h1>
      </Link>
      <Link href={"/signup"} className={`${btnStyle} bg-red-300`}>
        <h1 className={`${textStyle}`}>회원가입</h1>
      </Link>
    </div>
  );
}
