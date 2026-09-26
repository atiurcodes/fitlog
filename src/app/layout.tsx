import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FitProvider from "@/context/FitContext";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">

        <FitProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ToastContainer />
        </FitProvider>

      </body>
    </html>
  );
}
