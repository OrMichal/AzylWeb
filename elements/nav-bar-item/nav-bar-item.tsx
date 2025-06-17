import Link from "next/link";

interface NavBarItemProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

export function NavBarItem({ href, title, children }: NavBarItemProps) {
  return (
    <div className="relative group">
      <Link href={href}>
        <span className="font-bold text-xl hover:text-shadow-lg">{title}</span>
      </Link>
      <div className="absolute hidden group-hover:flex flex-col gap-1 border p-1 bg-white shadow-md z-10">
        {children}
      </div>
    </div>
  );
}
