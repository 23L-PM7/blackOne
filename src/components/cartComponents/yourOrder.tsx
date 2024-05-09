"use client";
import { quicksand, cinzel } from "@/app/theme";
import { YourOrderItem } from "./yourOrderItem";
import FormControl from "@mui/joy/FormControl";
import Checkbox from "@mui/joy/Checkbox";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { YourData } from "./yourdata";
import Typography from "@mui/joy/Typography";
import { useState } from "react";

export function YourOrder() {
  const [selectedValue, setSelectedValue] = useState("free");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="w-[90%] flex flex-col gap-y-4 mt-[30px]">
      <div className="w-full my-[30px]">
        <h1 className={`${cinzel.className} text-[26px]`}>BILLING DETAILS</h1>
      </div>
      <div className="w-full flex justify-between border-b-[1px] border-[#343434] py-3 text-[#343434]">
        <h1>PRODUCT</h1>
        <h1>SUBTOTAL</h1>
      </div>

      {/* mapping */}
      <YourOrderItem />
      <div className="w-full flex justify-between border-b-[1px] border-[#343434] py-3 text-[#343434]">
        <h1>SUBTOTAL</h1>
        <h1>3190$</h1>
      </div>
      <div className="flex flex-col">
        <FormControl>
          <RadioGroup defaultValue="free" name="radio-buttons-group">
            <Radio
              sx={{ flexDirection: "row-reverse" }}
              value="free"
              label="Free Shipping"
              variant="outlined"
              checked={selectedValue === "free"}
              onChange={handleChange}
            />
            <Radio
              sx={{ flexDirection: "row-reverse" }}
              value="local"
              label="Local Pickup"
              variant="outlined"
              checked={selectedValue === "local"}
              onChange={handleChange}
            />
            <Radio
              sx={{ flexDirection: "row-reverse" }}
              value="flat"
              label="Flatrate"
              variant="outlined"
              checked={selectedValue === "flat"}
              onChange={handleChange}
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="w-full flex justify-between border-b-[1px] border-[#343434] py-3 text-[#343434]">
        <h1>TOTAL</h1>
        <h1>3190$</h1>
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
    </div>
  );
}
