"use client";
import { CssVarsProvider } from "@mui/joy";
import "./globals.css";
import customTheme, { quicksand } from "./theme";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <CssVarsProvider theme={customTheme}> */}
      <body className={`${quicksand.className} text-[#343434]`}>
        <Header />
        {children}
      </body>
      {/* </CssVarsProvider> */}
    </html>
  );
}
