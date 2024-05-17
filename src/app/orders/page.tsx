"use client";
import { cinzel } from "../theme";
import { useCart } from "@/components/shop/useCart";

export default function Home() {
  const { cart, removeCart } = useCart();

  return (
    <div className="flex flex-col gap-3">
      <div className="mt-[100px]">
        <h1 className="text-[50px] h-[50px] md:text-[100px] md:h-[100px]">
          My Orders/
        </h1>
        <h2 className="text-[50px] h-[50px] md:text-[100px] md:h-[100px]">
          All Orders
        </h2>
      </div>
      <div className="border-[#343434] border-y-[1px] p-5 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <img
            className="w-[50px] h-[50px] object-cover border-[#343434] border-[1px] rounded"
            src="/images/chair.jpeg"
          />
          <div className="">
            <h1>Vercel Steamed Chair x4</h1>
            <h1>Steam buns for takeout x2</h1>
          </div>
          <h1>Total: $5000</h1>
          <h1 className="bg-[#343434]/50 px-2 text-[#f5f5f5] rounded">
            Out For Delivery
          </h1>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <img
            className="w-[50px] h-[50px] object-cover border-[#343434] border-[1px] rounded"
            src="/images/chair.jpeg"
          />
          <div className="">
            <h1>Vercel Steamed Chair x4</h1>
            <h1>Steam buns for takeout x2</h1>
          </div>
          <h1>Total: $5000</h1>
          <h1 className="bg-[#FF0000]/50 px-2 text-[#f5f5f5] rounded">
            Not Paid
          </h1>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <img
            className="w-[50px] h-[50px] object-cover border-[#343434] border-[1px] rounded"
            src="/images/chair.jpeg"
          />
          <div className="">
            <h1>Vercel Steamed Chair x4</h1>
            <h1>Steam buns for takeout x2</h1>
          </div>
          <h1>Total: $5000</h1>
          <h1 className="bg-[#008000]/50 px-2 text-[#f5f5f5] rounded">
            Awaiting Pickup
          </h1>
        </div>
      </div>
    </div>
  );
}
