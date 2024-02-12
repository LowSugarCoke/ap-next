import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AP程式 升學專家",
  description:
    "AP課程旨在以最有效率的方式，幫助學生在APCS考試中獲得最高分數。憑藉我們團隊超過10,000小時的APCS家教經驗，我們精心設計了詳細的APCS課程大綱，以實際成績作為我們教學成效的最佳證明。我們提供的是客製化、精緻的教育方案，包括一對一教學、小班課程或自學影片，以滿足不同學生的學習需求。",
  icons: "Ap_logo_small.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
