"use client";

import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

import { Searching } from "@/components/seaching/searching";
import { Input } from "@mui/joy";
import { useSearchParams } from "next/navigation";
import { cinzel } from "@/app/theme";

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const itemCount = 1;

  return (
    <div className="container mx-auto py-[50px] lg:py-[100px] xl:w-[75%] xl:px-[50px] px-[20px]">
      <Header />
      <div className="flex justify-between items-center">
        <div className="text-[16px]">
          Search results for
          <div>
            {query}({itemCount})
          </div>
        </div>
        <form action="/search">
          <div className="flex flex-end justify-end items-center my-auto">
            <Input
              placeholder={query}
              variant="plain"
              name="query"
              sx={{
                fontFamily: { cinzel },
                backgroundColor: "transparent",
                padding: "none",
                "&::before": {
                  display: "none",
                },
                fontWeight: "100",
              }}
            />
            <button
              type="submit"
              className="hover:bg-transparent font-[600] text-[15px]"
            >
              search
            </button>
          </div>
        </form>
      </div>
      <Searching />
      <Footer />
    </div>
  );
}
