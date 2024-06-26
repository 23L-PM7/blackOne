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
import { LuMinus } from "react-icons/lu";




export function Shopping() {
  const router = useRouter();
  const { furnitures, loadFurnitures, empty }: any = useFurnitures();
  const [categories, setCategories]: any = useState([]);
  const [isSwitch, setIsSwitch] = useState(false);

  // 2 diff
  const [second, setSecond]: any = useState([])
  const [first, setFirst]: any = useState([])



  const [print, setPrint] = useState(false);
  const [armchair, setArmchair] = useState(false);
  const [vase, setVase] = useState(false);
  const [mirror, setMirror] = useState(false);
  const [stool, setStool] = useState(false);
  const [table, setTable] = useState(false);
  const [sofa, setSofa] = useState(false);
  const [bench, setBench] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [cabinet, setCabinet] = useState(false);
  const [decorations, setDecorations] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [pages, setPages] = useState(3);



  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  var currentPosts: any = [];

  var firsthalf: any = []
  var secondhalf: any = []

  const toggleMode = () => {
    setIsSwitch(!isSwitch);
  };





  if (furnitures) {
    currentPosts = furnitures.slice(indexOfFirstPost, indexOfLastPost);
    firsthalf = currentPosts.slice(0, 3)
    secondhalf = currentPosts.slice(3, 6)
  }

  useEffect(() => {
    setFirst(firsthalf)
    setSecond(secondhalf)
    setCategories(currentPosts)
  }, [currentPage])

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);

  };



  const handlePrint = (subcat: boolean) => {
    const brandnew = furnitures.filter((item: any) => item.category === "Print")
    const brandlength = brandnew.length
    let half = 0
    if (brandlength % 2 === 1) {
      half = Math.round(brandlength / 2)
    } else {
      half = brandlength / 2
    }
    if (brandnew.length === 0) {
      return <div>Emty</div>
    }
    const newfirst = brandnew.slice(0, half)
    const newsecond = brandnew.slice(half, (half + half))
    setCategories(brandnew)
    setFirst(newfirst)
    setSecond(newsecond)
    setPrint(subcat)
  }

  const handleArmchair = (subcat: boolean) => {
    const brandnew = furnitures.filter((item: any) => item.category === "Armchair")
    const brandlength = brandnew.length
    let half = 0
    if (brandlength % 2 === 1) {
      half = Math.round(brandlength / 2)
    } else {
      half = brandlength / 2
    }
    const newfirst = brandnew.slice(0, half)
    const newsecond = brandnew.slice(half, (half + half))
    setCategories(brandnew)
    setFirst(newfirst)
    setSecond(newsecond)
    setArmchair(subcat)
  }


  const handleVase = (subcat: boolean) => {
    const brandnew = furnitures.filter((item: any) => item.category == 'Vase');
    const brandlength = brandnew.length
    let half = 0
    if (brandlength % 2 === 1) {
      half = Math.round(brandlength / 2)
    } else {
      half = brandlength / 2
    }
    const newfirst = brandnew.slice(0, half)
    const newsecond = brandnew.slice(half, (half + half))
    setCategories(brandnew)
    setFirst(newfirst)
    setSecond(newsecond)
    setVase(subcat)
  }

  const handleMirror = (subcat: boolean) => {
    const brandnew = furnitures.filter((item: any) => item.category == 'Mirror');
    const brandlength = brandnew.length
    let half = 0
    if (brandlength % 2 === 1) {
      half = Math.round(brandlength / 2)
    } else {
      half = brandlength / 2
    }
    const newfirst = brandnew.slice(0, half)
    const newsecond = brandnew.slice(half, (half + half))
    setCategories(brandnew)
    setFirst(newfirst)
    setSecond(newsecond)
    setMirror(subcat)
  }

  const handleStool = (subcat: boolean) => {
    const brandnew = furnitures.filter((item: any) => item.category == 'Stool');
    const brandlength = brandnew.length
    let half = 0
    if (brandlength % 2 === 1) {
      half = Math.round(brandlength / 2)
    } else {
      half = brandlength / 2
    }
    const newfirst = brandnew.slice(0, half)
    const newsecond = brandnew.slice(half, (half + half))
    setCategories(brandnew)
    setFirst(newfirst)
    setSecond(newsecond)
    setStool(subcat)
  }

  const handleTable = (subcat: boolean) => {
    const brandnew = furnitures.filter((item: any) => item.category == 'Table');
    const brandlength = brandnew.length
    let half = 0
    if (brandlength % 2 === 1) {
      half = Math.round(brandlength / 2)
    } else {
      half = brandlength / 2
    }
    const newfirst = brandnew.slice(0, half)
    const newsecond = brandnew.slice(half, (half + half))
    setCategories(brandnew)
    setFirst(newfirst)
    setSecond(newsecond)
    setTable(subcat)
  }

  const handleCabinet = (subcat: boolean) => {
    const brandnew = furnitures.filter((item: any) => item.category == 'Cabinat');
    const brandlength = brandnew.length
    let half = 0
    if (brandlength % 2 === 1) {
      half = Math.round(brandlength / 2)
    } else {
      half = brandlength / 2
    }
    const newfirst = brandnew.slice(0, half)
    const newsecond = brandnew.slice(half, (half + half))
    setCategories(brandnew)
    setFirst(newfirst)
    setSecond(newsecond)
    setCabinet(subcat)
  }

  const handleSofa = (subcat: boolean) => {
    const brandnew = furnitures.filter((item: any) => item.category == 'Sofa');
    const brandlength = brandnew.length
    let half = 0
    if (brandlength % 2 === 1) {
      half = Math.round(brandlength / 2)
    } else {
      half = brandlength / 2
    }
    const newfirst = brandnew.slice(0, half)
    const newsecond = brandnew.slice(half, (half + half))
    setCategories(brandnew)
    setFirst(newfirst)
    setSecond(newsecond)
    setSofa(subcat)
  }

  const handleBench = (subcat: boolean) => {
    const brandnew = furnitures.filter((item: any) => item.category == 'Bench');
    const brandlength = brandnew.length
    let half = 0
    if (brandlength % 2 === 1) {
      half = Math.round(brandlength / 2)
    } else {
      half = brandlength / 2
    }
    const newfirst = brandnew.slice(0, half)
    const newsecond = brandnew.slice(half, (half + half))
    setCategories(brandnew)
    setFirst(newfirst)
    setSecond(newsecond)
    setBench(subcat)
  }


  const handleFurniture = (subcat: boolean) => {
    const brandnew = furnitures.filter((item: any) => item.category == 'furniture');
    const brandlength = brandnew.length
    let half = 0
    if (brandlength % 2 === 1) {
      half = Math.round(brandlength / 2)
    } else {
      half = brandlength / 2
    }
    const newfirst = brandnew.slice(0, half)
    const newsecond = brandnew.slice(half, (half + half))
    setCategories(brandnew)
    setFirst(newfirst)
    setSecond(newsecond)
    setFurniture(subcat)
  }

  const handledecorations = (subcat: boolean) => {
    const brandnew = furnitures.filter((item: any) => item.category == 'decorations');
    const brandlength = brandnew.length
    let half = 0
    if (brandlength % 2 === 1) {
      half = Math.round(brandlength / 2)
    } else {
      half = brandlength / 2
    }
    const newfirst = brandnew.slice(0, half)
    const newsecond = brandnew.slice(half, (half + half))
    setCategories(brandnew)
    setFirst(newfirst)
    setSecond(newsecond)
    setDecorations(subcat)
  }


  useEffect(() => {

    if (furnitures) {
      if (furnitures.length % perPage == 0) {
        const temporary = Math.round(furnitures.length / perPage);
        setPages(temporary);
        setCategories(currentPosts)
        setFirst(firsthalf)
        setSecond(secondhalf)
      } else {
        const temporary = Math.ceil(furnitures.length / perPage);
        setPages(temporary);
        setCategories(currentPosts)
        setFirst(firsthalf)
        setSecond(secondhalf)
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
          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}
            transition={{
              opacity: { duration: 3 }
            }}>
            OUR <br></br>PRODUCTS
          </motion.div>
        </div>
        <div className="lg:flex md:flex md:gap-20 lg:gap-[90px]  md:items-start lg:items-start w-full">
          <AccordionGroup
            sx={{ maxWidth: 400, ...quicksand.style }}
            className="bg-[#EDECE9] md:text-[20px] mt-12 lg:w-4/12 md:w-3/12 xl:w-[25%] text-[30px] xl:mt-[80px] lg:scroll-none"
          >
            <Accordion>
              <AccordionSummary >CATEGORY</AccordionSummary>
              <AccordionDetails className='mt-[5px]'>
                <Checkbox
                  checked={print}
                  onChange={(e) => handlePrint(e.target.checked)}
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="Print"
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
                  checked={armchair}
                  onChange={(event) => handleArmchair(event.target.checked)}
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="Armchair"
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
                  checked={vase}
                  onChange={(e) => handleVase(e.target.checked)}
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="Vase"
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
                  checked={mirror}
                  onChange={(e) => handleMirror(e.target.checked)}
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="Mirror"
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
                  checked={stool}
                  onChange={(e) => handleStool(e.target.checked)}
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="Stool"
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
                  checked={cabinet}
                  onChange={(e) => handleCabinet(e.target.checked)}
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="Cabinet"
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
                  checked={sofa}
                  onChange={(e) => handleSofa(e.target.checked)}
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="Sofa"
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
                  checked={bench}
                  onChange={(e) => handleBench(e.target.checked)}
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="Bench"
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
                  checked={furniture}
                  onChange={(e) => handleFurniture(e.target.checked)}
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="furniture"
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
                  checked={table}
                  onChange={(e) => handleTable(e.target.checked)}
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="Table"
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
                  checked={decorations}
                  onChange={(e) => handledecorations(e.target.checked)}
                  className="mb-[10px]"
                  uncheckedIcon={<Done />}
                  label="decorations"
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
          <div className="lg:w-8/12 lg:scroll-smooth xl:scroll-smooth ">
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
                  <div className="text-[30px]" onClick={toggleMode}>{isSwitch ? <LuMinus /> : <GoPlus />}</div>
                </MenuButton>
                <Menu variant="plain" size="lg">
                  <MenuItem>BEST SELLING</MenuItem>
                  <MenuItem>NEW ADDITIONS</MenuItem>
                  <MenuItem>PRICE LOW TO HIGH</MenuItem>
                </Menu>
              </div>
            </Dropdown>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}
              transition={{
                opacity: { duration: 2 }
              }} className="xl:hidden  xl:w-6/12">
              {categories.map((item: any, index: number) => (
                <ShopTemplate key={item._id} item={item} />
              ))}
            </motion.div>
            <motion.div className="hidden xl:flex  w-full gap-16" animate={{ x: 100, opacity: 1 }} initial={{ opacity: 0 }}
              transition={{
                tease: "linear",
                duration: 2,
                x: { duration: 1 },
                opacity: { duration: 2 }
              }}>
              <div className=" xl:w-6/12  xl:mt-[120px]">
                {first.map((item: any, index: number) => (
                  <ShopTemplate key={item._id} item={item} />
                ))}
              </div>
              <div className=" xl:w-6/12">
                {second.map((item: any, index: number) => (
                  <ShopTemplate key={item._id} item={item} />
                ))}
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

