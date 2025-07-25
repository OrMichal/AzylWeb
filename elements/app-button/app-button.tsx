import React from "react";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function AppButton({ label, className, onClick, type }: AppButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={` rounded-2xl p-3 shadow bg-amber-300 
        hover:cursor-pointer hover:bg-amber-200 transition-colors
        ${className ?? ""}
      `}
    >
      {label}
    </button>
  );
}
