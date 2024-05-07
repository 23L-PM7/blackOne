import { quicksand } from "@/app/theme";
import { Button } from "@mui/joy";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useFurnitures } from "../utility/utils";

type MainInfo = {
  item: any;
};

export function TemplateMain(props: MainInfo) {
  const { loadFurnitures }: any = useFurnitures();
  const { item } = props;

  function confirm() {
    toast("Are you sure you want to delete?", {
      action: {
        label: "Confirm",
        onClick: () => confirmed,
      },
    });
  }

  function confirmed() {
    axios.delete(`/api/furnitures/${item._id}`);
    loadFurnitures();
  }

  return (
    <div>
      <Toaster position="top-center" closeButton />
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className={quicksand.className}>{item.name}</h1>
          <p className={quicksand.className}>{item.description}</p>
        </div>
        <div>
          <h1 className={quicksand.className}>{item.details}</h1>
          <h1 className={quicksand.className}>{item.price}</h1>
        </div>
        <div>
          <h1 className={quicksand.className}>{item.category}</h1>
          <h1 className={quicksand.className}>{item.dimensions}</h1>
        </div>
        <Button
          color="primary"
          onClick={confirm}
          size="sm"
          variant="solid"
          sx={{
            width: "30px",
            height: "30px",
            backgroundColor: "#A18565",
            ...quicksand.style,
          }}
        >
          X
        </Button>
      </div>
    </div>
  );
}
