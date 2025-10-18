"use client";
import { ContentDescriptionShadowed } from "@/elements/content-description-shadowed/content-description-shadowed";

export function AnimalsLookingForHomeDescription() {
  return (
    <ContentDescriptionShadowed heading="Zvířátka, která hledají svůj domov">
      <div className="flex flex-col items-start gap-3">
        <p className="text-xl font-light">
          V této sekci najdete všechny zvířátka, která hledají nový milující
          domov. Všichni prošli karanténnou - jsou zdravá, testovaná na přenosné
          choroby, odčervená, odblešená, očkované atd.{" "}
        </p>
      </div>
    </ContentDescriptionShadowed>
  );
}
