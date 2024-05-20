import { Input } from "@mui/joy";
import { cinzel } from "@/app/theme";

export default function Sinput() {
  return (
    <form action="/search">
      <div className="flex justify-center items-center my-auto">
        <Input
          placeholder="SEARCH PRODUCTS..."
          variant="plain"
          name="query"
          sx={{
            fontFamily: { cinzel },
            backgroundColor: "transparent",
            color: "#A18565",
            padding: "none",
            "&:hover": {
              color: "#A18565",
            },
            "&::before": {
              display: "none",
            },
            fontWeight: "100",
          }}
        />
        <button
          type="submit"
          className="text-[#A18565] hover:text-[#000000] hover:bg-transparent font-[600] text-[15px]"
        >
          search
        </button>
      </div>
    </form>
  );
}
