"use client";
import { Title } from "@/components/adminComponents/title";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import AdminModal from "@/components/adminComponents/modal";
import { cinzel } from "../theme";

export default function Home() {
  return (
    <div className="bg-[#EDECE9]">
      <div className="h-screen w-screen flex flex-col items-center">
        <Title />
        <div className="border-y-[1px] border-[#343434]">
          <h1 className={cinzel.className}>Content</h1>
        </div>
        <AdminModal />
      </div>
    </div>
  );
}
