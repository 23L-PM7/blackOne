"use client";
import { Quicksand, Cinzel } from "next/font/google";
import { extendTheme } from "@mui/joy";

export const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
});

const customTheme = extendTheme({
  fontFamily: {
    display: "Cinzel",
    body: "Quicksand",
  },
});

export default customTheme;
