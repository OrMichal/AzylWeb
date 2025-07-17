import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="flex w-full pl-30 pr-30 m-10 items-center justify-between">
      <div className="flex flex-col items-start gap-6 w-150">
        <h1 className="text-6xl font-medium">Daisy z. s.</h1>
        <span className="text-xl mt-15">
          Poskytujeme azyl hendikepovaným, týraným, starým a nemocným pejskům a
          kočičkám 🐕🐈
        </span>
        <Link
          href="/about"
          className="flex flex-col items-center gap-4 self-center mt-10 text-xl group bg-gray-300 p-3 rounded-2xl w-80
          hover:shadow-lg hover:bg-gray-200
          "
        >
          <span className="font-light transition-shadow">
            Poznejte nás lépe
          </span>
        </Link>
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
