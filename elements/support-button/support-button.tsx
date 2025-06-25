import Link from "next/link";

interface SupportButtonProps {
  text: string;
  href: string;
}

export function SupportButton({ text, href }: SupportButtonProps) {
  return (
    <Link href={href}>
      <div
        className="
          border rounded-full pt-1 pb-1 p-4 shadow-md border-gray-300
          hover:bg-pink-500 hover:text-white transition-colors hover:shadow-xl
        "
      >
        <span className="font-bold">{text}</span>
      </div>
    </Link>
  );
}
