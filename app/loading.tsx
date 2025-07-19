import { ArticlePlaceholder } from "@/elements/article-placeholder/article-placeholder";
import { ButtonPlaceholder } from "@/elements/placeholders/button-placeholder/button-placeholder";
import { ContentDescriptionPlaceholder } from "@/elements/placeholders/content-description-placeholder/content-description-placeholder";
import { FlexBoxPlaceholder } from "@/elements/placeholders/flex-box-placeholder/flex-box-placeholder";

export default function HomeLoading() {
  return (
    <div className="flex flex-col items-center gap-3">
      <ContentDescriptionPlaceholder />
      <FlexBoxPlaceholder vertical={false} />
      <ButtonPlaceholder />
      <ArticlePlaceholder />
      <ArticlePlaceholder />
      <ArticlePlaceholder />
    </div>
  );
}
