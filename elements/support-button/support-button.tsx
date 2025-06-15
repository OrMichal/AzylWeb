import Link from "next/link";

interface SupportButtonProps {
  text: string,
  href: string
}

export function SupportButton({ text, href }: SupportButtonProps) {
  return (
    <Link href={href}>
      <div 
        className="
          border rounded-lg pt-0.5 pb-0.5 p-2 shadow-md border-gray-300 
          hover:bg-pink-500 hover:text-white
        "
      >
        <span className="font-bold">{ text }</span>
      </div>
    </Link>
  );
}
