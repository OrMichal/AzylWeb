"use client";

import React from "react";

interface AppFooterProps {
  children: React.ReactNode;
}

export function AppFooter({ children }: AppFooterProps) {
  return (
    <footer className="p-3 bg-black text-white flex justify-around ">
      {children}
    </footer>
  );
}
