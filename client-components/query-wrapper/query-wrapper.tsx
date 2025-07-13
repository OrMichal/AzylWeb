"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

interface IQueryWrapperProps {
  children: React.ReactNode;
}

export function QueryWrapper({ children }: IQueryWrapperProps) {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
