"use client";
import {
  faBars,
  faHome,
  faNewspaper,
  faOtter,
  faQuestionCircle,
  faShop,
  faUserGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { HamburgerMenuLink } from "../HamburgerMenuLink/hamburger-menu-link";
import { UserBox } from "../user-box/user-box";
import { HamburgerUserBox } from "../hamburger-user-box/hamburger-user-box";

export function HamburgerMenu() {
  const [menuVisible, setMenuVisibility] = useState(false);

  const closeMenu = () => setMenuVisibility(false);

  return (
    <div className="lg:hidden flex items-center">
      <button
        className="p-2 rounded hover:shadow transition hover:bg-amber-300"
        onClick={() => setMenuVisibility(true)}
      >
        <FontAwesomeIcon icon={faBars} className="text-2xl" />
      </button>

      {menuVisible && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-white/20 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeMenu}
          />

          <aside
            className="relative ml-auto w-64 sm:w-72 h-full bg-white shadow-2xl p-6 flex flex-col justify-between
              transform transition-transform duration-300 ease-out translate-x-0"
          >
            <div className="flex justify-end">
              <button
                className="p-2 rounded-lg bg-amber-300 hover:bg-red-500 hover:text-white transition"
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon={faXmark} className="text-2xl" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-6 font-light">
              <HamburgerMenuLink onClick={closeMenu} href="/">
                <FontAwesomeIcon icon={faHome} /> Domů
              </HamburgerMenuLink>
              <HamburgerMenuLink onClick={closeMenu} href="/about">
                <FontAwesomeIcon icon={faUserGroup} /> O nás
              </HamburgerMenuLink>
              <HamburgerMenuLink onClick={closeMenu} href="/articles">
                <FontAwesomeIcon icon={faNewspaper} /> Novinky
              </HamburgerMenuLink>
              <HamburgerMenuLink onClick={closeMenu} href="/animals">
                <FontAwesomeIcon icon={faOtter} /> Zvířátka
              </HamburgerMenuLink>
              <HamburgerMenuLink onClick={closeMenu} href="/faq">
                <FontAwesomeIcon icon={faQuestionCircle} /> Časté dotazy
              </HamburgerMenuLink>
              <HamburgerMenuLink onClick={closeMenu} href="/eshop">
                <FontAwesomeIcon icon={faShop} /> Eshop
              </HamburgerMenuLink>
            </nav>

            <div className="mt-6 border-t border-gray-200 pt-4">
              <HamburgerUserBox />
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
