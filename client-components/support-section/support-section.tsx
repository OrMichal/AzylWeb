import { AppButton } from "@/elements/app-button/app-button";
import { AppLink } from "@/elements/app-link/app-link";
import Image from "next/image";
import Link from "next/link";

export function SupportSection() {
  return (
    <section className="flex justify-between w-full pl-30 pr-30 p-10">
      <div className="w-100 h-100 relative">
        <Image
          src={"/images/support-us.jpg"}
          fill
          className="rounded-2xl"
          alt=""
        />
      </div>
      <div className="flex justify-between flex-col items-center">
        <div className="flex flex-col gap-15 p-7">
          <h2 className="text-4xl">Chtěli byste nás podpořit ?</h2>
          <span className="w-150 text-xl">
            Pokud se vám naše práce líbí, můžete nás podpořit. Vážíme si
            jakékoli podpory ať už finanční nebo v podobě daru.
          </span>
        </div>
        <AppLink label="Chci vás podpořit" href="/about" />
      </div>
    </section>
  );
}
