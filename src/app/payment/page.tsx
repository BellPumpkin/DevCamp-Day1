export default function PaymentPage() {
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
                  <h1>상품 이름</h1>
                  <h1>상품 가격</h1>
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
            <div className="flex flex-col">
              <div className="flex flex-row bg-yellow-300 justify-between gap-2">
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
          <div className="w-4/5 bg-violet-50 p-5">
            <div className="flex flex-col bg-fuchsia-600">
              <h1 className="font-bold text-xl">쿠폰 포인트</h1>
              <h1 className="bg-white">쿠폰</h1>
              <div className="flex flex-row bg-amber-500">
                <h1>쿠폰 input</h1>
                <h1>쿠폰 적용</h1>
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
          <div className="w-4/5 bg-yellow-100 p-5">
            <h1 className="font-bold text-xl">최종 결제 금액</h1>
            <div className="flex flex-row justify-between">
              <h1>상품 가격</h1>
              <h1>18,000원</h1>
            </div>
            <div className="flex flex-row justify-between">
              <h1>쿠폰 할인</h1>
              <h1>-1,000원</h1>
            </div>
            <div className="flex flex-row justify-between">
              <h1>포인트 사용</h1>
              <h1>-0원</h1>
            </div>
            <div className="flex flex-row justify-between">
              <h1>배송비</h1>
              <h1>+2,500원</h1>
            </div>
            <div className="border-t-2 border-neutral-500"/>
            <div className="flex flex-row justify-between">
              <h1>총 결제 금액</h1>
              <h1>19,500원</h1>
            </div>
            <div className="flex bg-slate-200">
              <h1>700 포인트 적립예정</h1>
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
            <button>결제하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
