"use client";
import { CartItem } from "@/components/cartComponents/item";
import { cinzel, quicksand } from "../theme";

export default function Home() {
  return (
    <div className="w-screen bg-[#EDECE9] text-[#343434] flex flex-col">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${quicksand.className} text-[50px] h-[50px]`}>MY</h1>
          <h2 className={`${cinzel.className} text-[50px] h-[54px]`}>CART</h2>
        </div>
        <div className="w-[90%]">
          <CartItem />
        </div>
      </div>
    </div>
  );
}
