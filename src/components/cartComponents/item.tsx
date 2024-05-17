"use client";
import { cinzel, quicksand } from "@/app/theme";
import { Button, IconButton } from "@mui/joy";
import { CartDeleteIcon } from "../vectors/cartDelete";
import { useCart } from "../shop/useCart";
import { toast } from "sonner";

type MainProps = {
  item: any;
};

export function CartItem(props: MainProps) {
  const { removeCart, cart }: any = useCart();
  const { item } = props;

  const confirm = () => {
    toast(`About to remove cart Item ${item.name}`, {
      position: "bottom-right",
      action: {
        label: "Confirm",
        onClick: () => removeCart(item.tempId),
      },
    });
  };

  return (
    <div className="w-full">
      {/* product name with bottom border */}
      <div className="sm:hidden w-full h-[50px] border-b-[1px] border-[#343434] mt-[40px]">
        <div className="w-full flex justify-between">
          <h1 className={`${quicksand.className} font-medium`}>
            Product<span className="font-bold"> : </span>
          </h1>
          <h1 className={`${cinzel.className} font-medium text-xl`}>
            {item.name}
          </h1>
        </div>
      </div>
      {/* price */}
      <div className="sm:hidden w-full h-[50px] border-b-[1px] border-[#343434] mt-[40px]">
        <div className="w-full flex justify-between">
          <h1 className={`${quicksand.className} font-medium`}>
            Price<span className="font-bold"> : </span>
          </h1>
          <h1 className={`${cinzel.className} font-medium text-xl`}>
            {item.price}$
          </h1>
        </div>
      </div>
      {/* quantity */}
      <div className="sm:hidden w-full h-[50px] border-b-[1px] border-[#343434] mt-[40px]">
        <div className="w-full flex justify-between">
          <h1 className={`${quicksand.className} font-medium`}>
            Quantity<span className="font-bold"> : </span>
          </h1>
          <h1 className={`${cinzel.className} font-medium text-xl`}>
            {item.amount}
          </h1>
        </div>
      </div>
      {/* NON MOBILE SECTION */}
      <div className="hidden grow sm:flex flex-col">
        {/* items */}
        <div className="w-full flex py-5 border-[#343434] border-b-[1px]">
          <div className="w-[45%] flex items-center gap-x-3">
            <img
              src={item.picture}
              className="w-[140px] h-[140px] object-cover"
            />
            <h1 className={`${cinzel.className} text-[22px]`}>{item.name}</h1>
          </div>
          <div className="w-[17%] flex items-center">
            <h1 className={`${cinzel.className} text-[22px]`}>{item.price}$</h1>
          </div>
          <div className="w-[17%] flex items-center">
            <h1 className={`${cinzel.className} text-[22px]`}>
              x{item.amount}
            </h1>
          </div>
          <div className="w-[17%] flex items-center">
            <h1 className={`${cinzel.className} text-[22px]`}>{item.price}$</h1>
          </div>
          <button
            onClick={confirm}
            className="hidden sm:block w-10 h-10 border-[1px] border-[#343434] rounded-full p-1 mt-4 hover:bg-[#343434] font-slim text-xl hover:text-[#F5F5F5]"
          >
            X
          </button>
        </div>
      </div>

      <button
        onClick={confirm}
        className="sm:hidden w-10 h-10 border-[1px] border-[#343434] rounded-full p-1 mt-4 hover:bg-[#343434] font-slim text-xl hover:text-[#F5F5F5]"
      >
        X
      </button>
    </div>
  );
}
