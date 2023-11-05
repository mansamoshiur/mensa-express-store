import { Urbanist } from "next/font/google";

import ToastProvider from "@/providers/toast-provider";
import Footer from "@/components/footer";

import "./globals.css";
import NavBar from "@/components/nav-bar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "Store - The place for all your purchases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        <ToastProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
