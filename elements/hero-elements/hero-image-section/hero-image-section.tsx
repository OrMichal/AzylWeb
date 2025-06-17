import Image from "next/image";
import React from "react";

interface HeroImageSectionProps {
  children: React.ReactNode;
  src: string;
}

export function HeroImageSection({ children, src }: HeroImageSectionProps) {
  return (
    <section className="relative z-0 flex">
      <Image src={src} height={200} width={300} alt="Hero image" className="" />
      <div>{children}</div>
    </section>
  );
}
