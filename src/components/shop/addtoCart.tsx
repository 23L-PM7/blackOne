import { HeartBrown } from "../vectors/heart";

export function AddToCart() {
  return (
    <div className="flex w-full justify-center gap-x-3 md:justify-start">
      <button className="w-[80%] h-[40px] rounded text-[#F5F5F5] bg-[#A18565] hover:text-[#343434] hover:bg-[#F5F5F5]">
        ADD TO CART
      </button>
      <button>
        <HeartBrown />
      </button>
    </div>
  );
}
