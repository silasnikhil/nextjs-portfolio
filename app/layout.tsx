"use client";
import "./globals.css";
import { Box } from "@chakra-ui/react";
import { Providers } from "./providers";
import { fonts } from "./utils/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.cutive.variable}>
      <body className={fonts.cutive.variable}>
        <Providers>
          <Box
            pt={{ base: "4", md: "2rem" }}
            pl={{ base: "4", md: "30rem" }}
            pr={{ base: "4", md: "30rem" }}
          >
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
