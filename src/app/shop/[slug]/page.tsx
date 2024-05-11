"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useFurnitures } from "@/components/utility/utils";
import { cinzel, quicksand } from "@/app/theme";
import { HeartBrown } from "@/components/vectors/heart";
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

export default function Home() {
  // retrieve furnitures
  // but the single comes in an array so we need to add .[0]
  const { single, loadSingleFurniture }: any = useFurnitures();

  // retrieve the params
  const params = useParams<{ slug: string }>();

  const decodedname = params.slug;

  useEffect(() => {
    loadSingleFurniture(decodedname);
  }, []);

  if (single.length === 0) {
    return <Loader />;
  }

  return (
    <div className="w-screen h-screen overflow-scroll bg-[#EDECE9] text-[#343434] flex flex-col items-center gap-y-4">
      <div
        className={`${quicksand.className} w-[90%] flex flex-col items-center gap-y-3`}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-y-3">
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
            <AddToCart />
            <AccordionGroup
              transition="0.2s"
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
          <div className="hidden md:flex md:flex-col md:w-[50%]">
            <img src={single[0].picture} className="w-full h-auto" />
            <img src={single[0].pictureTwo} className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-2 md:hidden">
        <img src={single[0].picture} className="w-screen h-auto" />
        <img src={single[0].pictureTwo} className="w-screen h-auto" />
      </div>

      <p className="w-[90%] text-[18px] text-center my-[40px]">
        {single[0].details}
      </p>
      <h1 className={`${cinzel.className} text-[25px] font-semibold`}>
        RELATED PRODUCTS
      </h1>
      <RelatedProducts />
    </div>
  );
}
