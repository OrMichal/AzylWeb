import Link from "next/link";

interface IHamburgerMenuLinkProps {
  children: React.ReactNode;
  href: string;
  onClick: any;
}

export function HamburgerMenuLink({
  onClick,
  href,
  children,
}: IHamburgerMenuLinkProps) {
  return (
    <Link href={href} onClick={onClick}>
      <div
        className="w-full flex items-center gap-2 rounded-xl p-3 shadow
        hover:shadow-lg text-xl
      "
      >
        {children}
      </div>
    </Link>
  );
}
