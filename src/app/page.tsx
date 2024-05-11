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
    <div>
      <Header />
    </div>
  );
}
