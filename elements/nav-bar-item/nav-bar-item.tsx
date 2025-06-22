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
        <span className="font-bold text-2xl hover:text-shadow-lg">{title}</span>
      </Link>
      {children && (
        <div
          className="
          absolute hidden group-hover:flex flex-col gap-2 p-4 bg-white shadow-md z-10 w-30
          text-sm font-light transition-all
        "
        >
          {children}
        </div>
      )}
    </div>
  );
}
