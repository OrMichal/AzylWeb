"use client"

import { SessionProvider } from "next-auth/react";
import React from "react"

interface SessionWrapperProps {
  session: any,
  children: React.ReactNode
}

export function SessionWrapper({ children, session }: SessionWrapperProps) {
  return (
    <SessionProvider session={session}>
      { children }
    </SessionProvider>
  );
}
