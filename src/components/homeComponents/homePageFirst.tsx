"use client";
import { cinzel, quicksand } from "@/app/theme";

export function FirstItem() {
  return (
    <div className="w-full h-full snap-start overflow-hidden flex-shrink-0 relative md:flex">
      <div className="hidden md:block">
        <img
          src="https://www.karageorgiou.gr/wp-content/uploads/2022/11/TM4A8259.jpg"
          className="object-cover w-full h-auto"
        />
      </div>
      <img
        src="https://www.karageorgiou.gr/wp-content/uploads/2022/11/TM4A8259.jpg"
        className="object-cover h-full w-auto md:hidden"
      />
      {/* mobile title */}
      <div className="md:hidden absolute top-0 flex flex-col p-4 w-full h-[23%] justify-center">
        <div className="w-[80%]">
          <h1 className={`${quicksand.className} text-[45px] h-[45px]`}>
            Passion
          </h1>
        </div>

        <div className="w-[80%] flex justify-end">
          <h1 className={`${cinzel.className} text-[37px]`}>For Quality</h1>
        </div>
      </div>
      {/* desktop title */}
      <div className="hidden w-[50%] h-full md:flex flex-col items-center relative">
        <div className="w-[50%] flex">
          <h1 className={`text-[65px] h-[65px]`}>Passion</h1>
        </div>
        <div className="w-[50%] flex justify-end">
          <h1 className={`${cinzel.className} text-[60px]`}>For Quality</h1>
        </div>
        <p></p>
      </div>
    </div>
  );
}
