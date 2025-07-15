import React from "react";

interface IAppSelectProps {
  title: string;
  children: React.ReactNode;
}

export function AppRollDownMenu({ title, children }: IAppSelectProps) {
  return (
    <div className="flex items-center  gap-2 shadow rounded-xl p-1 bg-amber-300">
      <span>{title}:</span>
      <div>{children}</div>
    </div>
  );
}
