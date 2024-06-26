"use client";
import { cinzel } from "@/app/theme";
import FormControl from "@mui/joy/FormControl";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { useCart } from "../shop/useCart";
import { useEffect, useState } from "react";
import Link from "next/link";

export function CartTotals() {
  const { cart } = useCart();
  const [shipping, setShipping] = useState(cart.totalAmount);
  const [current, setCurrent] = useState("");

  // shipping calculator
  const calculate = (e: any) => {
    setCurrent(e.target.value);
    if (e.target.value === "free") {
      setShipping(cart.totalAmount);
    } else if (e.target.value === "local") {
      setShipping(cart.totalAmount);
    } else if (e.target.value === "flat") {
      const newPrice = cart.totalAmount + 10;
      setShipping(newPrice);
    }
  };

  // quick feature
  useEffect(() => {
    setShipping(cart.totalAmount);
    calculate({
      target: {
        value: current,
      },
    });
  }, [cart.totalAmount]);

  return (
    <div className="w-[90%] flex flex-col items-center gap-y-3 lg:items-end">
      <h1 className={`${cinzel.className} text-[25px] my-10`}>CART TOTALS</h1>
      <div className="w-[90%] lg:w-[30%] flex justify-between">
        <h1 className="text-[20px]">Subtotal : </h1>
        <h1 className="text-[20px]">{cart.totalAmount}$</h1>
      </div>
      <div className="w-[90%] lg:w-[30%] flex justify-between border-[#343434] border-b-[1px]">
        <h1 className="text-[20px]">Shipping</h1>
        <div className="flex flex-col">
          <FormControl>
            <RadioGroup
              onChange={(e) => calculate(e)}
              defaultValue="free"
              name="radio-buttons-group"
            >
              <Radio
                sx={{ flexDirection: "row-reverse" }}
                value="free"
                label="Free Shipping"
                variant="outlined"
              />
              <Radio
                sx={{ flexDirection: "row-reverse" }}
                value="local"
                label="Local Pickup"
                variant="outlined"
              />
              <Radio
                sx={{ flexDirection: "row-reverse" }}
                value="flat"
                label="Flatrate"
                variant="outlined"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="w-[90%] lg:w-[30%] flex justify-between">
        <h1 className="text-[20px] font-semibold">Total : </h1>
        <h1 className="text-[20px] font-semibold">{shipping}$</h1>
      </div>
      <Link
        href="/cart/checkout"
        className="flex justify-center items-center w-[90%] lg:w-[30%] h-[40px] rounded text-[#F5F5F5] bg-[#A18565] hover:text-[#343434] hover:bg-[#F5F5F5] mb-[50px]"
      >
        PROCEED TO CHECKOUT
      </Link>
    </div>
  );
}
