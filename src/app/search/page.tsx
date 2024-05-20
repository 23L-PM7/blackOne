"use client";

import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return (
    <div>
      <Header />
      <div className="h-96 pt-52">Search, {query}</div>
      <Footer />
    </div>
  );
}
