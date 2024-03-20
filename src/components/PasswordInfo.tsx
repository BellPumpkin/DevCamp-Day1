"use client"

import {Button} from "@/components/ui/button"
import {FormControl, FormField, FormItem, FormLabel,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import WarningText from "@/components/WarningText";
import {UseFormReturn} from "react-hook-form";
import {inputType} from "@/validators/auth";

type Props = {
  setIdCheck: React.Dispatch<React.SetStateAction<boolean>>
  form:  UseFormReturn<inputType>
}

export default function PasswordInfo({setIdCheck, form}: Props) {

  const onBackHandler = () => {
    setIdCheck(false);
  }

  let errors = form.formState.errors;

  return (
    <>
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
        <button className='text-sm h-10 px-4 py-2 rounded-md hover:bg-neutral-200' onClick={onBackHandler}
                type="button">이전 단계로
        </button>
      </div>
    </>
  )
}
