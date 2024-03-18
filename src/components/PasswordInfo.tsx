"use client"

import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import WarningText from "@/components/WarningText";

const passwordRegex = new RegExp(/^(?=.*?[A-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);

type Props = {
  setIdCheck: () => React.Dispatch<React.SetStateAction<boolean>>
  setResult: () => React.Dispatch<React.SetStateAction<object>>
}

const formSchema = z.object({
  password: z.string().min(6, {message: "비밀번호는 최소 6자리 이상이어야 합니다."}).regex(passwordRegex, {message: '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'}), // 11자리 숫자
  confirmPassword: z.string().min(6, {message: "비밀번호는 최소 6자리 이상이어야 합니다."}).regex(passwordRegex, {message: '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'}), // 11자리 숫자
})
export default function PasswordInfo({setIdCheck, setResult}: Props) {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  const onBackHandler = () => {
    setIdCheck(false);
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.password === values.confirmPassword) {
      setResult(prevState => (
        {
          ...prevState,
          password: values.password,
          confirmPassword: values.confirmPassword
        }
      ));
    }
    else {
      alert("일치하지 않음");
    }
  }

  let errors = form.formState.errors;

  return (
    <>
      <div className=' w-full h-[385px]'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 h-full">
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem className='w-full h-full flex flex-col justify-between'>
                  <div className='flex flex-col gap-4'>
                    <FormLabel>비밀번호</FormLabel>
                    <FormControl>
                      <Input type="password" {...form.register("password")} />
                    </FormControl>
                    {
                      errors.password?.message && <WarningText>{errors.password.message}</WarningText>
                    }
                    <FormLabel>비밀번호 확인</FormLabel>
                    <FormControl>
                      <Input type="password" {...form.register("confirmPassword")} />
                    </FormControl>
                    {
                      errors.confirmPassword?.message && <WarningText>{errors.confirmPassword.message}</WarningText>
                    }
                  </div>
                  <div className='flex gap-6'>
                    <Button type="submit">계정 동록하기</Button>
                    <button className='text-sm h-10 px-4 py-2 rounded-md hover:bg-neutral-200' onClick={onBackHandler} type="submit">이전 단계로</button>
                  </div>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </>
  )
}
