import React from "react";
import Link from "next/link";
import { ShoppingCart } from "../shopping-cart/shopping-cart";
import { NavBarItem } from "@/elements/nav-bar-item/nav-bar-item";
import { NavBarItemDetail } from "@/elements/nav-bar-item-detail/nav-bar-item-detail";
import { UserBox } from "../user-box/user-box";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import {
  faDog,
  faPeopleGroup,
  faQuestionCircle,
  faShop,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <nav className="flex flex-col items-center p-1 shadow">
      <div className="flex flex-row justify-between w-350 items-center">
        <Link href={"/"}>
          <span className="text-4xl font-light">Daisy z. s.</span>
        </Link>
        <div className="flex flex-row gap-10">
          <NavBarItem title="Domů" icon={faHouse} href="/" />
          <NavBarItem title="O nás" icon={faPeopleGroup} href="/about" />
          <NavBarItem title="Zvířátka" icon={faDog} href="/animals" />
          <NavBarItem
            title="Časté dotazy"
            icon={faQuestionCircle}
            href="/faq"
          />
          <NavBarItem title="E-shop" icon={faShop} href="/eshop"></NavBarItem>
        </div>
        <div className="flex gap-10 items-center">
          <ShoppingCart />
          <UserBox />
        </div>
      </div>
    </nav>
  );
}
