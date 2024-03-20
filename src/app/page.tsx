import SignUp from "@/components/SignUp";
import {ModeToggle} from "@/components/ModeToggle";

export default function Home() {
  return (
    <section className='flex w-full h-screen justify-center items-center'>
      <div className='absolute top-9 right-9'>
        <ModeToggle/>
      </div>
      <div className='w-[550px] h-[600px] border border-neutral-300 rounded-md p-5'>
        <div className={'flex flex-col mb-5'}>
          <h3 className='text-2xl font-bold'>계정을 생성합니다.</h3>
          <p className='text-sm text-slate-600'>필수 정보를 입력해볼게요.</p>
        </div>
        <SignUp />
      </div>
    </section>
  );
}
