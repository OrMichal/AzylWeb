"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarItemProps {
  href: string;
  title: string;
  icon?: any;
}

export function NavBarItem({ href, title, icon }: NavBarItemProps) {
  const pathname = usePathname();
  return (
    <div className="relative group">
      <Link href={href} className="flex gap-1">
        <span
          className={`
            ${pathname == href ? "text-amber-300" : "bg-white group-hover:text-gray-300"}
            relative
            font-medium text-lg p-1 pr-4 pl-4
            
            flex gap-1 items-center
          `}
        >
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              color={`${pathname == href ? "amber-300" : "black"}`}
              className={`${pathname == href ? "" : "group-hover:text-gray-300"}`}
            />
          )}
          <span>{title}</span>
        </span>
      </Link>
    </div>
  );
}
