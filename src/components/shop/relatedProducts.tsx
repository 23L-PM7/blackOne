"use client";
import { useEffect, useState } from "react";
import { useFurnitures } from "../utility/utils";
import { Loader } from "../loader";
import { cinzel, quicksand } from "@/app/theme";
import { HeartBrown } from "../vectors/heart";

export function RelatedProducts() {
  const { furnitures, loadFurnitures }: any = useFurnitures();

  useEffect(() => {
    loadFurnitures();
  }, []);

  if (furnitures.length === 0) {
    return <Loader />;
  }

  if (furnitures.length > 1) {
    const relatedProducts = furnitures.slice(0, 3);

    return (
      <div className="w-full mt-[50px] flex flex-col items-center">
        {relatedProducts.map((item: any) => (
          <div className="w-[90%]">
            <img src={item.picture} className="w-full h-auto" />
            <div>
              <h1 className={`${cinzel.className} text-[25px]`}>{item.name}</h1>
              <h1 className={`${quicksand.className} text-[25px]`}>
                {item.price}$
              </h1>
            </div>
            <div className="w-full flex justify-between">
              <button
                className={`bg-transparent text-[#A18565] ${quicksand.className} border-[#A18565] border-[2px] text-[20px] rounded-md px-4 py-1`}
              >
                VIEW PRODUCT
              </button>
              <HeartBrown />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
