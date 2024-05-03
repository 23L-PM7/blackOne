import { Quicksand, Cinzel } from "next/font/google";
import "./globals.css";

export const quicksand = Quicksand({ subsets: ["latin"] });
export const cinzel = Cinzel({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} ${cinzel.className}`}>
        {children}
      </body>
    </html>
  );
}
