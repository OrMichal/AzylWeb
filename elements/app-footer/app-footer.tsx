"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faContactBook,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export function AppFooter() {
  return (
    <footer className="p-3 bg-black text-white flex justify-around ">
      <div className="flex flex-col gap-2">
        <span>Kontakt:</span>
        <div className="flex flex-col gap-3 *:hover:underline *:hover:text-blue-400">
          <Link
            target="_blank"
            href={"https://www.facebook.com/daisyazyl/?locale=cs_CZ"}
            className="flex items-center gap-2 text-white"
          >
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook: Daisy azyl z. s.</span>
          </Link>
          <span className="flex items-center gap-2 text-white">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email: daisyazyl@gmail.com</span>
          </span>
          <span className="flex items-center gap-2 text-white">
            <FontAwesomeIcon icon={faPhone} />
            <span>Telefonní číslo: 605 793 896</span>
          </span>
          <Link
            href={"/about/contact"}
            className="flex items-center gap-2 text-white"
          >
            <FontAwesomeIcon icon={faContactBook} />
            <span>Náš kontaktní formulář</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span>Mohlo by vás zajímat</span>
        <div className="flex flex-col p-2 gap-3 *:hover:underline *:hover:text-blue-400">
          <Link href={"/about"}>Jak nás můžete podpořit</Link>
          <Link href={"/about#howitworks"}>Jak probíhá adopce</Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span>Informace o nás</span>
        <div className="flex flex-col p-2 gap-3 *:hover:underline *:hover:text-blue-400">
          <Link href={"/about"}>Kdo jsme</Link>
          <Link href={"/about#howitworks"}>Jak to u nás funguje</Link>
        </div>
      </div>
    </footer>
  );
}
