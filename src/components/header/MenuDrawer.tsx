"use client";
import { Divider } from "@mui/joy";
import JoyDrawer from "@mui/joy/Drawer";
import Box from "@mui/joy/Box";
import { cinzel, quicksand } from "@/app/theme";
import { Bag, Favorite, Remove, Search, UserPro } from "../items/HeaderIcons";
import { DropDowns } from "./dropdown";
import { sectionlists } from "./HeaderList";
import Link from "next/link";

type DrawerProps = {
  open: boolean;
  onToggleDrawer: () => void;
};

export function Drawer(props: DrawerProps) {
  const { open, onToggleDrawer } = props;

  return (
    <Box sx={{ display: "flex", ...cinzel.style }}>
      <JoyDrawer
        open={open}
        variant="plain"
        onClose={onToggleDrawer}
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
            <UserPro />
            <Favorite />
          </div>
          <Divider />
          <div className="flex-col flex font-narmol text-xl text-[25px] mt-[20px] gap-y-4  ">
            {/* className='flex justify-start' */}
            <DropDowns />
            {sectionlists.map((sectionlist) => (
              <Link key={sectionlist.id} href={sectionlist.link}>
                {sectionlist.title}
              </Link>
            ))}
          </div>
        </Box>
      </JoyDrawer>
    </Box>
  );
}
