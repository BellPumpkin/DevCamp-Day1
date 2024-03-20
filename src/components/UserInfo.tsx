"use client"

import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Input} from "@/components/ui/input"
import {useEffect} from "react";
import WarningText from "@/components/WarningText";
import {ResultType} from "@/components/SignUp";

type Props = {
  setIdCheck: React.Dispatch<React.SetStateAction<boolean>>
  setResult: React.Dispatch<React.SetStateAction<ResultType>>
}

const phoneRegex = new RegExp(/^010([0-9]{4})([0-9]{4})$/);

const formSchema = z.object({
  username: z.string().min(2, {message: '이름은 2글자 이상이어야 합니다.'}),
  email: z.string().email({message: '올바른 이메일을 입력해주세요.'}),
  phone: z.string().regex(phoneRegex, {message: '010으로 시작하는 11자리 숫자를 입력해주세요.'}), // 11자리 숫자
  role: z.string().min(2, { message: "역할을 선택해주세요." }),
})

export default function UserInfo({setIdCheck, setResult}: Props) {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      role: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setResult(prevState => (
      {
        ...prevState,
        username: values.username,
        email: values.email,
        phone: values.phone,
        role: values.role,
      }
    ));
    setIdCheck(true)
  }

  let errors = form.formState.errors;

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({field}) => (
              <FormItem className='flex flex-col'>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder="홍길동" {...field} />
                </FormControl>
                {
                  errors.username && <WarningText>{errors.username.message}</WarningText>
                }
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem className='flex flex-col'>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder="hello@sparta-devcamp.com" {...field} />
                </FormControl>
                {
                  errors.email && <WarningText>{errors.email.message}</WarningText>
                }
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({field}) => (
              <FormItem className='flex flex-col'>
                <FormLabel>연락처</FormLabel>
                <FormControl>
                  <Input placeholder="01000000000" {...field} />
                </FormControl>
                {
                  errors.phone && <WarningText>{errors.phone.message}</WarningText>
                }
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({field}) => (
              <FormItem className='flex flex-col'>
                <FormLabel>역할</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="역할을 선택해주세요"/>
                    </SelectTrigger>
                  </FormControl>
                  <div>
                    <SelectContent>
                      <SelectItem value="admin">관리자</SelectItem>
                      <SelectItem value="user">일반사용자</SelectItem>
                    </SelectContent>
                  </div>
                </Select>
                {
                  errors.role && <WarningText>역할을 선택해주세요.</WarningText>
                }
              </FormItem>
            )}
          />
          <Button className='w-20' type="submit">다음 단계로</Button>
        </form>
      </Form>
    </div>
  )
}

// 글
// <FormDescription>
//   This is your public display name.
// </FormDescription>

// 에러 메시지
// <FormMessage/>

// <select {...form.register("role")}>
//   <option value="">Select...</option>
//   <option value="A">Category A</option>
//   <option value="B">Category B</option>
// </select>
