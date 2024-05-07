"use client";
import { Title } from "@/components/adminComponents/title";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import AdminModal from "@/components/adminComponents/modal";
import { cinzel, quicksand } from "../theme";
import { TemplateMain } from "@/components/adminComponents/templateMain";
import { useFurnitures } from "@/components/utility/utils";
import { useEffect, useState } from "react";
import { Loader } from "@/components/loader";

export default function Home() {
  const { furnitures, loadFurnitures }: any = useFurnitures();

  useEffect(() => {
    loadFurnitures();
  }, []);

  if (!furnitures) {
    return <Loader />;
  }

  return (
    <div className="bg-[#EDECE9]">
      <div className="h-screen w-screen flex flex-col items-center gap-y-4">
        <Title />
        <div className="w-[90%] border-y-[1px] border-[#343434] flex flex-col gap-y-4">
          <h1 className={cinzel.className}>Content</h1>
          {furnitures.map((item: any) => (
            <TemplateMain item={item} />
          ))}
        </div>
        <AdminModal />
      </div>
    </div>
  );
}
