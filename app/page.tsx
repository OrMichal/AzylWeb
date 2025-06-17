import { HeroImageSection } from "@/elements/hero-elements/hero-image-section/hero-image-section";

export default function Home() {
  return (
    <div className="w-350 flex flex-col items-center">
      <HeroImageSection src="/images/hero_cat_image.jpg">
        <div className="flex items-center justify-center w-100 px-6 py-16 backdrop-blur-sm">
          <div className="text-center text-black max-w-4xl">
            <h3 className="font-extrabold text-5xl sm:text-6xl mb-6 drop-shadow-lg">
              Daisy z. s.
            </h3>
            <p className="text-xl sm:text-2xl mb-4 leading-relaxed drop-shadow-md">
              Každý příběh si zaslouží šťastný konec – u nás v Daisy Azylu
              začíná nový život s nadějí a otevřeným srdcem.
            </p>
            <p className="text-lg italic">Přesvědčte se o tom sami.</p>
          </div>
        </div>
      </HeroImageSection>
    </div>
  );
}
