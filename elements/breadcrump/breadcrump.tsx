"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Breadcrumbs({
  className,
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className={className}>
      <ol className="flex gap-2 text-md text-gray-600">
        <li>
          <Link href="/" className="hover:underline text-gray-800">
            Domů
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");

          const label = decodeURIComponent(segment)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <li key={href} className="flex items-center gap-2">
              <span> {">"} </span>
              <Link href={href} className="hover:underline text-gray-800">
                {label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
