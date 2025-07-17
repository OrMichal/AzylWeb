import { HeroSection } from "@/client-components/hero-section/hero-section";
import { BasicInfoCard } from "@/elements/basic-info-card/basic-info-card";
import {
  faCommenting,
  faHeart,
  faKitMedical,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center mb-10 gap-5">
      <HeroSection />
      <div className="relative flex gap-3 w-full">
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
    </div>
  );
}
