"use client";

import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/joy/Box";
import JoyDrawer from "@mui/joy/Drawer";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { Bag, Favorite, Remove, Search, UserPro } from "../items/HeaderIcons";
import React, { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";

import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import ListDivider from "@mui/joy/ListDivider";
import ListItemContent from "@mui/joy/ListItemContent";
import Link from "next/link";
import { sectionlists } from "./HeaderList";
import { DropDowns } from "./dropdown";
import { data } from "../shop/ShopList";
import { cinzel, quicksand } from "@/app/theme";
import { RiCloseLargeFill } from "react-icons/ri";

import { useCart } from "../shop/useCart";
import { Drawer } from "./MenuDrawer";
import { TopDrawer } from "./Search";

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





type BagDrawerProps = {
    open: boolean;
    onToggleDrawerBag: () => void;
};

export function DrawerMobile(props: BagDrawerProps) {
    const { open, onToggleDrawerBag } = props;
    const { cart } = useCart();

    return (
        <Box sx={{ display: "flex" }}>
            <JoyDrawer
                open={open}
                onClose={onToggleDrawerBag}
                anchor="right"
                slotProps={{
                    content: {
                        sx: {
                            backgroundColor: "white",
                            padding: 2,
                            overflow: "scroll",
                        },
                    },
                }}
            >
                <Box sx={{}} onClick={onToggleDrawerBag} onKeyDown={onToggleDrawerBag}>
                    <div className="flex-col flex gap-y-8 mt-[50px] md:mt-[75px] lg:mt-[80px]">
                        <div className="flex justify-end">
                            <Remove />
                        </div>
                        {cart.cartItems.map((item, index) => (
                            <React.Fragment key={item.tempId}>
                                <ListItem>
                                    <ListItemButton className="gap-2 flex flex-wrap  ">
                                        <AspectRatio sx={{ width: "80%" }}>
                                            <img src={item.picture} alt={item.name} />
                                        </AspectRatio>
                                        <CiCircleRemove className="w-[20%] " />
                                        <ListItemContent
                                            sx={{ flex: "flex", justifyContent: "flex-start" }}
                                        >
                                            <Typography
                                                sx={{ ...cinzel.style }}
                                                fontWeight="lg"
                                                fontSize={22}
                                            >
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                textColor="black"
                                                fontSize={16}
                                                fontWeight="md"
                                                level="body-sm"
                                            >
                                                {item.price} $
                                            </Typography>
                                        </ListItemContent>
                                    </ListItemButton>
                                </ListItem>
                                {index !== data.length - 1 && <ListDivider />}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <p>Subtotal:</p>
                        <h1 className="text-[22px] font-semibold"> {cart.totalAmount} $</h1>
                    </div>
                    <div className="flex gap-2 w-full mt-[30px] text-white">
                        <Link
                            href="/cart"
                            className="bg-[#A18565] p-2 rounded-md w-6/12 hover:bg-black"
                        >
                            VIEW CART
                        </Link>
                        <Link
                            href="/cart/checkout"
                            className="bg-[#A18565] p-2 rounded-md w-6/12 hover:bg-black"
                        >
                            CHECKOUT
                        </Link>
                    </div>
                </Box>
            </JoyDrawer>
        </Box>
    );
}
