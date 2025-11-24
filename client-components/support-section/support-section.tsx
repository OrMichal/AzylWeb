import { AppLink } from "@/elements/app-link/app-link";
import Image from "next/image";

export function SupportSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center w-full px-5 py-5 md:px-20">
      <div className="relative w-full lg:w-auto flex justify-center">
        <Image
          src="/images/support-us.jpg"
          alt=""
          width={800}
          height={800}
          className="rounded-2xl object-cover w-full max-w-lg lg:max-w-[600px] h-auto"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>

      <div className="flex flex-col items-center lg:items-start gap-10 w-full lg:pl-10 mt-8 lg:mt-0">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-2xl md:text-4xl text-center lg:text-left font-bold">
            Chtěli byste nás podpořit?
          </h2>

          <span className="text-base md:text-xl text-center lg:text-left">
            Pokud se vám naše práce líbí, můžete nás podpořit.
            Vážíme si jakékoli podpory ať už finanční nebo v podobě daru.
          </span>
        </div>

        <div className="mt-6 ">
          <AppLink label="Chci vás podpořit" href="/about/support" />
        </div>
      </div>
    </section>
  );
}
