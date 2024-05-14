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
      <div className="hidden md:flex w-[45%] h-[94%] flex-col justify-center gap-y-10 items-center">
        <div className="w-[80%]">
          <h1 className={`${cinzel.className} text-[35px]`}>{item.name}</h1>
        </div>

        <p className="text-[20px] w-[80%]">{item.details}</p>

        <div className="flex w-[80%] gap-x-6">
          <Link
            onClick={() => empty()}
            href={`/shop/${item.slug}`}
            className="bg-[#A18565] text-[#F5F5F5] rounded-lg py-2 px-8 hover:bg-[#343434]"
          >
            View Product
          </Link>
          <HeartBlackSmall />
        </div>
      </div>
    </div>
  );
}
