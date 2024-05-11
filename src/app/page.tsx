"use client";

import { Header } from "@/components/header/Header";
import { Loader } from "@/components/loader";
import { useFurnitures } from "@/components/utility/utils";
import { useEffect } from "react";

export default function Home() {
  const { furnitures, loadFurnitures }: any = useFurnitures();

  useEffect(() => {
    loadFurnitures();
  }, []);

  if (furnitures.length === 0) {
    return <Loader />;
  }

  return (
    <div className="w-screen h-screen flex flex-col overflow-scroll">
      <Header />
      <div className="w-full flex-grow overflow-scroll snap-x snap-mandatory flex">
        <div className="w-screen h-full snap-center snap-always overflow-hidden">
          <img
            src="https://karageorgiou.gr/wp-content/uploads/2022/05/HighRes-11-as-Smart-Object-1-1.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-inherit h-full snap-center snap-always overflow-hidden">
          <img
            src="https://karageorgiou.gr/wp-content/uploads/2022/05/HighRes-11-as-Smart-Object-1-1.jpg"
            className="h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
