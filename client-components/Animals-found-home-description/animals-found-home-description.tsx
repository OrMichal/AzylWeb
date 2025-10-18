"use client";
import { ContentDescriptionShadowed } from "@/elements/content-description-shadowed/content-description-shadowed";

export function AnimalsFoundHomeDescription() {
  return (
    <ContentDescriptionShadowed heading="Zvířátka, která našla domov">
      <div className="flex flex-col items-start gap-3">
        <p className="text-xl font-light">
          Sekce plná úžasných příběhů se šťastným koncem. Není nic krásnějšího,
          než když zachráněné zvířátko najde milující domov. Noví majitelé
          pravidelně zasílají fotografie, jak se kočky mají a tak můžete
          sledovat celý jejich život.
        </p>
      </div>
    </ContentDescriptionShadowed>
  );
}
