"use client";

import { quicksand, cinzel } from "@/app/theme";
import { BillingInput } from "@/components/cartComponents/billingInput";
import { YourOrder } from "@/components/cartComponents/yourOrder";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <div className="w-screen bg-[#EDECE9] text-[#343434] flex flex-col items-center gap-y-4">
        <div className="flex flex-col items-center w-[90%]">
          <div className="flex flex-col justify-center items-center sm:w-[95%] sm:items-start sm:h-[300px]">
            <h1
              className={`${quicksand.className} text-[35px] h-[35px] sm:text-[90px] sm:h-[90px]`}
            >
              ORDER
            </h1>
            <h2
              className={`${cinzel.className} text-[35px] h-[39px] sm:text-[90px] sm:h-[94px]`}
            >
              CHECKOUT
            </h2>
          </div>
        </div>
        <div className="w-[100%] flex">
          <BillingInput />
          <YourOrder />
        </div>
      </div>
    </>
  );
}
