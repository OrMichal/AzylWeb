import { AppButton } from "@/elements/app-button/app-button";
import { AppLink } from "@/elements/app-link/app-link";
import Image from "next/image";
import Link from "next/link";

export function SupportSection() {
  return (
    <section className="flex lg:flex-row md:flex-col sm:flex-col justify-between w-full pl-30 pr-30 p-10">
      <div className="relative">
        <Image
          src={"/images/support-us.jpg"}
          className="rounded-2xl object-cover"
          alt=""
          width={800}
          height={800}
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>
      <div className="flex justify-between flex-col items-center">
        <div className="flex flex-col gap-15 p-7">
          <h2 className="text-4xl">Chtěli byste nás podpořit ?</h2>
          <span className="w-120 text-xl">
            Pokud se vám naše práce líbí, můžete nás podpořit. Vážíme si
            jakékoli podpory ať už finanční nebo v podobě daru.
          </span>
        </div>
        <AppLink label="Chci vás podpořit" href="/about/support" />
      </div>
    </section>
  );
}
