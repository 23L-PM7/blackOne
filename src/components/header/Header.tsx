"use client";

import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Bag, Favorite, Remove, Search, UserPro } from "../items/HeaderIcons";
import React, { useEffect, useState } from "react";


import Link from "next/link";
import { sectionlists } from "./HeaderList";
import { DropDowns } from "./dropdown";
import { cinzel, quicksand } from "@/app/theme";
import { RiCloseLargeFill } from "react-icons/ri";

import { useCart } from "../shop/useCart";
import { Drawer } from "./MenuDrawer";
import { TopDrawer } from "./Search";
import { DrawerMobile } from "./BagDrawer";

export function Header() {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [bagOpenDrawer, setBagOpenDrawer] = useState(false);
    const [isOpenDrawerTop, setIsOpenDrawerTop] = useState(false);
    const [openmenu, setOpenMenu] = useState(false);
    const { cart } = useCart();

    const [header, setHeader] = useState(false);

    // const scrollHeader = () => {
    //     if (window.scrollBy >= 20) {
    //         setHeader(true)
    //     } else {
    //         setHeader(true)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', scrollHeader)
    //     return () => {
    //         window.addEventListener('scroll', scrollHeader)
    //     }
    // }, [])


    const handleClick = () => {
        setOpenMenu(!openmenu);
    };

    const combined = () => {
        toggleDrawer();
        handleClick();
    };

    const toggleDrawer = () => setIsOpenDrawer(!isOpenDrawer);
    const toggleDrawerBag = () => setBagOpenDrawer(!bagOpenDrawer);
    const toggleDrawerBagTop = () => setIsOpenDrawerTop(!isOpenDrawerTop);
    return (
        <div className={'fixed z-50 top-0 left-0 right-0 '}>
            <Stack sx={{ boxShadow: "none", zIndex: 6000, ...cinzel.style }} >
                <AppBar sx={{
                    boxShadow: "none",
                }} position="static">
                    <div className="p-2 md:px-[30px] md:py-[15px] flex  bg-[#EDECE9] items-center justify-between ">
                        <a href="/">
                            <img
                                src="/images/logo.png"
                                className="w-[150px] h-auto lg:w-[300px] text-6xl"
                            />
                        </a>
                        <div
                            className={`hidden md:hidden lg:hidden xl:hidden 2xl:flex font-narmol text-[18px] font-normal items-center justify-around w-[600px] cursor-pointer text-black `}
                        >
                            <div className="transition">
                                <DropDowns />
                            </div>
                            {sectionlists.map((sectionlist) => (
                                <Link key={sectionlist.id} href={sectionlist.link}>
                                    <div className={`hover:underline, hover:${quicksand.className}`}
                                    >
                                        {sectionlist.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="items-center flex gap-4">
                            <div className="items-center gap-6 hidden md:flex text-[40px]">
                                <button onClick={toggleDrawerBagTop}>
                                    <Search />
                                </button>
                                <UserPro />
                                <Favorite />
                            </div>

                            <button
                                className="p-2 flex items-center text-black z-50"
                                onClick={toggleDrawerBag}
                            >
                                {" "}
                                <Bag />({cart.cartItems.length})
                            </button>
                            <div className="2xl:hidden ">
                                <IconButton
                                    edge="start"
                                    sx={{
                                        color: "black",
                                    }}
                                    aria-label="menu"
                                    // sx={{ mr: 2, }}
                                    onClick={combined}
                                >
                                    {openmenu ? (
                                        <RiCloseLargeFill className="text-[30px] md:text-[40px]" />
                                    ) : (
                                        <MenuIcon
                                            sx={{ fontSize: "30px" }}
                                            className="md:text-[40px]"
                                        />
                                    )}
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </AppBar>
                <Drawer open={isOpenDrawer} onToggleDrawer={toggleDrawer} />
                <DrawerMobile
                    open={bagOpenDrawer}
                    onToggleDrawerBag={toggleDrawerBag}
                />
                <TopDrawer
                    open={isOpenDrawerTop}
                    onToggleDrawerTop={toggleDrawerBagTop}
                />
            </Stack>
        </div >
    );
}





