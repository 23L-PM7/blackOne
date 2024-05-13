"use client";
import { cinzel, quicksand } from "@/app/theme";
import { ArrowRight } from "../vectors/arrowright";

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
          <h1 className={`${cinzel.className} text-[37px] h-[37px]`}>
            For Quality
          </h1>
        </div>
      </div>
      {/* desktop title */}
      <div className="hidden w-[50%] h-full md:flex flex-col items-center pt-[150px] gap-10">
        <div className="w-[80%]">
          <div className="w-[60%] flex">
            <h1 className={`${cinzel.className} text-[40px] h-[40px]`}>
              Passion
            </h1>
          </div>
          <div className="w-[50%] flex justify-end">
            <h1 className={`${cinzel.className} text-[40px] h-[40px]`}>
              For Quality
            </h1>
          </div>
        </div>

        <p className="w-[80%] text-[20px]">
          For three generations and nearly a century, Karageorgiou Interiors has
          been delivering elegant, timeless spaces and made-to-measure, hand
          crafted, fine furniture that excite the eye and nurture the soul.{" "}
        </p>

        <div className="w-[80%]"></div>
        <div className="w-[80%]">
          <button className="border-[#A18565] text-[#A18565] text-[30px] flex items-center gap-x-5">
            <div className="pb-[50px]">
              Swipe right for our product offerings
              <img
                src="/images/Brownlogo.png"
                className="w-[200px] pt-[50px]"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
