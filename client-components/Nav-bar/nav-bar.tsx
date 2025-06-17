import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

interface navbarProps {
  children: React.ReactNode;
}

export default function NavBar({ children }: navbarProps) {
  return (
    <nav className="flex flex-col items-center p-1 shadow">
      <div className="flex flex-row justify-between w-350 items-center">
        <Image
          src={"/images/daisy-azyl-pos-Photoroom.png"}
          width={140}
          height={200}
          alt="daisy logo"
        />
        <div className="flex flex-row gap-10">{children}</div>
        <div
          className="
            flex gap-2 items-center shadow-lg p-3 rounded-xl 
            hover:cursor-pointer hover:translate-y-[-5px] transition-transform
          "
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Košík</span>
        </div>
      </div>
    </nav>
  );
}
