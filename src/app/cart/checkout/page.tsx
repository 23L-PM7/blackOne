"use client";

import { quicksand, cinzel } from "@/app/theme";
import { BillingInput } from "@/components/cartComponents/billingInput";
import { YourOrder } from "@/components/cartComponents/yourOrder";

export default function Home() {
  return (
    <div className="w-screen bg-[#EDECE9] text-[#343434] flex flex-col items-center gap-y-4">
      <div className="flex flex-col items-center w-[90%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${quicksand.className} text-[35px] h-[35px]`}>
            ORDER
          </h1>
          <h2 className={`${cinzel.className} text-[35px] h-[39px]`}>
            CHECKOUT
          </h2>
        </div>
        <div className="w-full my-[40px]">
          <h1 className={`${cinzel.className} text-[26px]`}>BILLING DETAILS</h1>
        </div>
      </div>
      <BillingInput />
      <YourOrder />
      <button className="w-[90%] h-[40px] rounded text-[#F5F5F5] bg-[#A18565] hover:text-[#343434] hover:bg-[#F5F5F5] mb-[50px]">
        PLACE ORDER
      </button>
    </div>
  );
}
