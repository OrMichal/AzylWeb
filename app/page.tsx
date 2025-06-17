import { BasicInfoCard } from "@/elements/basic-info-card/basic-info-card";
import { HeroImageSection } from "@/elements/hero-elements/hero-image-section/hero-image-section";
import {
  faCommenting,
  faHeart,
  faKitMedical,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-350 flex flex-col items-center mt-10 mb-10 gap-5">
      <Link href={"about"}>
        <div className="p-4 shadow-xl w-250 hover:shadow-2xl transition-shadow">
          <HeroImageSection src="/images/hero_cat_image.jpg">
            <div className="flex items-center justify-center w-full px-6 py-16 backdrop-blur-sm">
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
      </Link>
      <div className="relative flex gap-3 w-350">
        <BasicInfoCard icon={faHeart}>
          <span className="text-wrap">
            O zvířátka se staráme s láskou, jakou si zaslouží.
          </span>
        </BasicInfoCard>
        <BasicInfoCard icon={faKitMedical}>
          <span className="text-wrap">
            Mnoho zvířátkům jsme již zachránili život a dali nový domov.
          </span>
        </BasicInfoCard>
        <BasicInfoCard icon={faCommenting}>
          <span className="text-wrap">Jsme otevření jakékoliv komunikaci.</span>
        </BasicInfoCard>
      </div>

      <Link
        href={"about"}
        className="
          p-4 mt-5 mb-5 rounded-xl shadow w-80 flex flex-col items-center bg-amber-100
          hover:bg-amber-300 transition-colors hover:font-bold hover:cursor-pointer
        "
      >
        <span>Poznejte nás lépe</span>
      </Link>
    </div>
  );
}
