"use client";

import { Header } from "@/components/header/Header";
import { Loader } from "@/components/loader";
import { useFurnitures } from "@/components/utility/utils";
import { useEffect } from "react";
import { cinzel, quicksand } from "./theme";
import { FirstItem } from "@/components/homeComponents/homePageFirst";

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
      <Header />
      <div className="flex-grow">
        <div className="w-full h-full overflow-x-scroll snap-x snap-mandatory flex">
          <FirstItem />
          <div className="w-full h-full snap-start snap-always overflow-hidden flex-shrink-0">
            <img
              src="https://karageorgiou.gr/wp-content/uploads/2022/05/HighRes-11-as-Smart-Object-1-1.jpg"
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
