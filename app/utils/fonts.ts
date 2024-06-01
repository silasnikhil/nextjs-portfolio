// app/fonts.ts
import { Cutive } from "next/font/google";

const cutive = Cutive({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cutive",
  weight: "400"
});

export const fonts = {
  cutive,
};
