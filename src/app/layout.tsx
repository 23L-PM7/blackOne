"use client";
import { CssVarsProvider } from "@mui/joy";
import "./globals.css";
import customTheme, { quicksand } from "./theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <CssVarsProvider theme={customTheme}> */}
      <body className={`${quicksand.className} text-[#343434]`}>
        {children}
      </body>
      {/* </CssVarsProvider> */}
    </html>
  );
}
