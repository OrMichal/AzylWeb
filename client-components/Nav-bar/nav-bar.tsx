import React from "react";
import Image from "next/image";

interface navbarProps {
  children: React.ReactNode;
}

export default function NavBar({ children }: navbarProps) {
  return (
    <nav className="flex flex-row items-center justify-between p-1 shadow">
      <Image 
        src={"/images/daisy-azyl-pos-Photoroom.png"} 
        width={140} height={200}
        alt="daisy logo"
      />
      <div className="flex flex-row">{children}</div>
      <p>košík</p>
    </nav>
  );
}
