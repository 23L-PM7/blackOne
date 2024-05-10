"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useFurnitures } from "@/components/utility/utils";

export default function Home() {
  // retrieve furnitures
  const { furnitures }: any = useFurnitures();

  // retrieve the params
  const params = useParams<{ id: string }>();

  //   decode the param %20 to white space
  const decodedname = decodeURI(params.id);

  //   find the right product
  const product = furnitures.filter((item: any) => item.name === decodedname);

  // console log check
  console.log(product);

  return (
    <div>
      <div>
        <h1>{decodedname}</h1>
      </div>
    </div>
  );
}
