import React from "react";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function AppButton({ label, className, onClick, type }: AppButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-full p-3 shadow bg-amber-300 
        hover:cursor-pointer hover:bg-amber-100 transition-colors
        ${className ?? ""}
      `}
    >
      {label}
    </button>
  );
}
