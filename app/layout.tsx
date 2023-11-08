import { Urbanist } from "next/font/google";
import "slick-carousel/slick/slick.css";
import ToastProvider from "@/providers/toast-provider";
import ModalProvider from "@/providers/modal-provider";

import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import Banner from "@/components/banner";

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
        <ModalProvider />
        <Banner  />
        {children}
        <Footer />
      </body>
    </html>
  );
}
