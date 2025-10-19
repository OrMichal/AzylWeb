import { ContentDescription } from "@/client-components/content-description/content-description";
import { HeroSection } from "@/client-components/hero-section/hero-section";
import { SupportSection } from "@/client-components/support-section/support-section";
import { AppButton } from "@/elements/app-button/app-button";
import { AppLink } from "@/elements/app-link/app-link";
import { BasicInfoCard } from "@/elements/basic-info-card/basic-info-card";
import { ArticleList } from "@/server-components/Article-list/article-list";
import { StatisticsShowcase } from "@/server-components/statistcs-showcase/statistics-showcase";
import {
  faCommenting,
  faHeart,
  faKitMedical,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-20">
      <HeroSection />
      <div className="relative flex flex-col lg:flex-row md:flex-col sm:flex-col gap-3 w-full">
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
      <StatisticsShowcase />
      <SupportSection />
      <ContentDescription heading="Novinky z azylu">
        <ArticleList />
        <div className="w-full flex flex-col gap-0 pt-10 items-center relative">
          <AppLink label="zobrazit více" href="/articles" />
        </div>
      </ContentDescription>
    </div>
  );
}
