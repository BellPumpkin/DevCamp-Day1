"use client"

import UserInfo from "@/components/UserInfo";
import {useEffect, useState} from "react";
import PasswordInfo from "@/components/PasswordInfo";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {formSchema} from "@/validators/auth";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form} from "@/components/ui/form";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {joinUser} from "@/lib/features/join/joinSlice";
import {useRouter} from "next/navigation";

export type ResultType = {
  email: string;
  phone: string;
  username: string;
  role: string;
  password: string;
  confirmPassword: string;
}

export default function SignupPage() {

  const [idCheck, setIdCheck] = useState<boolean>(false);

  const join = useAppSelector((state) => state.join);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      role: "",
      password: "",
      confirmPassword: "",
    },
  })

  useEffect(() => {
    console.log(join);
  }, [join]);


  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.password === values.confirmPassword) {
      alert(JSON.stringify(values, null, 4))
      dispatch(joinUser(values))
      router.push('/');
    }
    else {
      alert("일치하지 않음");
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {
            idCheck ? <PasswordInfo setIdCheck={setIdCheck} form={form}/> :
              <UserInfo setIdCheck={setIdCheck} form={form}/>
          }
        </form>
      </Form>
    </div>
  )
}


