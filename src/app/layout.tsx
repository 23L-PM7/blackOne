"use client";
import { CssVarsProvider } from "@mui/joy";
import "./globals.css";
import customTheme, { quicksand } from "./theme";
import { Header } from "@/components/header/Header";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Footer from "@/components/footer/Footer";
import { Suspense, useRef } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const containerRef = useRef(null);

  return (
    <html lang="en">
      {/* <CssVarsProvider theme={customTheme}> */}
      <body className={`${quicksand.className} text-[#343434]`}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <Header />
          <main data-scroll-container ref={containerRef}>
            <Suspense>{children}</Suspense>
          </main>
        </LocomotiveScrollProvider>
      </body>
      {/* </CssVarsProvider> */}
    </html>
  );
}
