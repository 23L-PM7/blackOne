"use client";

type MainProps = {
  item: any;
};

export function HomeItem(props: MainProps) {
  const { item } = props;

  return (
    <div className="w-full h-full snap-start snap-always overflow-hidden flex-shrink-0">
      <div className="w-full h-full md:h-[65%] md:w-[50%]">
        <img src={item.picture} className="object-cover h-full w-auto" />
      </div>
      <div className=""></div>
    </div>
  );
}
