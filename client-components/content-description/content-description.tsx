import React from "react";

interface ContentDescriptionProps {
  heading: string;
  children: React.ReactNode;
}

export function ContentDescription({
  heading,
  children,
}: ContentDescriptionProps) {
  return (
    <div className="w-full flex flex-col gap-3 items-start shadow p-3">
      <h3 className="text-2xl font-light">{heading}</h3>
      <div className="p-1 font-extralight">{children}</div>
    </div>
  );
}
