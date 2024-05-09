import type { Metadata } from "next";
import "./globals.css";
import { heroData } from "@/utils/portfolioData/heroData";

export const metadata: Metadata = {
  title: heroData?.firstname || "Default Title", 
  description: heroData?.role || "Default Description", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
