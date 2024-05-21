"use client";
import * as React from "react";
import { GoPlus } from "react-icons/go";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import { Checkbox } from "@mui/joy";
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
import { ShopTemplate } from "./ShopTemplate";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"




export function Shopping() {
  const router = useRouter();
  const { furnitures, loadFurnitures, empty }: any = useFurnitures();

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [pages, setPages] = useState(3);

  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  var currentPosts: any = [];

  var firsthalf: any = []
  var secondhalf: any = []

  if (furnitures) {
    currentPosts = furnitures.slice(indexOfFirstPost, indexOfLastPost);
    console.log(currentPosts)
    firsthalf = currentPosts.slice(0, 3)
    secondhalf = currentPosts.slice(3, 6)
  }

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const mainLoad = async () => {
    loadFurnitures();
  };


  useEffect(() => {

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
        <div className="lg:flex md:flex md:gap-20 lg:gap-[90px]  md:items-start lg:items-start w-full">
          <AccordionGroup
            sx={{ maxWidth: 400, ...quicksand.style }}
            className="bg-[#EDECE9] md:text-[20px] mt-12 lg:w-4/12 md:w-4/12 xl:w-[25%] text-[30px] xl:mt-[80px] lg:scroll-none"
          >
            <Accordion>
              <AccordionSummary >CATEGORY</AccordionSummary>
              <AccordionDetails className='mt-[5px]'>
                <Checkbox
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="FURNITURE"
                  slotProps={{
                    root: ({ checked, focusVisible }) => ({
                      sx: !checked
                        ? {
                          "& svg": { opacity: focusVisible ? 1 : 0 },
                          "&:hover svg": {
                            opacity: 1,
                          },
                        }
                        : undefined,
                    }),
                  }}
                >
                </Checkbox>
                <Checkbox
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="LIGHTING"
                  slotProps={{
                    root: ({ checked, focusVisible }) => ({
                      sx: !checked
                        ? {
                          "& svg": { opacity: focusVisible ? 1 : 0 },
                          "&:hover svg": {
                            opacity: 1,
                          },
                        }
                        : undefined,
                    }),
                  }}
                >
                </Checkbox>
                <Checkbox
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="KIDS"
                  slotProps={{
                    root: ({ checked, focusVisible }) => ({
                      sx: !checked
                        ? {
                          "& svg": { opacity: focusVisible ? 1 : 0 },
                          "&:hover svg": {
                            opacity: 1,
                          },
                        }
                        : undefined,
                    }),
                  }}
                >
                </Checkbox>
                <Checkbox
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="GIFTS"
                  slotProps={{
                    root: ({ checked, focusVisible }) => ({
                      sx: !checked
                        ? {
                          "& svg": { opacity: focusVisible ? 1 : 0 },
                          "&:hover svg": {
                            opacity: 1,
                          },
                        }
                        : undefined,
                    }),
                  }}
                >
                </Checkbox>
              </AccordionDetails>
            </Accordion>
          </AccordionGroup>
          <div className="lg:w-7/12 lg:scroll-smooth ">
            <Dropdown>
              <div className="mt-[30px] flex border-b border-current items-center w-6/12   mx-auto justify-between">
                <MenuButton
                  variant="plain"
                  size="lg"
                  className={`text-[30px] md:text-[20px] `}
                  sx={{
                    ...quicksand.style,
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  SORT BY
                  <GoPlus className="text-[30px]" />
                </MenuButton>
                <Menu variant="plain" size="lg">
                  <MenuItem>BEST SELLING</MenuItem>
                  <MenuItem>NEW ADDITIONS</MenuItem>
                  <MenuItem>PRICE LOW TO HIGH</MenuItem>
                </Menu>
              </div>
            </Dropdown>
            <motion.div animate={{ x: 100, opacity: 1 }} initial={{ opacity: 0 }}
              transition={{
                tease: "linear",
                duration: 2,
                x: { duration: 1 },
                opacity: { duration: 2 }
              }}>
              <div className=" xl:flex w-full gap-16">
                <div className=" xl:w-6/12  xl:mt-[120px] ">
                  {firsthalf.map((item: any, index: number) => (
                    <ShopTemplate key={item._id} item={item} />
                  ))}
                </div>
                <div className=" xl:w-6/12">
                  {secondhalf.map((item: any, index: number) => (
                    <ShopTemplate key={item._id} item={item} />
                  ))}
                </div>
              </div>
            </motion.div>
            <div className=" flex justify-center items-center mt-[120px]">
              <Pagination page={currentPage} onChange={handlePage} count={pages} />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

