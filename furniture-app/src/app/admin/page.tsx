"use client";
import { Title } from "@/components/adminComponents/title";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import AdminModal from "@/components/adminComponents/modal";
import { cinzel, quicksand } from "../theme";

export default function Home() {
  return (
    <div className="bg-[#EDECE9]">
      <div className="h-screen w-screen flex flex-col items-center">
        <Title />
        <div className="w-[90%] border-y-[1px] border-[#343434]">
          <h1 className={cinzel.className}>Content</h1>
          <div className="w-full flex justify-around">
            <div>
              <h1 className={quicksand.className}>Name</h1>
              <p className={quicksand.className}>Description</p>
            </div>
            <div>
              <h1 className={quicksand.className}>Details</h1>
              <h1 className={quicksand.className}>Price</h1>
            </div>
            <div>
              <h1 className={quicksand.className}>Category</h1>
              <h1 className={quicksand.className}>Dimensions</h1>
            </div>
          </div>
        </div>
        <AdminModal />
      </div>
    </div>
  );
}
