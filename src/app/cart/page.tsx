"use client";
import { CartItem } from "@/components/cartComponents/item";
import { cinzel, quicksand } from "../theme";
import { CartTotals } from "@/components/cartComponents/cartTotals";
import { useCart } from "@/components/shop/useCart";
import { useFurnitures } from "@/components/utility/utils";
import { Loader } from "@/components/loader";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const { furnitures, loadFurnitures }: any = useFurnitures();
  const { clearCart, subtractCartItem, addCartItem, cart } = useCart();

  if (furnitures.length === 0) {
    loadFurnitures();
    return <Loader />;
  }

  return (
    <div className="w-screen h-screen overflow-scroll bg-[#EDECE9] text-[#343434] flex flex-col">
      <Toaster position="top-center" />
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center lg:items-start lg:w-[90%] lg:h-[400px]">
          <h1
            className={`${quicksand.className} text-[50px] h-[50px] lg:text-[90px] lg:h-[90px]`}
          >
            MY
          </h1>
          <h2
            className={`${cinzel.className} text-[50px] h-[54px] lg:text-[90px] lg:h-[94px]`}
          >
            CART
          </h2>
        </div>
        <div className="w-[90%]">
          <div className="mt-10 w-full hidden sm:flex border-[#343434] border-b-[1px]">
            <h1 className={`${cinzel.className} text-[20px] w-[45%]`}>
              PRODUCT
            </h1>
            <h1 className={`${cinzel.className} text-[20px] w-[17%]`}>PRICE</h1>
            <h1 className={`${cinzel.className} text-[20px] w-[17%]`}>
              QUANTITY
            </h1>
            <h1 className={`${cinzel.className} text-[20px] w-[17%]`}>
              SUBTOTAL
            </h1>
          </div>
          {cart.cartItems.map((item, index) => (
            <CartItem key={555 - index} item={item} />
          ))}
        </div>
        <CartTotals />
      </div>
    </div>
  );
}
