"use client";
import { cinzel, quicksand } from "../theme";

export default function Home() {
  return (
    <div className="w-screen bg-[#EDECE9] text-[#343434]">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${quicksand.className} text-[50px] h-[50px]`}>MY</h1>
          <h2 className={`${cinzel.className} text-[50px] h-[54px]`}>CART</h2>
        </div>
        <div>
          <div>
            <h1 className={`${quicksand.className} font-semibold`}>PRODUCT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
