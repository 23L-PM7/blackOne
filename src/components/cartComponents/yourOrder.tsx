"use client";
import { quicksand, cinzel } from "@/app/theme";
import { YourOrderItem } from "./yourOrderItem";

export function YourOrder() {
  return (
    <div className="w-[90%] flex flex-col gap-y-4 mt-[30px]">
      <div className="w-full my-[30px]">
        <h1 className={`${cinzel.className} text-[26px]`}>BILLING DETAILS</h1>
      </div>
      <div className="w-full flex justify-between border-b-[1px] border-[#343434] py-3 text-[#343434]">
        <h1>PRODUCT</h1>
        <h1>SUBTOTAL</h1>
      </div>

      <YourOrderItem />
    </div>
  );
}
