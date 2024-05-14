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
import { ShopTemplate } from "./ShopTemplate";

// sx={{
//     ...quicksand.style
// }}

export function Shopping() {
  const router = useRouter();
  const { furnitures, loadFurnitures, empty }: any = useFurnitures();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(5);
  const [pages, setPages] = React.useState(4);

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
                    boxHover,
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
            <div className=" xl:grid grid-cols-2  gap-20">
              {furnitures.map((item: any, index: any) => (
                <Link
                  key={345 - index}
                  onClick={() => empty()}
                  href={`/shop/${item.slug}`}
                >
                  <div className="flex flex-col mb-[40px] mt-[80px] lg:mt-[140px] ">
                    <AspectRatio
                      variant="outlined"
                      ratio="4/4"
                      className="col-start-2"
                      sx={{
                        width: "100%",
                        bgcolor: "background.level2",
                        marginBottom: "35px",
                      }}
                    >
                      <img
                        srcSet={`${item.picture}?w=120&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.src}?w=120&fit=crop&auto=format`}
                        alt={item.title}
                      />
                      <Typography level="h2" component="div">
                        4/3
                      </Typography>
                    </AspectRatio>

                    <h1 className="py-[20px] border-t-2 text-[40px] border-current divide-y">
                      {item.name}
                    </h1>
                    <div className="text-[30px]">{item.price}$</div>
                    <div className="flex items-center gap-4 mt-[20px] lg:justify-between">
                      <Button
                        variant="outlined"
                        color="warning"
                        className="p-4 lg:w-8/12 lg:text-[15px] xl:text-[20px] xl:w-8/12"
                      >
                        VIEW PRODUCT
                      </Button>
                      <IconButton color="warning">
                        <MdFavoriteBorder className="text-[40px] lg:text-[40px]" />
                      </IconButton>
                    </div>
                  </div>
                </Link>
              ))}
              <div className=" flex justify-center items-center mt-[120px]">
                <Pagination
                  page={currentPage}
                  onChange={handlePage}
                  count={pages}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
