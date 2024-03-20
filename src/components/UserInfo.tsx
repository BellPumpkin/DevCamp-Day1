"use client"

import {Button} from "@/components/ui/button"
import {FormControl, FormField, FormItem, FormLabel,} from "@/components/ui/form"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Input} from "@/components/ui/input"
import WarningText from "@/components/WarningText";
import {UseFormReturn} from "react-hook-form";
import {inputType} from "@/validators/auth";

type Props = {
  setIdCheck: React.Dispatch<React.SetStateAction<boolean>>
  form:  UseFormReturn<inputType>
}

export default function UserInfo({setIdCheck, form}: Props) {

  function onSubmit() {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    form.trigger(["phone", "email", "username", "role"]);
    const phoneState = form.getFieldState("phone");
    const emailState = form.getFieldState("email");
    const usernameState = form.getFieldState("username");
    const roleState = form.getFieldState("role");

    if (!phoneState.isDirty || phoneState.invalid) return;
    if (!emailState.isDirty || emailState.invalid) return;
    if (!usernameState.isDirty || usernameState.invalid) return;
    if (!roleState.isDirty || roleState.invalid) return;

    setIdCheck(true)
  }

  let errors = form.formState.errors;

  return (
    <>
      <FormField
        control={form.control}
        name="username"
        render={({field}) => (
          <FormItem className='flex flex-col gap-2'>
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
          <FormItem className='flex flex-col gap-2'>
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
          <FormItem className='flex flex-col gap-2'>
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
          <FormItem className='flex flex-col gap-[5px]'>
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
                {
                  errors.role && <WarningText>{"역할을 선택해주세요."}</WarningText>
                }
            </Select>
          </FormItem>
        )}
      />
      <Button className='w-20' type="button" onClick={onSubmit}>다음 단계로</Button>
    </>
  )
}
