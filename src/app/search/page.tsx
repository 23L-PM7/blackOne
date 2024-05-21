"use client";

import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Searching } from "@/components/seaching/searching";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const itemCount = 1;

  itemCount: Number;

  return (
    <div>
      <Header />
      <Suspense>
        <div className="pt-50 text-[16px]">
          Таны "{query}" хайлтаар, "{itemCount}" илэрц олдлоо.
        </div>
        <Searching />
        <div className="h-96 pt-52">Search, {query}</div>
      </Suspense>
      <Footer />
    </div>
  );
}
