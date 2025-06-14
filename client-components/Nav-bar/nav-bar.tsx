import React from "react";
import Image from "next/image";

interface navbarProps {
  children: React.ReactNode;
}

export default function NavBar({ children }: navbarProps) {
  return (
    <nav className="flex flex-row items-center justify-between p-4 shadow">
      <div className="flex gap-1">
        <Image src="" />
        <span>Daisy a. s.</span>
      </div>
      <div className="flex flex-row gap-4">{children}</div>
      <p>košík</p>
    </nav>
  );
}
