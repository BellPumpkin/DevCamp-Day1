'use client'

import {useAppSelector} from "@/lib/hooks";
import {CouponType} from "@/lib/features/join/joinSlice";
import {CouponCombo} from "@/components/CouponCombo";

export default function SupertestPage() {

  const curUser = useAppSelector((state) => state.join);
  const { email, coupon }: {email: string, coupon: CouponType} = curUser[0]; // test

  return (
    <>
      <CouponCombo coupon={coupon} />
    </>
  );
}
