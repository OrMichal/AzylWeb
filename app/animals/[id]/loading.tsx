import { ArticlePlaceholder } from "@/elements/article-placeholder/article-placeholder";
import { ContentDescriptionPlaceholder } from "@/elements/placeholders/content-description-placeholder/content-description-placeholder";

export default function AnimalLoading() {
  return (
    <div className="flex flex-col items-center">
      <ContentDescriptionPlaceholder />
      <ArticlePlaceholder />
      <ArticlePlaceholder />
    </div>
  );
}
