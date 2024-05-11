"use client";
import { useEffect, useState } from "react";
import { useFurnitures } from "../utility/utils";
import { Loader } from "../loader";
import { cinzel, quicksand } from "@/app/theme";
import { HeartBrown } from "../vectors/heart";
import Link from "next/link";

export function RelatedProducts() {
  const { furnitures, loadFurnitures }: any = useFurnitures();
  const [random, setRandom] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadFurnitures();
  }, []);

  if (furnitures.length === 0) {
    return <Loader />;
  }

  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  if (furnitures.length > 1) {
    const reproducts = shuffleArray([...furnitures]);
    const relatedProducts = reproducts.slice(0, 3);

    return (
      <div className="w-full my-[50px] flex flex-col md:flex-row items-center gap-10 text-[#343434] md:px-10">
        {relatedProducts.map((item: any) => (
          <div key={item.slug} className="w-[90%] flex flex-col gap-y-4">
            <Link href={`/shop/${item.slug}`}>
              <div className="w-[400px] h-[400px] overflow-hidden">
                <img src={item.picture} className="object-cover" />
              </div>
              <div className="">
                <div className="w-[60%] my-3 border-[#343434] border-t-[1px]"></div>
                <h1 className={`${cinzel.className} text-[25px]`}>
                  {item.name}
                </h1>
                <h1 className={`${quicksand.className} text-[25px]`}>
                  {item.price}$
                </h1>
              </div>
            </Link>
            <div className="w-full flex justify-between">
              <Link
                href={`/shop/${item.slug}`}
                className={`bg-transparent text-[#A18565] ${quicksand.className} border-[#A18565] border-[1px] text-[20px] rounded-md px-4 py-1 hover:bg-[#A18565] hover:text-[#f5f5f5]`}
              >
                VIEW PRODUCT
              </Link>
              <button className="flex justify-center items-center">
                <HeartBrown />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
