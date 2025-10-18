"use client";
import { ContentDescriptionShadowed } from "@/elements/content-description-shadowed/content-description-shadowed";
import { useState } from "react";

export function AnimalsInQuarantineDescription() {
  const [descShown, setDescShown] = useState(false);

  return (
    <ContentDescriptionShadowed heading="Zvířátka v karanténě">
      <div className="flex flex-col items-start gap-3">
        <p className="text-xl font-light">
          Karanténa je specializované oddělení, které má za úkol zvířátka
          vyléčit. Když přijímáme nové nalezence, jsou často ve špatném
          zdravotním stavu. V karanténě je každé zvířátko odděleno tak, aby
          nedocházelo k šíření nákaz a probíhá důkladná léčba ve spolupráci s
          našimi veterináři.
        </p>
        <span
          onClick={() => {
            setDescShown(!descShown);
          }}
          className="hover:underline hover:cursor-pointer"
        >
          {descShown ? "číst méně" : "číst více"}
        </span>
        {descShown && (
          <p className="font-light text-xl">
            Během prvních několika týdnů zvířátku poskytneme vše potřebné -
            odčervení, odblešení, řeší se akutní zákroky (někdy je vyžadována
            operace), testy na smrtelné choroby apod. Až veterinář usoudí, že je
            zvířátko zdravé a nepředstavuje žádná rizika, je z karantény
            zvířátko přemístěna do domácího prostředí, kde začne proces
            socializace. Díky separaci nedochází k šíření chorob mezi zdravá
            zvířátka a tak má naše pomoc opravdu smysl. Karanténa není veřejně
            přístupná, protože musí splňovat přísné hygienické předpisy. Do
            karantény přijde vlastně úplně každé zvířátko, které do organizace
            přijímáme, protože i zdravé zvířátko na pohled nemusí být zdravé.
            Karanténa je tak nesmírně důležité zařízení, které chrání ostatní
            zdravá zvířátka.
          </p>
        )}
      </div>
    </ContentDescriptionShadowed>
  );
}
