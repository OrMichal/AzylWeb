import React from "react";
import Image from "next/image";

interface navbarProps {
  children: React.ReactNode;
}

export default function NavBar({ children }: navbarProps) {
  return (
    <nav className="flex flex-col items-center p-1 shadow">
      <div className="flex flex-row justify-between w-350 items-center">
        <Image 
          src={"/images/daisy-azyl-pos-Photoroom.png"} 
          width={140} height={200}
          alt="daisy logo"
        />
        <div className="flex flex-row">{children}</div>
        <p>košík</p>
      </div>
    </nav>
  );
}
