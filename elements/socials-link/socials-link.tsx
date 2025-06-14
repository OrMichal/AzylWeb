import Link from "next/link";

interface SocialsLinkProps {
  src: string,
  children: React.ReactNode
}

export function SocialsLink({ src, children }: SocialsLinkProps) {
  return (
    <a 
      target="_blank" 
      href={src} 
      className="
        bg-amber-300 p-1 w-7 h-7 flex justify-center rounded-xl
        hover:bg-amber-400
      "
    >
      { children }
    </a>
  );
}
