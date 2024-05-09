"use client";

import { quicksand, cinzel } from "@/app/theme";
import { BillingInput } from "@/components/cartComponents/billingInput";

export default function Home() {
  return (
    <div className="w-screen bg-[#EDECE9] text-[#343434] flex flex-col items-center">
      <div className="flex flex-col items-center w-[90%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${quicksand.className} text-[35px] h-[35px]`}>
            ORDER
          </h1>
          <h2 className={`${cinzel.className} text-[35px] h-[39px]`}>
            CHECKOUT
          </h2>
        </div>
        <div className="w-full my-[50px]">
          <h1 className={`${cinzel.className} text-[30px]`}>BILLING DETAILS</h1>
        </div>
      </div>
      <BillingInput />
    </div>
  );
}
