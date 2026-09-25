import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FitProvider from "@/context/FitContext";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">

        <FitProvider>
          <Navbar />
          <main>{children}</main>
          <ToastContainer />
        </FitProvider>

      </body>
    </html>
  );
}
