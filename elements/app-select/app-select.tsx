import React from "react";

interface IAppSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

export function AppSelect({ children, className }: IAppSelectProps) {
  return (
    <select className={`${className} bg-white p-2 rounded-lg shadow`}>
      {children}
    </select>
  );
}
