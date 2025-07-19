import { AppLink } from "@/elements/app-link/app-link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex w-full  items-center justify-between">
      <div className="flex flex-col items-start gap-6 w-150">
        <h1 className="text-6xl font-medium">Daisy z. s.</h1>
        <span className="text-xl mt-15">
          Poskytujeme azyl hendikepovaným, týraným, starým a nemocným pejskům a
          kočičkám 🐕🐈
        </span>
        <AppLink href="/about" label="Chci se dozvědět více" />
      </div>
      <div className="relative w-120 h-140">
        <Image
          src="/images/hero_cat_image.jpg"
          fill
          className="rounded-4xl"
          alt=""
        />
      </div>
    </section>
  );
}
