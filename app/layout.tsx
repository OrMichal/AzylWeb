import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/client-components/ui/navbar/navbar";
import HoverScrollItem from "@/client-components/ui/HoverScrollItem/hover-scroll-item";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Daisy azyl z. s.",
  description: "Pomáháme zvířátkám najít nový domov.",
};

const NavBarData = [
  {
    label: "O nás",
    items: [
      { label: "Kdo jsme", href:"" }
    ]
  }
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${quicksand.className}`} >
        <Navbar>
          {NavBarData.map((x, index) => (
            <HoverScrollItem key={index} label={x.label} items={x.items} />
          ))}
        </Navbar>
        {children}
      </body>
    </html>
  );
}
