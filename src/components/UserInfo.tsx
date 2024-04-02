"use client"

import {Button} from "@/components/ui/button"
import {FormControl, FormField, FormItem, FormLabel,} from "@/components/ui/form"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Input} from "@/components/ui/input"
import WarningText from "@/components/WarningText";
import {UseFormReturn} from "react-hook-form";
import {inputType} from "@/validators/auth";

type Props = {
  form:  UseFormReturn<inputType>
}

export default function UserInfo({form}: Props) {

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
              <Input placeholder="홍길동" autoComplete={"username"} {...field} />
            </FormControl>
            {
              errors.username?.message && <WarningText>{errors.username.message}</WarningText>
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
              errors.email?.message && <WarningText>{errors.email.message}</WarningText>
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
              errors.phone?.message && <WarningText>{errors.phone.message}</WarningText>
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
      <FormField
        control={form.control}
        name="password"
        render={({field}) => (
          <FormItem className='flex flex-col gap-2'>
            <FormLabel>비밀번호</FormLabel>
            <FormControl>
              <Input type="password" autoComplete="new-password" {...field}/>
            </FormControl>
            {
              errors.password?.message && <WarningText>{errors.password.message}</WarningText>
            }
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="confirmPassword"
        render={({field}) => (
          <FormItem className='flex flex-col gap-2'>
            <FormLabel>비밀번호 확인</FormLabel>
            <FormControl>
              <Input type="password" autoComplete="new-password" {...field} />
            </FormControl>
            {
              errors.confirmPassword?.message && <WarningText>{errors.confirmPassword.message}</WarningText>
            }
          </FormItem>
        )}
      />
      <div className='flex gap-6'>
        <Button type="submit">계정 동록하기</Button>
      </div>
    </>
  )
}
