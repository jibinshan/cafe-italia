import "@/styles/globals.css";
import "@/styles/ham.css";

import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import {
  Oswald,
  Roboto,
  Playfair_Display,
  Manrope,
  Montserrat,
  Inter,
} from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Cafe Italia Restaurant",
  description:
    "Cafe Italia was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality.",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen bg-[#070707] font-roboto text-[#FBEAD2] antialiased",
          manrope.variable,
          roboto.variable,
          playfair.variable,
          inter.variable,
          montserrat.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
