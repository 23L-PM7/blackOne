"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useFurnitures } from "@/components/utility/utils";

export default function Home() {
  // retrieve furnitures
  const { single, loadSingleFurniture }: any = useFurnitures();

  // retrieve the params
  const params = useParams<{ slug: string }>();

  const decodedname = params.slug;

  useEffect(() => {
    loadSingleFurniture(decodedname);
  }, []);

  return (
    <div>
      <div>
        <h1>{decodedname}</h1>
      </div>
    </div>
  );
}
