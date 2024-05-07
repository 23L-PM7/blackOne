import { quicksand } from "@/app/theme";

type MainInfo = {
  item: any;
};

export function TemplateMain(props: MainInfo) {
  const { item } = props;

  return (
    <div>
      <div className="w-full flex justify-around">
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
      </div>
    </div>
  );
}
