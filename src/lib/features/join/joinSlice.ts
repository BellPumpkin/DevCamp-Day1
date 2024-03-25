import { createSlice } from "@reduxjs/toolkit";

type JoinState = {
  email: string,
  password: string,
  phone: string,
  role: string,
  token: string,
}

// 초기값을 배열로 정의
const initialState: JoinState[] = [
  {
    email: 'whdgh',
    password: '1234',
    phone: '01012341234',
    role: 'admin',
    token: '19941001'
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
