type MainProps = {
  item: any;
};

export function YourOrderItem(props: MainProps) {
  const { item } = props;

  return (
    <div className="w-full flex justify-between border-b-[1px] border-[#343434] py-3 text-[#343434] items-center">
      <div className="font-semibold">
        {/* name */}
        <h1>{item.name}</h1>
        {/* quantity */}
        <h1>x{item.amount}</h1>
      </div>
      <h1 className="font-semibold">{item.price}$</h1>
    </div>
  );
}
