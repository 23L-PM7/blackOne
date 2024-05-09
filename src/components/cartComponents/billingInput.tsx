"use client";
import { quicksand } from "@/app/theme";
import { useState } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export function BillingInput() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <div className="w-[90%] flex flex-col gap-y-4">
      <div className="">
        <h1 className={`text-[#A18565] text-lg ${quicksand.className}`}>
          FIRST NAME<span className="text-[#FF0000]"> *</span>
        </h1>
        <input className="bg-[#EDECE9] required:border-[#FF0000] text-[34px] border-[#343434] focus:outline-none border-b-[1px] w-full h-[35px]" />
      </div>
      <div className="">
        <h1 className={`text-[#A18565] text-lg ${quicksand.className}`}>
          LAST NAME<span className="text-[#FF0000]"> *</span>
        </h1>
        <input className="bg-[#EDECE9] required:border-[#FF0000] text-[34px] border-[#343434] focus:outline-none border-b-[1px] w-full h-[35px]" />
      </div>
      <h1 className={`text-[#A18565] text-lg ${quicksand.className}`}>
        COUNTRY / REGION<span className="text-[#FF0000]"> *</span>
      </h1>
      <Select
        sx={{
          backgroundColor: "transparent",
          border: "transparent",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        defaultValue="Mongolia"
      >
        <Option value="dog"></Option>
      </Select>
    </div>
  );
}
