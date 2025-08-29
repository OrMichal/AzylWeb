import Link from "next/link";

interface IPageContentLink {
  href: string;
  children: React.ReactNode;
}

export function PageContentLink({ href, children }: IPageContentLink) {
  return (
    <Link href={href}>
      <div
        className="p-2 bg-zinc-200 text-black rounded-xl 
          hover:bg-zinc-300 hover:shadow transition-colors"
      >
        <span className="text-sm font-light">{children}</span>
      </div>
    </Link>
  );
}
