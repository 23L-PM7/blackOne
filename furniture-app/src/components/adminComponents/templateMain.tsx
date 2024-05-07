import { quicksand } from "@/app/theme";

export function TemplateMain() {
  return (
    <div>
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
  );
}
