'use client'

import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {useEffect} from "react";
import {joinUser} from "@/lib/features/join/joinSlice";

export default function Join() {

  const join = useAppSelector((state) => state.join);
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => {
      dispatch(joinUser())
      }} />
    </>
  );
}
