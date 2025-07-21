import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { toastOption } from "@/config/toast";

import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Harry Excellent Amadi Foundation",
  description:
    "To build a world where no dream dies in silence, no child goes to bed hungry, and no purpose is buried by poverty. A world where young people rise with clarity, courage, and capacity to transform their lives and the lives of others because someone believed in them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
        {children}
        <Toaster toastOptions={toastOption} />
      </body>
    </html>
  );
}
