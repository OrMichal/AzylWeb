import React from "react";

interface IAppSummaryProps {
  title: string;
  children: React.ReactNode;
}

export function AppSummary({ title, children }: IAppSummaryProps) {
  return (
    <details className="w-full rounded-2xl shadow group">
      <summary
        className="font-medium text-xl p-5 rounded-tl-2xl rounded-tr-2xl transition-colors 
        hover:cursor-pointer group-open:bg-gray-100 select-none"
      >
        {title}
      </summary>
      <div className="flex flex-col gap-4 p-6 font-light text-lg">
        {children}
      </div>
    </details>
  );
}
