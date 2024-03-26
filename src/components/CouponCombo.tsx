"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {useEffect} from "react";
import {CouponType} from "@/lib/features/join/joinSlice";

type Props = {
  coupon: CouponType
  couponName: string
  setCouponName: React.Dispatch<React.SetStateAction<string>>
  setCouponPrice: React.Dispatch<React.SetStateAction<number>>
}

export function CouponCombo({coupon, couponName, setCouponName}: Props) {

  return (
    <div className="flex w-full justify-between">
      <div className='flex items-center'>
        {couponName && `${couponName} - ${coupon[couponName]}원`}
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">사용 가능한 쿠폰</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuRadioGroup value={couponName} onValueChange={setCouponName}>
              {
                coupon ?
                  Object.keys(coupon).map((val, idx) => (
                    <DropdownMenuRadioItem key={idx} value={val}>{val} : {coupon[val]}</DropdownMenuRadioItem>
                  ))
                  : null
              }
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
