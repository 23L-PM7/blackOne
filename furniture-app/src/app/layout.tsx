import { CssVarsProvider } from "@mui/joy";
import "./globals.css";
import customTheme from "./theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <CssVarsProvider theme={customTheme}> */}
      <body>{children}</body>
      {/* </CssVarsProvider> */}
    </html>
  );
}
