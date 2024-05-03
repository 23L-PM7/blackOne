import { Header } from "@/components/Header";
import { Title } from "@/components/adminComponents/title";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import { quicksand } from "../layout";
import AdminModal from "@/components/adminComponents/modal";

export default function Home() {
  return (
    <div className="bg-[#EDECE9]">
      <div className="h-screen w-screen flex flex-col items-center">
        <Title />
        <div className="border-y-[1px] border-[#343434]">
          <h1>Content</h1>
        </div>
        {/* <Button
          color="warning"
          disabled={false}
          //   onClick={function () {}}
          size="md"
          variant="soft"
        /> */}
        <AdminModal />
      </div>
    </div>
  );
}
