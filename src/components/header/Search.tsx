import { Modal, ModalClose, ModalDialog } from "@mui/joy";
import Typography from "@mui/joy/Typography";


type TopDrawerProps = {
    open: boolean;
    onToggleDrawerTop: () => void;
};

export function TopDrawer(props: TopDrawerProps) {
    const { open, onToggleDrawerTop } = props;

    return (
        <Modal open={open} onClose={onToggleDrawerTop}>
            <ModalDialog
                onClick={onToggleDrawerTop}
                onKeyDown={onToggleDrawerTop}
                color="warning"
                layout="fullscreen"
                size="lg"
                variant="soft"
            >
                <ModalClose />
                <Typography>Modal title</Typography>
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