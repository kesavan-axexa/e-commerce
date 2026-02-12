import { Aleo, Josefin_Slab, Sora } from "next/font/google";

export const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const aleo = Aleo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});
