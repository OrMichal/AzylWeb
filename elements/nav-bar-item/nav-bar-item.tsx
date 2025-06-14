import Link from "next/link";

interface NavBarItemProps {
  href: string,
  title: string,
  children: React.ReactNode
}

export function NavBarItem({ href, title, children }: NavBarItemProps) {
  return (
    <div className="">
      <Link href={href}>
        <span>{title}</span>
      </Link>
      <div>
        { children }
      </div>
    </div>
  );
}
