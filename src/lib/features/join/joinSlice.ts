import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export type CouponType = {
  [key: string]: number;
};

type JoinState = {
  email: string,
  password: string,
  phone: string,
  role: string,
  token: string,
  coupon: CouponType,
  point: number,
  customerKey: string;
}

// 초기 값을 배열로 정의
const initialState: JoinState[] = [
  {
    email: 'whdgh',
    password: '1234',
    phone: '01012341234',
    role: 'admin',
    token: '19941001',
    coupon: {
      'abcd': 5000,
      'efgh': 2000
    },
    point: 12000,
    customerKey: nanoid()
  },
];

export const joinSlice = createSlice({
  name: "join",
  initialState,
  reducers: {
    joinUser: (state, action) => {
      state.push(action.payload);
    },
  }
});

export const { joinUser } = joinSlice.actions;
export default joinSlice.reducer;
