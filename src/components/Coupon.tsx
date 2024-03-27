import {CouponType} from "@/lib/features/join/joinSlice";
import {CouponCombo} from "@/components/CouponCombo";
import {useEffect, useState} from "react";

type Props = {
  coupon: CouponType
  price: number
  setDiscountPrice: React.Dispatch<React.SetStateAction<number>>
  setCouponPrice: React.Dispatch<React.SetStateAction<number>>
  couponName: string
  setCouponName: React.Dispatch<React.SetStateAction<string>>
  ownPoint: number
  setPointPrice: React.Dispatch<React.SetStateAction<number>>
}

export default function Coupon({coupon, price, setDiscountPrice, setCouponPrice, couponName, setCouponName, ownPoint, setPointPrice}: Props) {

  // 적용된 쿠폰의 이름을 보관하는 state

  // 어떤 쿠폰(포인트)을 사용할 것인가


  // 사용하려는 point 확인
  const [pointCheck, setPointCheck] = useState('');

  const onPointCheck = () => {
    if (!pointCheck.trim()) {
      alert("포인트 값을 입력하세요.");
      return;
    }

    const parsedPoint = parseInt(pointCheck);
    if (isNaN(parsedPoint)) {
      alert("유효한 숫자를 입력하세요.");
      return;
    }

    if (ownPoint < parsedPoint) {
      alert("보유 포인트보다 작은 값을 입력하세요.");
      setPointCheck('');
      return;
    }

    setPointPrice(parsedPoint);
  }

  useEffect(() => {
    if (!pointCheck.trim()) {
      setPointPrice(0);
    }
  }, [pointCheck]);

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
          <div className="flex flex-row bg-amber-200 justify-between">
            <input className="border-black border-2" onChange={(e) => {setPointCheck(e.target.value)}} value={pointCheck} />
            <button className="border-black border-2 bg-violet-300" onClick={onPointCheck}>포인트 적용</button>
          </div>
          <div className="bg-white">
            <h1 className="text-sm">보유 포인트: {ownPoint}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
