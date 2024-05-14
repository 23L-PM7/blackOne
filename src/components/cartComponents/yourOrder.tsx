"use client";
import { quicksand, cinzel } from "@/app/theme";
import { YourOrderItem } from "./yourOrderItem";
import FormControl from "@mui/joy/FormControl";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { YourData } from "./yourdata";
import { useEffect, useState } from "react";
import { useCart } from "../shop/useCart";

export function YourOrder() {
  const { cart }: any = useCart();

  const [shipping, setShipping] = useState(cart.totalAmount);
  const [current, setCurrent] = useState("");

  // shipping calculator
  const handleChange = (e: any) => {
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
    handleChange({
      target: {
        value: current,
      },
    });
  }, [cart.totalAmount]);

  return (
    <div className="w-[90%] sm:w-[50%] sm:items-start sm:p-10 flex flex-col gap-y-4 mt-[30px]">
      <div className="w-full my-[30px]">
        <h1 className={`${cinzel.className} text-[26px]`}>YOUR ORDER</h1>
      </div>
      <div className="w-full flex justify-between border-b-[1px] border-[#343434] py-3 text-[#343434]">
        <h1>PRODUCT</h1>
        <h1>SUBTOTAL</h1>
      </div>

      {/* mapping */}
      {cart.cartItems.map((item: any, index: number) => (
        <YourOrderItem key={432 - index} item={item} />
      ))}

      <div className="w-full flex justify-between border-b-[1px] border-[#343434] py-3 text-[#343434]">
        <h1>SUBTOTAL</h1>
        <h1>{cart.totalAmount}$</h1>
      </div>
      <div className="flex flex-col">
        <FormControl>
          <RadioGroup
            onChange={handleChange}
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
      <div className="w-full flex justify-between border-b-[1px] border-[#343434] py-3 text-[#343434]">
        <h1>TOTAL</h1>
        <h1>{shipping}$</h1>
      </div>
      <div className="w-full my-[30px]">
        <h1 className={`${cinzel.className} text-[26px]`}>PAYMENT METHODS</h1>
      </div>
      <AccordionGroup
        sx={{
          maxWidth: 400,
          ...quicksand.style,
          backgroundColor: "transparent",
          "&:focus": {
            backgroundColor: "transparent",
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:active": {
            backgroundColor: "transparent",
          },
        }}
      >
        <RadioGroup>
          <Accordion>
            <AccordionSummary>
              <Radio
                sx={{ color: "#A18565", ...quicksand.style }}
                value="cash"
                label="CASH ON DELIVERY"
                variant="outlined"
              />
            </AccordionSummary>
            <AccordionDetails>
              <div className="w-full h-full p-4">
                <h1>Pay with cash on delivery</h1>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Radio
                sx={{ color: "#A18565", ...quicksand.style }}
                value="card"
                label="CREDIT OR DEBIT CARD"
                variant="outlined"
              />
            </AccordionSummary>
            <AccordionDetails>
              <div className="w-full h-full p-4">
                <h1>Pay with card. We Support Mastercard and Visa / PAYPAL</h1>
              </div>
            </AccordionDetails>
          </Accordion>
        </RadioGroup>
      </AccordionGroup>
      <YourData />
      <button className="hidden w-[60%] sm:block h-[50px] rounded text-[#F5F5F5] bg-[#A18565] hover:text-[#343434] hover:bg-[#F5F5F5] mb-[50px]">
        PLACE ORDER
      </button>
    </div>
  );
}
