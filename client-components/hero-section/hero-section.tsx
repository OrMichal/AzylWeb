import { AppLink } from "@/elements/app-link/app-link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-between w-full
      gap-10 md:gap-20 px-6 md:px-12 py-10 md:py-20"
    >
      {/* TEXT SECTION */}
      <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          Daisy z. s.
        </h1>

        <span className="text-lg sm:text-xl text-black">
          Poskytujeme azyl hendikepovaným, týraným, starým a nemocným pejskům a
          kočičkám 🐕🐈
        </span>

        <div className="mt-4 md:mt-6">
          <AppLink href="/about" label="Chci se dozvědět více" />
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[420px] lg:h-[500px]">
        <Image
          src="/images/hero_cat_image.jpg"
          alt="Kočka v azylu"
          fill
          priority
          className="object-cover rounded-xl shadow-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
