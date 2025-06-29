import Link from "next/link";

interface NavBarItemProps {
  href: string;
  title: string;
  children?: React.ReactNode;
}

export function NavBarItem({ href, title, children }: NavBarItemProps) {
  return (
    <div className="relative group">
      <Link href={href}>
        <span
          className={`
            relative bg-white
            font-medium text-lg p-1 pr-4 pl-4 shadow rounded-2xl
            group-hover:bg-gray-100
            ${children && "group-hover:rounded-bl-none group-hover:rounded-br-none"}
            after:content-['']
            after:absolute after:right-[-12px] after:bottom-[14px]
            after:w-6 after:h-6 after:bg-transparent after:shadow-[-8px_8px_#f3f4f6]
            after:rounded-bl-xl
            after:translate-x-1/2 after:translate-y-1/2
            after:opacity-0 ${children && "group-hover:after:opacity-100"}
            after:z-10
          `}
        >
          {title}
        </span>
      </Link>
      {children && (
        <div
          className="bg-gray-100
          absolute hidden group-hover:flex flex-col gap-2 p-4 shadow-md z-0 w-30 rounded-2xl rounded-tl-none 
          text-sm font-light transition-all overflow-y-hidden
          z-10
        "
        >
          {children}
        </div>
      )}
    </div>
  );
}
