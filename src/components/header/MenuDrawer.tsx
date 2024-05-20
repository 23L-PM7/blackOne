"use client";
import { Divider } from "@mui/joy";
import JoyDrawer from "@mui/joy/Drawer";
import Box from "@mui/joy/Box";
import { cinzel, quicksand } from "@/app/theme";
import { Bag, Favorite, Remove, Search, UserPro } from "../items/HeaderIcons";
import { DropDowns } from "./dropdown";
import { sectionlists } from "./HeaderList";
import Link from "next/link";
import { useState } from "react";
import { TopDrawer } from "./Search";

type DrawerProps = {
  open: boolean;
  onToggleDrawer: () => void;
};

export function Drawer(props: DrawerProps) {
  const { open, onToggleDrawer } = props;
  const [isOpenDrawerTop, setIsOpenDrawerTop] = useState(false);



  const toggleDrawerBagTop = () => setIsOpenDrawerTop(!isOpenDrawerTop);

  return (
    <Box sx={{ display: "flex", ...cinzel.style, zIndex: 10 }}>
      <JoyDrawer
        open={open}
        variant="plain"
        // onClose={onToggleDrawer}
        className="border-none"
        slotProps={{
          content: {
            sx: {
              width: "100%",
              backgroundColor: "rgba(237, 236, 233, 1)",
            },
          },
        }}
      >
        <Box
          sx={{
            padding: 4,
            marginTop: 10,
            marginLeft: 2,
            borderBottom: "none",
          }}
          onClick={onToggleDrawer}
          onKeyDown={onToggleDrawer}
        >
          <div className="flex items-center gap-4 md:hidden ">
            <button
              className="p-2 flex items-center text-black z-50"
              onClick={toggleDrawerBagTop}
            >
              <Search />
            </button>
            <UserPro />
            <Favorite />
          </div>
          <Divider />
          <div className={`flex-col flex  text-[18px] mt-[20px] gap-y-4 ${cinzel.className} font-semibold`}>
            {/* className='flex justify-start' */}
            <DropDowns />
            {sectionlists.map((sectionlist) => (
              <Link key={sectionlist.id} href={sectionlist.link}>
                {sectionlist.title}
              </Link>
            ))}
          </div>
        </Box>
      </JoyDrawer >
      <TopDrawer
        open={isOpenDrawerTop}
        onToggleDrawerTop={toggleDrawerBagTop}
      />
    </Box >
  );
}
