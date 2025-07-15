import React from "react";

export function ButtonPlaceholder({
  className,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div
      className={`${className} w-70 h-10 animate-pulse bg-gray-400 rounded-full p-3`}
    ></div>
  );
}
