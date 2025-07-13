import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "../shopping-cart/shopping-cart";
import { NavBarItem } from "@/elements/nav-bar-item/nav-bar-item";
import { NavBarItemDetail } from "@/elements/nav-bar-item-detail/nav-bar-item-detail";

export default function NavBar() {
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
        <div className="flex flex-row gap-10">
          <NavBarItem title="Domů" href="/" />
          <NavBarItem title="O nás" href="/about">
            <NavBarItemDetail>
              <Link href={"/about#whoweare"}>Kdo jsme</Link>
            </NavBarItemDetail>
            <NavBarItemDetail>
              <Link href={"/about#howitworks"}>Jak to u nás funguje</Link>
            </NavBarItemDetail>
            <NavBarItemDetail>
              <Link href={"/about/contact"}>Kontakt</Link>
            </NavBarItemDetail>
          </NavBarItem>
          <NavBarItem title="Zvířátka" href="/animals">
            <NavBarItemDetail>
              <Link href={"/animals/haha"}>haha</Link>
            </NavBarItemDetail>
          </NavBarItem>
          <NavBarItem title="Časté dotazy" href="/faq"></NavBarItem>
          <NavBarItem title="E-shop" href="/eshop"></NavBarItem>
        </div>
        <ShoppingCart />
      </div>
    </nav>
  );
}
