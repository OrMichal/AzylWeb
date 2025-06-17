"use client"

import React from "react"

interface AppFooterProps {
  children: React.ReactNode
}

export function AppFooter({ children }: AppFooterProps) {
  return (
    <footer  
      className="p-3 bg-amber-400 flex flex-col items-center "
    >
      <div className="flex justify-between w-350">
        { children }
      </div>
    </footer>
  );
}
