"use client";
import Link from "next/link";
import { useState } from "react";
import Checkbox from "@mui/joy/Checkbox";

export function YourData() {
  const [checked, setChecked] = useState([true, false]);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  return (
    <div className="border-[#343434] border-t-[1px] pt-3 flex flex-col gap-y-3">
      <p>
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our{" "}
        <Link className="border-[#343434] border-b-[1px]" href="#">
          privacy policy
        </Link>
        .
      </p>
      <div>
        <Checkbox
          sx={{
            color: "#A18565",
          }}
          label="I have read and agreed to the website"
          checked={checked[1]}
          onChange={handleCheck}
        />
        <Link href="#">
          <h2 className="text-[#A18565]">
            <u>TERMS AND CONDITIONS</u>
          </h2>
        </Link>
      </div>
    </div>
  );
}
