import {z} from "zod";

const phoneRegex = new RegExp(/^010([0-9]{4})([0-9]{4})$/);
const passwordRegex = new RegExp(/^(?=.*?[A-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);

export type inputType = {
  username: string
  email: string
  phone: string
  role: string
  password: string
  confirmPassword: string
}

export const formSchema = z.object({
  username: z.string().min(2, {message: '이름은 2글자 이상이어야 합니다.'}),
  email: z.string().email({message: '올바른 이메일을 입력해주세요.'}),
  phone: z.string().regex(phoneRegex, {message: '010으로 시작하는 11자리 숫자를 입력해주세요.'}), // 11자리 숫자
  role: z.string().min(2, { message: "역할을 선택해주세요." }),
  password:
    z.string()
      .min(6, {message: "비밀번호는 최소 6자리 이상이어야 합니다."})
      .regex(passwordRegex, {message: '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'}), // 11자리 숫자
  confirmPassword:
    z.string()
      .min(6, {message: "비밀번호는 최소 6자리 이상이어야 합니다."})
      .regex(passwordRegex, {message: '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'}), // 11자리 숫자
})
