"use client";
import { Title } from "@/components/adminComponents/title";
import AdminModal from "@/components/adminComponents/modal";
import { cinzel, quicksand } from "../theme";
import { TemplateMain } from "@/components/adminComponents/templateMain";
import { useFurnitures } from "@/components/utility/utils";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import Pagination from "@mui/material/Pagination";
import { Loader } from "@/components/loader";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const { furnitures, loadFurnitures }: any = useFurnitures();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
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

  useEffect(() => {
    if (furnitures) {
      if (furnitures.length % perPage == 0) {
        const temporary = Math.round(furnitures.length / perPage);
        setPages(temporary);
      } else {
        const temporary = Math.ceil(furnitures.length / perPage);
        setPages(temporary);
      }
    }
  }, [furnitures]);

  if (furnitures.length === 0) {
    loadFurnitures();
    return <Loader />;
  }

  return (
    <div className="bg-[#EDECE9] w-screen h-screen flex flex-col justify-between">
      <Toaster position="bottom-right" />
      <div className="my-[80px] h-full w-full flex flex-col items-center gap-y-4">
        <Title />
        <div className="w-[90%] h-full border-t-[1px] border-[#343434] flex flex-col gap-y-4 overflow-scroll">
          <h1 className={cinzel.className}>Content</h1>
          <div className="grow flex flex-col justify-around gap-10">
            {currentPosts.map((item: any, index: number) => (
              <TemplateMain key={item._id} item={item} />
            ))}
          </div>
        </div>
        <Pagination page={currentPage} onChange={handlePage} count={pages} />
        <AdminModal />
      </div>
      <Footer />
    </div>
  );
}
