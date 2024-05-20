import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import ListDivider from "@mui/joy/ListDivider";
import ListItemContent from "@mui/joy/ListItemContent";
import JoyDrawer from "@mui/joy/Drawer";
import Box from "@mui/joy/Box";
import React, { useEffect, useState } from "react";
import { useCart } from "../shop/useCart";
import { Remove } from "../items/HeaderIcons";
import { ListItem, ListItemButton } from "@mui/joy";
import { CiCircleRemove } from "react-icons/ci";
import { data } from "../shop/ShopList";
import { cinzel, quicksand } from "@/app/theme";
import Link from "next/link";
import { toast } from "sonner";


type BagDrawerProps = {
    open: boolean;
    onToggleDrawerBag: () => void;
};



export function DrawerMobile(props: BagDrawerProps) {
    const { open, onToggleDrawerBag } = props;
    const { cart, removeCart } = useCart();


    const confirm = (id: string, name: string) => {
        toast.warning(`About to remove cart Item ${name}`, {
            position: "bottom-right",
            action: {
                label: "Confirm",
                onClick: () => removeCart(id),
            },
        });
    };

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
                                    <div className="gap-2 flex flex-wrap items-start justify-between w-full ">
                                        <AspectRatio sx={{ width: "80%", justifyContent: 'flex-start' }}>
                                            <img src={item.picture} alt={item.name} />
                                        </AspectRatio>
                                        <button
                                            onClick={() => confirm(item.tempId, item.name)}
                                            className=" w-10 h-10 border-[1px] border-[#343434] rounded-full p-1  xl:ml-8 hover:bg-[#343434] font-slim text-xl hover:text-[#F5F5F5]"
                                        >
                                            X
                                        </button>
                                        <ListItemContent

                                            sx={{ flex: "flex" }}
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
                                    </div>
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
