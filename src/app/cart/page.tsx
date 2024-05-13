"use client";
import { CartItem } from "@/components/cartComponents/item";
import { cinzel, quicksand } from "../theme";
import { CartTotals } from "@/components/cartComponents/cartTotals";
import { useCart } from "@/components/shop/useCart";
import { useFurnitures } from "@/components/utility/utils";
import { Loader } from "@/components/loader";
import { useEffect } from "react";

export default function Home() {
  const { furnitures, loadFurnitures }: any = useFurnitures();
  const { clearCart, subtractCartItem, addCartItem, cart } = useCart();

  if (furnitures.length === 0) {
    loadFurnitures();
    return <Loader />;
  }

  return (
    <div className="w-screen bg-[#EDECE9] text-[#343434] flex flex-col">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${quicksand.className} text-[50px] h-[50px]`}>MY</h1>
          <h2 className={`${cinzel.className} text-[50px] h-[54px]`}>CART</h2>
        </div>
        <div className="w-[90%]">
          {cart.cartItems.map((item) => (
            <CartItem key={item.slug} item={item} />
          ))}
        </div>
        <CartTotals />
      </div>
    </div>
  );
}
