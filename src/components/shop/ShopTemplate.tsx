import { quicksand } from "@/app/theme";
import { Toaster, toast } from "sonner";
import { useFurnitures } from "../utility/utils";



type MainInfo = {
    item: any;
};


export function ShopTemplate(props: MainInfo) {
    const { loadFurnitures }: any = useFurnitures();
    const { item } = props;

    return (
        <div className="border-y-[1px] border-[#343434]">
            <div className="w-full flex justify-between items-center">
                <div>
                    <h1 className={quicksand.className}>{item.name}</h1>
                    <img
                        className={quicksand.className}
                        srcSet={item.picture}
                        src={item.src}
                        alt={item.title}
                    />
                    <div className={quicksand.className}>{item.price}</div>
                </div>
            </div>
        </div>
    );

}  