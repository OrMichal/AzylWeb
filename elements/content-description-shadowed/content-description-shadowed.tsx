import React from "react";

interface ContentDescriptionProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  heading: string;
  children: React.ReactNode;
}

export function ContentDescriptionShadowed({
  heading,
  children,
}: ContentDescriptionProps) {
  return (
    <div className="flex flex-col gap-4 items-left w-full">
      <span className="text-3xl">{heading}</span>
      <div className="p-8 shadow rounded-xl w-full">{children}</div>
    </div>
  );
}
