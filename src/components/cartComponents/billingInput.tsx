"use client";
import { quicksand } from "@/app/theme";
import { useEffect, useState } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { getData } from "country-list";
import Textarea from "@mui/joy/Textarea";

export function BillingInput() {
  // input states
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [county, setCounty] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [country, setCountry] = useState("");

  // setting the json to the select
  const countries = getData();

  const handleCountry = (
    event: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    setCountry(newValue);
  };

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
      <div>
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
            ...quicksand.style,
          }}
          defaultValue="MN"
          onChange={handleCountry}
        >
          {countries.map((item, index) => (
            <Option
              sx={{
                backgroundColor: "#F5F5F5",
              }}
              key={2000 - index}
              value={item.code}
            >
              {item.name}
            </Option>
          ))}
        </Select>
      </div>
      <div className="">
        <h1 className={`text-[#A18565] text-lg ${quicksand.className}`}>
          STREET ADDRESS<span className="text-[#FF0000]"> *</span>
        </h1>
        <input className="bg-[#EDECE9] required:border-[#FF0000] text-[34px] border-[#343434] focus:outline-none border-b-[1px] w-full h-[35px]" />
      </div>
      <div className="">
        <h1 className={`text-[#A18565] text-lg ${quicksand.className}`}>
          TOWN /CITY<span className="text-[#FF0000]"> *</span>
        </h1>
        <input className="bg-[#EDECE9] required:border-[#FF0000] text-[34px] border-[#343434] focus:outline-none border-b-[1px] w-full h-[35px]" />
      </div>
      <div className="">
        <h1 className={`text-[#A18565] text-lg ${quicksand.className}`}>
          POSTCODE / ZIP<span className="text-[#FF0000]"> *</span>
        </h1>
        <input className="bg-[#EDECE9] required:border-[#FF0000] text-[34px] border-[#343434] focus:outline-none border-b-[1px] w-full h-[35px]" />
      </div>
      <div className="">
        <h1 className={`text-[#A18565] text-lg ${quicksand.className}`}>
          PHONE<span className="text-[#FF0000]"> *</span>
        </h1>
        <input className="bg-[#EDECE9] required:border-[#FF0000] text-[34px] border-[#343434] focus:outline-none border-b-[1px] w-full h-[35px]" />
      </div>
      <div className="">
        <h1 className={`text-[#A18565] text-lg ${quicksand.className}`}>
          EMAIL ADDRESS<span className="text-[#FF0000]"> *</span>
        </h1>
        <input className="bg-[#EDECE9] required:border-[#FF0000] text-[34px] border-[#343434] focus:outline-none border-b-[1px] w-full h-[35px]" />
      </div>
      <div className="">
        <h1 className={`text-[#A18565] text-lg ${quicksand.className}`}>
          ORDER NOTES (OPTIONAL)
        </h1>
        <Textarea
          placeholder="Notes about your order, e.g. special notes for delivery."
          sx={{
            background: "transparent",
            fontSize: "15px",
            borderColor: "#343434",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            boxShadow: "none",
            borderRadius: "0px",
          }}
          minRows={2}
        />
      </div>
    </div>
  );
}
