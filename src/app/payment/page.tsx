'use client'
import {useAppSelector} from "@/lib/hooks";
import Coupon from "@/components/Coupon";
import {CouponType} from "@/lib/features/join/joinSlice";
import {useEffect, useState} from "react";


export default function PaymentPage() {

  const curUser = useAppSelector((state) => state.join);
  const { email, coupon, point }: {email: string, coupon: CouponType, point: number} = curUser[0]; // test

  // 할인 적용된 가격
  const [discountPrice, setDiscountPrice] = useState(0);

  // 적용할 쿠폰 가격
  const [couponPrice, setCouponPrice] = useState(0);

  // 적용할 포인트 가격
  const [pointPrice, setPointPrice] = useState(0);

  // 사용한 쿠폰을 지우기 위해 쿠폰 이름을 저장하는 변수 -> 결제 버튼을 누르면 coupon 객체에서 삭제
  const [couponName, setCouponName] = useState("");

  // 결제 화면 띄우기
  const [isPayment, setIsPayment] = useState(false);

  // 임시 데이터
  const product = {
    productName: '누르는 소리가 엄청큰 키보드',
    productPrice: 18000,
    productDeliveryPrice: 2500
  }

  const {productName, productPrice, productDeliveryPrice} = product

  // 할인 금액, 배송비 적용된 총 가격
  const [totalPrice, setTotalPrice] = useState(productPrice);

  useEffect(() => {
    console.log(pointPrice);
    setTotalPrice(productPrice - (coupon[couponName] || 0) - (pointPrice || 0) + productDeliveryPrice)
  }, [couponName, pointPrice]);


  return (
    <div className="flex flex-col w-full h-screen bg-neutral-300">
      <div className="overflow-y-auto flex-grow p-10 pt-32">
        <div className="flex flex-col items-center gap-5">
          <h1 className="flex bg-red-500 w-4/5 h-[50px] items-center justify-center text-3xl font-bold">결제하기</h1>
          <div className="w-4/5 bg-pink-500">
            <div className="flex flex-col p-5">
              <div>
                <h1 className="font-bold text-xl">주문 상품 정보</h1>
              </div>
              <div className="flex flex-row">
                <div className="w-[100px] h-[100px] bg-neutral-500">
                  img
                </div>
                <div className='ml-10'>
                  <h1>제품명: {productName}</h1>
                  <h1>가격: {productPrice}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-4/5 p-5 bg-violet-50 justify-between">
            <div className="flex flex-col w-4/5 bg-amber-100">
              <h1 className="font-bold text-xl">주문자 정보</h1>
              <h1>박종호</h1>
              <h1>전화번호</h1>
              <h1>이메일</h1>
            </div>
            <div className="bg-pink-500 w-1/6 flex justify-center items-start">
              <button className="rounded-md border-black border-2 px-2 text-md">수정</button>
            </div>
          </div>
          <div className="flex flex-row w-4/5 p-5 bg-pink-500">
            <div className="flex flex-col w-full">
              <div className="flex flex-row bg-yellow-300 justify-between content-between gap-2">
                <div className="flex flex-col w-4/5 bg-slate-500">
                  <h1 className="font-bold text-xl">배송정보</h1>
                  <h1>박종호</h1>
                  <h1>전화번호</h1>
                  <h1>서울특별시 서울특별시 서울특별시 서울특별시 서울특별시 서울특별시 서울특별시 서울특별시 서울특별시</h1>
                </div>
                <div className="bg-fuchsia-600 w-1/6 flex justify-center items-start">
                  <button className="rounded-md border-black border-2 px-2 text-md">변경</button>
                </div>
              </div>
              <div className="flex flex-col bg-blue-300">
                <h1>배송 메모</h1>
                <h1>배송 메모를 선택해주세요 input</h1>
              </div>
            </div>
          </div>
          <Coupon
            coupon={coupon}
            price={productPrice}
            setDiscountPrice={setDiscountPrice}
            setCouponPrice={setCouponPrice}
            couponName={couponName}
            setCouponName={setCouponName}
            ownPoint={point}
            setPointPrice={setPointPrice}
          />
          <div className="w-4/5 bg-yellow-100 p-5">
            <h1 className="font-bold text-xl">최종 결제 금액</h1>
            <div className="flex flex-row justify-between">
              <h1>상품 가격</h1>
              <h1>{productPrice}원</h1>
            </div>
            <div className="flex flex-row justify-between">
              <h1>쿠폰 할인</h1>
              <h1>-{couponName ? coupon[couponName] : 0}원</h1>
            </div>
            <div className="flex flex-row justify-between">
              <h1>포인트 사용</h1>
              <h1>-{pointPrice}원</h1>
            </div>
            <div className="flex flex-row justify-between">
              <h1>배송비</h1>
              <h1>+{productDeliveryPrice}원</h1>
            </div>
            <div className="border-t-2 border-neutral-500"/>
            <div className="flex flex-row justify-between">
              <h1>총 결제 금액</h1>
              <h1>{totalPrice}원</h1>
            </div>
            <div className="flex bg-slate-200">
              <h1>000 포인트 적립예정</h1>
            </div>
          </div>
          <div className="w-4/5 bg-violet-300 p-5">
            <h1 className="font-bold text-xl">결제 방법</h1>
            <h1>select 1</h1>
            <h1>select 2</h1>
            <h1>select 3</h1>
            <h1>select 4</h1>
            <h1>select 5</h1>
            <h1>00은행</h1>
            <h1>입금자명 input</h1>
          </div>
          <div className="w-4/5 bg-white p-5">
            <h1 className="font-bold text-xl">전체 동의</h1>
            <button onClick={() => {
              setIsPayment(true)
            }}>결제하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
