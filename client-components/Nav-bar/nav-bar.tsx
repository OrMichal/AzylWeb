import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "../shopping-cart/shopping-cart";

interface navbarProps {
  children: React.ReactNode;
}

export default function NavBar({ children }: navbarProps) {
  return (
    <nav className="flex flex-col items-center p-1 shadow">
      <div className="flex flex-row justify-between w-350 items-center">
        <Link href={"/"}>
          <Image
            src={"/images/daisy-azyl-pos-Photoroom.png"}
            width={140}
            height={200}
            alt="daisy logo"
          />
        </Link>
        <div className="flex flex-row gap-10">{children}</div>
        <ShoppingCart />
      </div>
    </nav>
  );
}
