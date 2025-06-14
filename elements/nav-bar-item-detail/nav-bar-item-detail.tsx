import React from "react";

interface NavBarItemDetailProps {
  children: React.ReactNode;
}

export function NavBarItemDetail({ children }: NavBarItemDetailProps) {
  return (
    <div className="hover:border-b-yellow-200 hover:border-b-4 hover:cursor-pointer">
      {children}
    </div>
  );
}
