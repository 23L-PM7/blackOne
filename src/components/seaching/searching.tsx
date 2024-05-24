"use client";
import * as React from "react";
import { GoPlus } from "react-icons/go";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import Link from "next/link";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import { Checkbox } from "@mui/joy";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import { MdFavoriteBorder } from "react-icons/md";
import { cinzel, quicksand } from "@/app/theme";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Done from "@mui/icons-material/Done";
import { useRouter } from "next/navigation";
import { useFurnitures } from "@/components/utility/utils";
import { Loader } from "../loader";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import { SearchTemplate } from "./searchTemplate";

type MainProps = {
  query: string;
  setCount: (count: number) => void;
};

export function Searching(props: MainProps) {
  const { query, setCount } = props;
  const router = useRouter();
  const { furnitures, loadFurnitures, empty }: any = useFurnitures();

  var currentPosts = [];

  // const mainLoad = async () => {
  //   loadFurnitures();
  // };

  if (furnitures.length === 0) {
    loadFurnitures();
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const filtered = furnitures.filter((item: any) => {
    return query.toLowerCase() === ""
      ? null
      : item.name.toLowerCase().includes(query);
  });

  setCount(filtered.length);

  if (query.length === 0) {
    return (
      <div
        className={`scale-100 sm:scale-125 lg:scale-150 2xl:scale-175 p-[50px] text-center mx-auto bg-transparent text-[#A18565] font-[100] ${cinzel.className}`}
      >
        Please enter search value and try again.
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div
        className={`scale-100 sm:scale-125 lg:scale-150 2xl:scale-175 p-[50px] text-center mx-auto bg-transparent text-[#A18565] font-[100] ${cinzel.className}`}
      >
        OOPS – NO RESULTS FOR "{query}".
      </div>
    );
  }

  const boxHover = {
    boxShadow: 2,
    "&:hover": {
      background: "none",
    },
  };

  return (
    <div className={`bg-[#EDECE9] ${quicksand.className}`}>
      <div>
        <div className=" xl:grid grid-cols-2 gap-20 xl:gap-x-[150px] xl:gap-y-0 md:mx-auto">
          {filtered.map((item: any, index: number) => (
            <SearchTemplate key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
