import { ContentDescriptionPlaceholder } from "@/elements/placeholders/content-description-placeholder/content-description-placeholder";
import { FormPlaceholder } from "@/elements/placeholders/form-placeholder/form-placeholder";

export default function ContactLoading() {
  return (
    <div className="flex flex-col items-start">
      <ContentDescriptionPlaceholder />
      <FormPlaceholder />
    </div>
  );
}
