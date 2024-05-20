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
        {/* <ModalClose onClick={onToggleDrawerTop} /> */}
        <DialogContent>
          <div className="flex justify-center items-center my-auto">
            <form action="/search">
              <Input
                placeholder="SEARCH PRODUCTS..."
                variant="plain"
                name="query"
                sx={{
                  fontFamily: { cinzel },
                  backgroundColor: "transparent",
                  color: "#A18565",
                  padding: "none",
                  "&:hover": {
                    color: "#A18565",
                  },
                  "&::before": {
                    display: "none",
                  },
                  fontWeight: "100",
                }}
              />
              <button
                type="submit"
                className="text-[#A18565] hover:text-[#000000] hover:bg-transparent font-[600] text-[15px]"
              >
                search
              </button>
            </form>
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
