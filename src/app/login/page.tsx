"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import Link from "next/link";
import {useAppSelector} from "@/lib/hooks";
import {useRouter} from "next/navigation";

const UserLoginSchema = z.object({
  userId: z.string(),
  userPassword: z.string()
})

export default function LoginPage() {

  const join = useAppSelector((state) => state.join);
  const router = useRouter();

  const form = useForm<z.infer<typeof UserLoginSchema>>({
    resolver: zodResolver(UserLoginSchema),
    defaultValues: {
      userId: "",
      userPassword: "",
    },
  })

  function onSubmit(values: z.infer<typeof UserLoginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const existUser = join.find((user) => (user.email === values.userId && user.password === values.userPassword))
    if (!!existUser) {
      router.push('/payment');
    } else {
      alert('아이디, 패스워드가 일치하지 않습니다.');
      return
    }
  }

  return (
    <div className='relative h-screen bg-amber-100 flex flex-col justify-center items-center'>
      <div className="absolute top-40">
        <div className="flex justify-center items-center h-[100px] mb-10 border rounded-md border-black">
          <h1 className="text-5xl font-bold">로그인</h1>
        </div>
        <div className='flex flex-col w-[500px] h-[380px] border border-black rounded-md p-10'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-grow">
              <div className="flex flex-col h-full rounded-md border border-black justify-between p-5">
                <div className="flex flex-col gap-5 mt-3">
                  <FormField
                    control={form.control}
                    name="userId"
                    render={({field}) => (
                      <FormItem className='flex flex-col gap-2'>
                        <FormControl>
                          <Input className="h-[50px] border-black hover:cursor-pointer" placeholder="아이디" autoComplete={"off"} {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="userPassword"
                    render={({field}) => (
                      <FormItem className='flex flex-col gap-2'>
                        <FormControl>
                          <Input className="h-[50px] border-black hover:cursor-pointer" placeholder="비밀번호" type="password"
                                 autoComplete="new-password" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col">
                  <Button className="bg-white text-black border border-black h-[40px] text-md hover:text-white" type="submit">로그인</Button>
                </div>
              </div>
            </form>
          </Form>
          <div className={"flex h-[40px] justify-end items-center rounded-md border border-black mt-1 pr-6"}>
            <Link className={`p-1 text-md rounded-md border border-black hover:text-white hover:bg-black`} href={"/signup"}>회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
