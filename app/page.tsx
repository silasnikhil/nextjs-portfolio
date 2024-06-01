"use client"
import { Homepage } from "./pages/Homepage";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/theme";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Homepage />
    </ChakraProvider>
  );
}
