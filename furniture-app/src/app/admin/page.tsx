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
  const [perPage, setPerPage] = useState(4);
  const [pages, setPages] = useState(3);

  // logic
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  var currentPosts = [];

  if (furnitures) {
    currentPosts = furnitures.slice(indexOfFirstPost, indexOfLastPost);
  }

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const mainLoad = async () => {
    await loadFurnitures();
    const length = furnitures.length / 4;
    console.log(length);
  };

  useEffect(() => {
    mainLoad();
  }, []);

  return (
    <div className="bg-[#EDECE9] w-screen h-screen overflow-scroll ">
      <Toaster position="top-center" />
      <div className="mt-[100px] h-full w-full flex flex-col items-center gap-y-4">
        <Title />
        <div className="w-[90%] h-[60%] border-y-[1px] border-[#343434] flex flex-col gap-y-4">
          <h1 className={cinzel.className}>Content</h1>
          <div className="grow flex flex-col justify-around">
            {currentPosts.map((item: any, index: number) => (
              <TemplateMain key={1000 - index} item={item} />
            ))}
          </div>
        </div>
        <Pagination page={currentPage} onChange={handlePage} count={pages} />
        <AdminModal />
      </div>
    </div>
  );
}
