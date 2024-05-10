"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useFurnitures } from "@/components/utility/utils";
import { cinzel, quicksand } from "@/app/theme";

export default function Home() {
  // retrieve furnitures
  // but the single comes in an array so we need to add .[0]
  const { single, loadSingleFurniture }: any = useFurnitures();

  // retrieve the params
  const params = useParams<{ slug: string }>();

  const decodedname = params.slug;

  useEffect(() => {
    loadSingleFurniture(decodedname);
  }, []);

  return (
    <div className="w-screen h-screen overflow-scroll bg-[#EDECE9] text-[#343434] flex justify-center">
      <div
        className={`${quicksand.className} w-[90%] flex flex-col items-center gap-y-3`}
      >
        <div className="flex flex-col items-center gap-y-5">
          <h1 className="text-center text-[35px]">{single[0].name}</h1>
          <p className="text-[18px] text-center">{single[0].details}</p>
          <h1 className={`${cinzel.className} text-[30px]`}>
            {single[0].price}$
          </h1>
        </div>
        <div className="flex w-full">
          <button className="w-[80%] h-[40px] rounded text-[#F5F5F5] bg-[#A18565] hover:text-[#343434] hover:bg-[#F5F5F5] mb-[50px]">
            ADD TO CART
          </button>
          <button></button>
        </div>
      </div>
    </div>
  );
}
