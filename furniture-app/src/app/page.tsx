import { DeskHeader } from "@/components/header/DeskHeader";
import { Header } from "@/components/header/Header";
import { DropDown } from "@/components/header/dropdown";

export default function Home() {
  return (
    <div>
      <DeskHeader />
      <DropDown />
      <Header />
    </div>
  );
}
