import type { Metadata } from "next";
import { Germania_One } from "next/font/google";
import "./globals.css";

const germaniaOne = Germania_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROCK THE CASBAH!",
  description: "You're invited to a weekend of fun, music, and adventure in Marrakech!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${germaniaOne.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
