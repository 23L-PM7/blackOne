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
};

export function Searching(props: MainProps) {
  const { query } = props;
  const router = useRouter();
  const { furnitures, loadFurnitures, empty }: any = useFurnitures();

  var currentPosts = [];

  // const mainLoad = async () => {
  //   loadFurnitures();
  // };

  if (furnitures.length === 0) {
    loadFurnitures();
    return <Loader />;
  }

  const filtered = furnitures.filter((item: any) => {
    return query.toLowerCase() === ""
      ? null
      : item.name.toLowerCase().includes(query);
  });

  let searchLength = filtered.length;
  console.log("hhaha", { searchLength });

  if (query.length === 0) {
    return (
      <div className="p-[50px] text-center mx-auto">
        Empty search query. Please enter one or more keywords and try again.
      </div>
    );
  }

  if (searchLength === 0) {
    return (
      <div className="p-[50px] text-center mx-auto">
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
