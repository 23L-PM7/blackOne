"use client";
import { cinzel, quicksand } from "../theme";

export default function Home() {
  return (
    <div className="w-screen bg-[#EDECE9] text-[#343434] flex flex-col">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${quicksand.className} text-[50px] h-[50px]`}>MY</h1>
          <h2 className={`${cinzel.className} text-[50px] h-[54px]`}>CART</h2>
        </div>
        <div className="w-[90%] h-[50px] border-b-[1px] border-[#343434] mt-[40px]">
          <div className="w-full flex justify-between">
            <h1 className={`${quicksand.className} font-medium`}>
              PRODUCT<span className="font-bold"> : </span>
            </h1>
            <h1 className={`${cinzel.className} font-medium text-xl`}>
              PRODUCT NAME
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
