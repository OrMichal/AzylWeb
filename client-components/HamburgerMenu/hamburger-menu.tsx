"use client";
import "./hamburger-menu.css";
import {
  faBars,
  faHome,
  faMarker,
  faNewspaper,
  faOtter,
  faQuestionCircle,
  faShop,
  faUserGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { HamburgerMenuLink } from "../HamburgerMenuLink/hamburger-menu-link";

export function HamburgerMenu() {
  const [menuVisible, setMenuVisibility] = useState(false);

  const closeMenu = () => setMenuVisibility(false);

  return (
    <div className="lg:hidden md:flex sm:flex items-center">
      <button
        className="hamburger p-2 
        hover:shadow rounded
        "
        onClick={() => {
          setMenuVisibility(true);
        }}
      >
        <FontAwesomeIcon icon={faBars} className="text-2xl" />
      </button>
      {menuVisible && (
        <div className="hamburger-menu-container">
          <aside className="hamburger-menu shadow bg-white">
            <div
              className="w-full flex justify-between items-center p-2
                bg-amber-300
              "
            >
              <button
                className="self-end rounded-lg p-2 bg-white
                hover:shadow-lg hover:cursor-pointer hover:bg-red-500 hover:text-white"
                onClick={() => {
                  setMenuVisibility(false);
                }}
              >
                <FontAwesomeIcon icon={faXmark} className="text-3xl" />
              </button>
            </div>
            <div className="p-4 flex flex-col justify-between h-full w-full font-light">
              <section className="flex flex-col gap-2 w-full">
                <HamburgerMenuLink
                  onClick={() => {
                    closeMenu();
                  }}
                  href="/"
                >
                  <FontAwesomeIcon icon={faHome} />
                  Domů
                </HamburgerMenuLink>
                <HamburgerMenuLink
                  onClick={() => {
                    closeMenu();
                  }}
                  href={"/about"}
                >
                  <FontAwesomeIcon icon={faUserGroup} />O nás
                </HamburgerMenuLink>
                <HamburgerMenuLink
                  onClick={() => {
                    closeMenu();
                  }}
                  href={"/articles"}
                >
                  <FontAwesomeIcon icon={faNewspaper} />
                  Novinky
                </HamburgerMenuLink>
                <HamburgerMenuLink
                  onClick={() => {
                    closeMenu();
                  }}
                  href={"/animals"}
                >
                  <FontAwesomeIcon icon={faOtter} />
                  Zvířátka
                </HamburgerMenuLink>
                <HamburgerMenuLink
                  onClick={() => {
                    closeMenu();
                  }}
                  href={"/faq"}
                >
                  <FontAwesomeIcon icon={faQuestionCircle} />
                  Časté dotazy
                </HamburgerMenuLink>
                <HamburgerMenuLink
                  onClick={() => {
                    closeMenu();
                  }}
                  href={"/eshop"}
                >
                  <FontAwesomeIcon icon={faShop} />
                  Eshop
                </HamburgerMenuLink>
              </section>
              <section className="flex flex-col gap-2 w-full">
                <HamburgerMenuLink
                  onClick={() => {
                    closeMenu();
                  }}
                  href={"/account"}
                >
                  Můj účet
                </HamburgerMenuLink>
              </section>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
