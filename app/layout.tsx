import "./globals.css";
import type { Metadata } from "next";
import { Mulish, Playfair_Display } from "next/font/google";

export const inter = Mulish({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mollie Woodworks",
  description: "Furniture and cabinetry in the Methow Valley",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
