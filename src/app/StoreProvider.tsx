'use client'
import { useRef } from 'react'
import { makeStore, AppStore } from '@/lib/store'
import {Provider} from "react-redux";
import {joinSlice} from "@/lib/features/join/joinSlice";

export default function StoreProvider({
                                        children,
                                      }: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
