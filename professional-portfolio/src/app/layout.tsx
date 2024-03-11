import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shreeraam | Personal Portfolio",
  description: "Shreeraam Ia an Full Stack Developer and a Penetration Tester",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 txt-gray-950`} >{children}</body>
    </html>
  );
}
