"use client";

import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Searching } from "@/components/seaching/searching";
import { Input } from "@mui/joy";
import { useSearchParams } from "next/navigation";
import { cinzel } from "@/app/theme";
import { useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const query: any = searchParams.get("query");
  const itemCount = 0;

  return (
    <div className="container mx-auto py-[100px] xl:w-[75%] xl:px-[50px] px-[20px]">
      <Header />
      <div className="flex justify-between items-center ">
        <div className="text-[12px] xl:text-[16px]">
          Search results for
          <div className="font-[500] text-[14px] xl:text-[24px]">
            {query} ({itemCount})
          </div>
        </div>
        <form action="/search">
          <div className="flex justify-end items-center my-auto border-solid border-[0.5px] border-[#A18565] rounded-xl">
            <div className="w-[100px] sm:w-[125%] md:w-[150%]">
              <Input
                placeholder={`${query}`}
                variant="plain"
                name="query"
                sx={{
                  width: "100%",
                  maxWidth: "500px",
                  fontFamily: { cinzel },
                  backgroundColor: "transparent",
                  padding: "none",
                  "&::before": {
                    display: "none",
                  },
                  fontWeight: "100",
                }}
              />
            </div>
            <button
              type="submit"
              className="hover:scale-150 transition duration-300 ease-in-out bg-transparent font-[600] text-[15px] pr-[10px]"
            >
              search
            </button>
          </div>
        </form>
      </div>
      <Searching query={query} />
      <Footer />
    </div>
  );
}
