"use client";

import { cinzel, quicksand } from "@/app/theme";
import Link from "next/link";
import { useFurnitures } from "../utility/utils";
import { HeartBlack, HeartBlackSmall, HeartBrown } from "../vectors/heart";

type MainProps = {
  item: any;
};

export function HomeItem(props: MainProps) {
  const { empty }: any = useFurnitures();
  const { item } = props;

  return (
    <div className="w-full h-screen snap-start snap-always overflow-hidden flex-shrink-0 flex">
      <div className="w-full h-[94%] md:w-[55%] relative">
        <img src={item.picture} className="object-cover h-full w-full" />
        <div className="absolute top-6 left-6 md:hidden">
          <h1 className={`text-[30px]`}>{item.name}</h1>
          <h1 className={`${cinzel.className} text-[20px]`}>{item.category}</h1>
        </div>
        <div className="absolute bottom-12 left-6 flex gap-3 md:hidden">
          <Link
            onClick={() => empty()}
            href={`/shop/${item.slug}`}
            className="bg-[#A18565] text-[#F5F5F5] rounded-lg py-2 px-6 hover:bg-[#343434]"
          >
            View Product
          </Link>
          <HeartBlackSmall />
        </div>
      </div>
      {/* desktop */}
      <div className="hidden md:block w-[45%] h-full">
        <h1 className={`${cinzel.className}`}>{item.name}</h1>
      </div>
    </div>
  );
}
