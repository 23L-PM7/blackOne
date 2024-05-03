import { Quicksand, Cinzel } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const quicksand = Quicksand({ subsets: ["latin"] });
export const cinzel = Cinzel({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`${quicksand.className} ${cinzel.className}`}>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
