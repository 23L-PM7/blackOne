"use client";
import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useFurnitures } from "@/components/utility/utils";
import { cinzel, quicksand } from "@/app/theme";
import { AddToCart } from "@/components/shop/addtoCart";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import { Loader } from "@/components/loader";
import { RelatedProducts } from "@/components/shop/relatedProducts";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "@/components/footer/Footer";

export default function Home() {
  // retrieve furnitures
  // but the single comes in an array so we need to add .[0]
  const { single, loadSingleFurniture }: any = useFurnitures();

  // retrieve the params
  const params = useParams<{ slug: string }>();

  const decodedname = params.slug;

  const scrollRef = useRef(null);

  useEffect(() => {
    async () => {
      const locomotiveScroll = await new LocomotiveScroll({
        el: scrollRef.current ?? undefined,
        smooth: true,
      });
    };
  }, []);

  if (single.length === 0) {
    loadSingleFurniture(decodedname);
    return <Loader />;
  }

  return (
    <>
      <div
        ref={scrollRef}
        className="bg-[#EDECE9] text-[#343434] flex flex-col items-center gap-y-4"
      >
        <div
          className={`${quicksand.className} w-[90%] md:w-screen md:px-[40px] flex flex-col items-center gap-y-3`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="md:w-[50%] md:flex md:flex-col gap-y-5">
              <div className="flex flex-col items-center gap-y-5">
                <div className="w-full flex justify-center md:justify-start">
                  <h1 className="text-center md:text-left text-[35px] md:text-[45px]">
                    {single[0].name}
                  </h1>
                </div>

                <p className="text-[18px] md:text-left text-center">
                  {single[0].details}
                </p>
                <div className="w-full flex justify-center md:justify-start">
                  <h1 className={`${cinzel.className} text-[30px]`}>
                    {single[0].price}$
                  </h1>
                </div>
              </div>
              <AddToCart item={single[0]} />
              <AccordionGroup
                transition={{
                  initial: "0.3s ease-out",
                  expanded: "0.2s ease",
                }}
                sx={{
                  width: "90%",
                  marginTop: "20px",
                  marginBottom: "20px",
                  bgcolor: "transparent",
                  [`& .${accordionSummaryClasses.button}:hover`]: {
                    bgcolor: "transparent",
                  },
                  [`& .${accordionSummaryClasses.button}:active`]: {
                    bgcolor: "transparent",
                  },
                  [`& .${accordionSummaryClasses.button}:focus`]: {
                    bgcolor: "transparent",
                  },
                  ...quicksand.style,
                }}
              >
                <Accordion>
                  <AccordionSummary>Description</AccordionSummary>
                  <AccordionDetails>{single[0].description}</AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>Dimensions</AccordionSummary>
                  <AccordionDetails>{single[0].dimensions}</AccordionDetails>
                </Accordion>
              </AccordionGroup>
            </div>
            <div className="hidden md:flex md:flex-col md:w-[50%] gap-y-4">
              <img src={single[0].picture} className="w-full h-auto" />
              <img src={single[0].pictureTwo} className="w-full h-auto" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-2 md:hidden">
          <img src={single[0].picture} className="w-screen h-auto" />
          <img src={single[0].pictureTwo} className="w-screen h-auto" />
        </div>

        <p className="w-[90%] text-[18px] text-center my-[40px] md:text-left md:text-[40px] md:font-thin">
          {single[0].details}
        </p>
        <h1
          data-scroll
          data-scroll-speed="1"
          className={`${cinzel.className} text-[25px] font-semibold md:text-[45px]`}
        >
          RELATED PRODUCTS
        </h1>
        <RelatedProducts />
      </div>
      <Footer />
    </>
  );
}
