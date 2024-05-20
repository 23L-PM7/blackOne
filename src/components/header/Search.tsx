import {
  Button,
  DialogContent,
  DialogTitle,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  colors,
} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import { cinzel, quicksand } from "@/app/theme";
import Link from "next/link";
import SearchInput from "./searchInput";
import Sinput from "./searchInput";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type TopDrawerProps = {
  open: boolean;
  onToggleDrawerTop: () => void;
};

export function TopDrawer(props: TopDrawerProps) {
  const { open, onToggleDrawerTop } = props;

  return (
    <Modal open={open} onClose={onToggleDrawerTop}>
      <ModalDialog
        sx={{
          color: "#EDECE9",
        }}
        layout="fullscreen"
        size="lg"
        variant="soft"
      >
        <ModalClose onClick={onToggleDrawerTop} />
        <DialogContent>
          <div
            onClick={onToggleDrawerTop}
            className="absolute top-[75px] right-[16px] text-[#A18565] hover:text-[#000000] hover:bg-transparent font-[600] text-[15px] md:top-[100px] md:right-[38px] md:scale-125"
          >
            <ArrowBackIosIcon />
          </div>
          <div className="flex justify-center items-center my-auto scale-100 sm:scale-125 md:scale-150 lg:scale-175 xl:scale-200 2xl:scale-225">
            <Sinput />
          </div>
        </DialogContent>
      </ModalDialog>
    </Modal>

    // <Box sx={{ display: "flex" }}>
    //     <JoyDrawer
    //         open={open}
    //         onClose={onToggleDrawerTop}
    //         slotProps={{
    //             content: {
    //                 sx: {
    //                     width: "100%",
    //                     backgroundColor: "rgba(237, 236, 233, 1)",
    //                 },
    //             },
    //         }}
    //     >
    //         <Box
    //             sx={{ padding: 4, marginTop: 10, marginLeft: 2 }}
    //             onClick={onToggleDrawerTop}
    //             onKeyDown={onToggleDrawerTop}
    //         >
    //             <div className="flex items-center gap-4 md:hidden">
    //                 <Search />
    //                 <UserPro />
    //                 <Favorite />
    //             </div>
    //             <Divider />
    //             <div className="flex justify-center">
    //                 <Input
    //                     color="neutral"
    //                     disabled={false}
    //                     placeholder="Search Products..."
    //                     size="lg"
    //                     variant="plain"
    //                 />
    //             </div>
    //         </Box>
    //     </JoyDrawer>
    // </Box>
  );
}
