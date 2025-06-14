import React from "react";

interface navbarProps {
  children: React.ReactNode;
}

export default function NavBar({ children }: navbarProps) {
  return (
    <nav className="flex flex-row items-center justify-between p-4">
      <h2 className="">Daisy a. s. </h2>
      <div className="flex flex-row gap-4">{children}</div>
      <p>účet</p>
    </nav>
  );
}
