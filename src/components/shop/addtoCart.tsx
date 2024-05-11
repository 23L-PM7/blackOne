"use client";
import { useState } from "react";
import { HeartBrown } from "../vectors/heart";
import { useCart } from "./useCart";

type Many = {
  item: any;
};

export function AddToCart(props: Many) {
  const [amount, setAmount] = useState(1);
  const { addCart } = useCart();
  const { item } = props;

  const addToCart = () => {
    addCart({
      tempId: Date.now().toString(),
      furnitureId: item._id,
      slug: item.slug,
      name: item.name,
      price: item.saleprice,
      amount: amount,
      description: item.description,
      details: item.details,
      image: item.picture,
    });
  };

  return (
    <div className="flex w-full justify-center gap-x-3 md:justify-start">
      <button
        onClick={addToCart}
        className="w-[80%] h-[40px] rounded text-[#F5F5F5] bg-[#A18565] hover:text-[#343434] hover:bg-[#F5F5F5]"
      >
        ADD TO CART
      </button>
      <button>
        <HeartBrown />
      </button>
    </div>
  );
}
