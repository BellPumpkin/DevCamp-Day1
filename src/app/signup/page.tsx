"use client"

import UserInfo from "@/components/UserInfo";
import {useEffect} from "react";
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

    const existEmail = join.find((item) => (item.email === values.email));
    if(!!existEmail) {
      alert('이미 사용 중인 Email 입니다.');
      return
    }

    form.trigger(["phone", "email", "username", "role"]);
    const phoneState = form.getFieldState("phone");
    const emailState = form.getFieldState("email");
    const usernameState = form.getFieldState("username");
    const roleState = form.getFieldState("role");

    if (!phoneState.isDirty || phoneState.invalid) return;
    if (!emailState.isDirty || emailState.invalid) return;
    if (!usernameState.isDirty || usernameState.invalid) return;
    if (!roleState.isDirty || roleState.invalid) return;


    if (values.password === values.confirmPassword) {
      alert(JSON.stringify(values, null, 4))
      dispatch(joinUser(values))
      router.push('/');
    }
    else {
      alert("일치 하지 않음");
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <UserInfo form={form}/>
        </form>
      </Form>
    </div>
  )
}


