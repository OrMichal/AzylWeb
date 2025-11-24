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
        shadow flex flex-col md:flex-row gap-6 md:gap-14 justify-center md:justify-start items-center 
        w-full p-6 md:p-8 bg-amber-300 rounded-3xl
      "
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-5xl text-white"
      />
      <div className="w-full text-center md:text-left text-white font-bold">
        {children}
      </div>
    </div>
  );
}
