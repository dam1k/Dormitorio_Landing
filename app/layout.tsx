import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";
// export const metadata: Metadata = {
//   title: "Dormitorio Home",
//   description: "Explorează-ți Dormitorul Ideal",
// };

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Dormitorio Home</title>
        <meta name="mailru-domain" content="6ADAv6HZA8DH8vYy" />
        <meta name="description" content="Explorează-ți Dormitorul Ideal" />
      </head>
      <body className={poppins.className}>
        <MobileHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
