"use client";
import { Loader } from "@/components/loader";
import { useFurnitures } from "@/components/utility/utils";
import { useEffect } from "react";
import { cinzel, quicksand } from "./theme";
import { FirstItem } from "@/components/homeComponents/homePageFirst";
import { HomeItem } from "@/components/homeComponents/homeItem";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const { furnitures, loadFurnitures }: any = useFurnitures();

  useEffect(() => {
    loadFurnitures();
  }, []);

  if (furnitures.length === 0) {
    return <Loader />;
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-[#EDECE9] overflow-hidden">
      <div className="grow">
        <div className="w-full h-full overflow-x-scroll snap-x snap-mandatory flex">
          <FirstItem />
          {furnitures.map((item: any) => (
            <HomeItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
