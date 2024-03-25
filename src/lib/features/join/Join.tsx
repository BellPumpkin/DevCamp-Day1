'use client'

import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {useEffect} from "react";
import {joinUser} from "@/lib/features/join/joinSlice";

export default function Join() {

  const join = useAppSelector((state) => state.join);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(join)
  }, [join]);

  return (
    <>
      <button onClick={() => {
      dispatch(joinUser({
        email: 'example@example.com',
        password: '123456',
        phone: '01012345678',
        role: 'user',
        token: 'abcd1234'
        }
      ))
      }}>이벤트 발생</button>
    </>
  );
}
