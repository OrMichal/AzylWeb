import React from "react";
import Link from "next/link";
import { NavBarItem } from "@/elements/nav-bar-item/nav-bar-item";
import { UserBox } from "../user-box/user-box";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import {
  faDog,
  faNewspaper,
  faOtter,
  faPeopleGroup,
  faQuestionCircle,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { HamburgerMenu } from "../HamburgerMenu/hamburger-menu";

export default function NavBar() {
  return (
    <nav className="flex flex-col items-center p-2 shadow">
      <div
        className="flex flex-row justify-between items-center
        sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] w-full
        "
      >
        <div className="flex gap-5">
          <HamburgerMenu />
          <Link href={"/"}>
            <span className="text-4xl font-light">Daisy z. s.</span>
          </Link>
        </div>
        <div
          className={`flex hidden  justify-evenly lg:flex md:hidden sm:hidden`}
        >
          <NavBarItem title="Domů" icon={faHouse} href="/" />
          <NavBarItem title="O nás" icon={faPeopleGroup} href="/about" />
          <NavBarItem title="Novinky" icon={faNewspaper} href="/articles" />
          <NavBarItem title="Zvířátka" icon={faOtter} href="/animals" />
          <NavBarItem
            title="Časté dotazy"
            icon={faQuestionCircle}
            href="/faq"
          />
          <NavBarItem title="E-shop" icon={faShop} href="/eshop"></NavBarItem>
        </div>
        <div className="flex gap-10 items-center max-sm:hidden">
          <UserBox />
        </div>
      </div>
    </nav>
  );
}
