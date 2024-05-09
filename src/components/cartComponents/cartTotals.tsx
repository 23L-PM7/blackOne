"use client";
import { cinzel } from "@/app/theme";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";

export function CartTotals() {
  return (
    <div className="w-[90%] flex flex-col items-center gap-y-3">
      <h1 className={`${cinzel.className} text-[25px] my-10`}>CART TOTALS</h1>
      <div className="w-[90%] flex justify-between">
        <h1 className="text-[20px]">Subtotal : </h1>
        <h1 className="text-[20px]">3190$</h1>
      </div>
      <div className="w-[90%] flex justify-between border-[#343434] border-b-[1px]">
        <h1 className="text-[20px]">Shipping</h1>
        <div className="flex flex-col">
          <FormControl>
            <RadioGroup defaultValue="free" name="radio-buttons-group">
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
      <div className="w-[90%] flex justify-between">
        <h1 className="text-[20px] font-semibold">Total : </h1>
        <h1 className="text-[20px] font-semibold">3190$</h1>
      </div>
      <button className="w-[90%] h-[40px] rounded text-[#F5F5F5] bg-[#A18565] hover:text-[#343434] hover:bg-[#F5F5F5] mb-[50px]">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
}
