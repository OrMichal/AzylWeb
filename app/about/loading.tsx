import { ContentDescriptionPlaceholder } from "@/elements/placeholders/content-description-placeholder/content-description-placeholder";
import { GridPlaceholder } from "@/elements/placeholders/grid-placeholder/grid-placeholder";

export default function AboutLoading() {
  return (
    <div className="flex flex-col items-center">
      <p>Načítám informace o nás...</p>
      <ContentDescriptionPlaceholder />
      <ContentDescriptionPlaceholder />
      <ContentDescriptionPlaceholder />
      <ContentDescriptionPlaceholder />
      <GridPlaceholder />
    </div>
  );
}
