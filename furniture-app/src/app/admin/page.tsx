"use client";
import { Title } from "@/components/adminComponents/title";
import AdminModal from "@/components/adminComponents/modal";
import { cinzel, quicksand } from "../theme";
import { TemplateMain } from "@/components/adminComponents/templateMain";
import { useFurnitures } from "@/components/utility/utils";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import Pagination from "@mui/material/Pagination";

export default function Home() {
  const { furnitures, loadFurnitures }: any = useFurnitures();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);

  // logic
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  var currentPosts = [];

  if (furnitures) {
    currentPosts = furnitures.slice(indexOfFirstPost, indexOfLastPost);
  }

  function handlePage(page: number) {
    setCurrentPage(page);
  }

  useEffect(() => {
    loadFurnitures();
  }, []);

  return (
    <div className="bg-[#EDECE9] w-screen h-screen overflow-scroll">
      <Toaster position="top-center" />
      <div className="h-screen w-screen flex flex-col items-center gap-y-4">
        <Title />
        <div className="w-[90%] border-y-[1px] border-[#343434] flex flex-col gap-y-4">
          <h1 className={cinzel.className}>Content</h1>
          {currentPosts.map((item: any, index: number) => (
            <TemplateMain key={1000 - index} item={item} />
          ))}
        </div>
        <Pagination onChange={(e) => handlePage(e.target.value)} count={10} />
        <AdminModal />
      </div>
    </div>
  );
}
