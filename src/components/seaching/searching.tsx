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
import { ShopTemplate } from "../shop/ShopTemplate";

export function Searching() {
  const router = useRouter();
  const { furnitures, loadFurnitures, empty }: any = useFurnitures();

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [pages, setPages] = useState(3);

  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  var currentPosts = [];

  if (furnitures) {
    currentPosts = furnitures.slice(indexOfFirstPost, indexOfLastPost);
  }

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const mainLoad = async () => {
    loadFurnitures();
  };

  React.useEffect(() => {
    if (furnitures) {
      if (furnitures.length % perPage == 0) {
        const temporary = Math.round(furnitures.length / perPage);
        setPages(temporary);
      } else {
        const temporary = Math.ceil(furnitures.length / perPage);
        setPages(temporary);
      }
    }
  }, [furnitures]);

  if (furnitures.length === 0) {
    loadFurnitures();
    return <Loader />;
  }

  const boxHover = {
    boxShadow: 2,
    "&:hover": {
      background: "none",
    },
  };

  return (
    <div className={`bg-[#EDECE9] ${quicksand.className}`}>
      <div className="container mx-auto py-[50px] lg:py-[100px] px-[20px]">
        <div className="text-black flex justify-center items-center text-[50px] lg:justify-start  md:justify-start md:mb-10 ">
          OUR <br></br>PRODUCTS
        </div>
        <div className=" xl:grid grid-cols-2 xl:w-[50%] gap-20 md:mx-auto">
          {currentPosts.map((item: any, index: number) => (
            <ShopTemplate key={item._id} item={item} />
          ))}
        </div>
        <div className=" flex justify-center items-center mt-[120px]">
          <Pagination page={currentPage} onChange={handlePage} count={pages} />
        </div>
      </div>
    </div>
  );
}
