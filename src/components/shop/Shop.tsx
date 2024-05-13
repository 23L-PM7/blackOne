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
import { ButtonGroup, Checkbox } from "@mui/joy";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import { MdFavoriteBorder } from "react-icons/md";
import { data } from "./ShopList";
import { cinzel, quicksand } from "@/app/theme";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Done from "@mui/icons-material/Done";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useFurnitures } from "@/components/utility/utils";
import { Loader } from "../loader";

// sx={{
//     ...quicksand.style
// }}

export function Shopping() {
  const router = useRouter();
  const { furnitures, loadFurnitures }: any = useFurnitures();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(5);
  const [pages, setPages] = React.useState(3);

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
    loadFurnitures();
  }, []);

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
    return <Loader />;
  }

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
            <Accordion
            >
              <AccordionSummary>CATEGORY</AccordionSummary>
              <AccordionDetails>
                <Checkbox
                  className="bg-[#EDECE9]"
                  color="neutral"
                  label="KIDS"
                  size="lg"
                  variant="outlined"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>MATERIAL</AccordionSummary>
              <AccordionDetails>
                <Checkbox
                  color="neutral"
                  label="KIDS"
                  size="lg"
                  variant="outlined"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>COLOR</AccordionSummary>
              <AccordionDetails>
                <Checkbox
                  uncheckedIcon={<Done />}
                  label="BLACK"
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
                  Beige, Blue, Brown , Gold
                </Checkbox>
                <Checkbox
                  uncheckedIcon={<Done />}
                  label="Beige"
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
                />
              </AccordionDetails>
            </Accordion>
          </AccordionGroup>
          <div className="lg:w-7/12 lg:scroll-smooth ">
            <Dropdown>
              <div className="mt-[30px] flex border-b border-current items-center w-6/12   mx-auto justify-between">
                <MenuButton
                  variant="plain"
                  size="lg"
                  className="text-[30px] md:text-[20px] "
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
            <a className=" xl:grid grid-cols-2 gap-20">
              {furnitures.map((item: any, index: any) => (
                <Link href={`/shop/${item.slug}`}>
                  <div
                    key={item._id}
                    className="flex flex-col mb-[40px] mt-[80px] lg:mt-[140px] "
                  >
                    <AspectRatio
                      variant="outlined"
                      ratio="4/3"
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
                <Tabs
                  aria-label="Basic tabs"
                  defaultValue={0}
                  className="lg:w-6/12"
                >
                  <TabList className="text-[60px]">
                    <Tab>1</Tab>
                    <Tab>2</Tab>
                    <Tab>3</Tab>
                    <Tab>4</Tab>
                    <Tab>5</Tab>
                  </TabList>
                  <TabPanel value={0}>
                    <b>First</b> tab panel
                  </TabPanel>
                  <TabPanel value={1}>
                    <b>Second</b> tab panel
                  </TabPanel>
                  <TabPanel value={2}>
                    <b>Third</b> tab panel
                  </TabPanel>
                </Tabs>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}
