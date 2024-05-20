import { quicksand } from "@/app/theme";
import { Toaster, toast } from "sonner";
import { useFurnitures } from "../utility/utils";
import Link from "next/link";
import { AspectRatio, Button, IconButton, Typography } from "@mui/joy";
import { MdFavoriteBorder } from "react-icons/md";
import Pagination from "@mui/material/Pagination";



type MainInfo = {
    item: any;
};


export function ShopTemplate(props: MainInfo) {
    const { furnitures, loadFurnitures, empty }: any = useFurnitures();
    const { item } = props;

    return (
        <div>
            <Link
                key={345}
                onClick={() => empty()}
                href={`/shop/${item.slug}`}
            >
                <div className="flex flex-col mb-[40px] mt-[80px] lg:mt-[140px] ">
                    <AspectRatio
                        variant="outlined"
                        ratio="4/4"
                        className="col-start-2"
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
        </div>
    );

}








// <div className="border-y-[1px] border-[#343434]">
//     <div className="w-full flex justify-between items-center">
//         <div>
//             <h1 className={quicksand.className}>{item.name}</h1>
//             <img
//                 className={quicksand.className}
//                 srcSet={item.picture}
//                 src={item.src}
//                 alt={item.title}
//             />
//             <div className={quicksand.className}>{item.price}</div>
//         </div>
//     </div>
// </div>