"use client";
import { cinzel, quicksand } from "@/app/theme";
import { Button, IconButton } from "@mui/joy";
import { CartDeleteIcon } from "../vectors/cartDelete";

export function CartItem() {
  return (
    <div className="w-full">
      {/* product name with bottom border */}
      <div className="w-full h-[50px] border-b-[1px] border-[#343434] mt-[40px]">
        <div className="w-full flex justify-between">
          <h1 className={`${quicksand.className} font-medium`}>
            Product<span className="font-bold"> : </span>
          </h1>
          <h1 className={`${cinzel.className} font-medium text-xl`}>
            PRODUCT NAME
          </h1>
        </div>
      </div>
      {/* price */}
      <div className="w-full h-[50px] border-b-[1px] border-[#343434] mt-[40px]">
        <div className="w-full flex justify-between">
          <h1 className={`${quicksand.className} font-medium`}>
            Price<span className="font-bold"> : </span>
          </h1>
          <h1 className={`${cinzel.className} font-medium text-xl`}>1400$</h1>
        </div>
      </div>
      {/* quantity */}
      <div className="w-full h-[50px] border-b-[1px] border-[#343434] mt-[40px]">
        <div className="w-full flex justify-between">
          <h1 className={`${quicksand.className} font-medium`}>
            Quantity<span className="font-bold"> : </span>
          </h1>
          <h1 className={`${cinzel.className} font-medium text-xl`}>x3</h1>
        </div>
      </div>
      <IconButton variant="outlined">
        <CartDeleteIcon />
      </IconButton>
    </div>
  );
}
