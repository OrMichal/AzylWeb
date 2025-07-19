import Link from "next/link";

interface IAppLinkProps {
  href: string;
  label: string;
}

export function AppLink({ label, href }: IAppLinkProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-4 self-center mt-10 text-xl group bg-gray-300 p-3 rounded-2xl w-80
          hover:shadow-lg hover:bg-gray-200
          "
    >
      <span className="font-light transition-shadow">{label}</span>
    </Link>
  );
}
