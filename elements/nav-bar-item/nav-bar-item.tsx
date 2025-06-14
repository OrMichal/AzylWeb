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
      <div className="absolute flex flex-col gap-1 border p-1"> 
        { children } 
      </div>
    </div>
  );
}
