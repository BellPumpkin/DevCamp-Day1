import {CouponType} from "@/lib/features/join/joinSlice";
import {CouponCombo} from "@/components/CouponCombo";
import {useState} from "react";

type Props = {
  coupon: CouponType
  price: number
  setDiscountPrice: React.Dispatch<React.SetStateAction<number>>
  setCouponPrice: React.Dispatch<React.SetStateAction<number>>
  couponName: string
  setCouponName: React.Dispatch<React.SetStateAction<string>>
}

export default function Coupon({coupon, price, setDiscountPrice, setCouponPrice, couponName, setCouponName}: Props) {

  // 적용된 쿠폰의 이름을 보관하는 state

  // 어떤 쿠폰(포인트)을 사용할 것인가


  return (
    <>
      <div className="w-4/5 bg-violet-50 p-5">
        <div className="flex flex-col bg-fuchsia-600">
          <h1 className="font-bold text-xl">쿠폰 포인트</h1>
          <h1 className="bg-white">쿠폰</h1>
          <div className="flex bg-amber-500">
            <CouponCombo coupon={coupon} couponName={couponName} setCouponName={setCouponName} setCouponPrice={setCouponPrice}/>
          </div>
          <h1 className="bg-white">쿠폰 번호</h1>
          <div className="flex flex-row bg-amber-100">
            <h1>쿠폰 번호 input</h1>
            <h1>쿠폰 적용</h1>
          </div>
          <h1 className="bg-white">포인트</h1>
          <div className="flex flex-row bg-amber-900">
            <h1>쿠폰 번호 input</h1>
            <h1>쿠폰 적용</h1>
          </div>
          <div className="bg-white">
            <h1 className="text-sm">보유 포인트: 2,300</h1>
            <h1 className="text-sm">5,000 포인트 이상 보유 및 10,000원 이상 구매시 사용 가능</h1>
          </div>
        </div>
      </div>
    </>
  );
}
