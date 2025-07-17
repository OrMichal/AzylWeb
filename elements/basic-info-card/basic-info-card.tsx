import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface BasicInfoCardProps {
  children: React.ReactNode;
  icon: any;
}

export function BasicInfoCard({ children, icon }: BasicInfoCardProps) {
  return (
    <div
      className="
        shadow flex gap-14 justify-around items-center h-30 w-full p-8 bg-amber-600 rounded-4xl 
      "
    >
      <FontAwesomeIcon
        icon={icon}
        height={100}
        width={100}
        className="text-7xl text-white"
      />
      <div className="w-full text-white font-bold">{children}</div>
    </div>
  );
}
