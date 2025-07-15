import { ContentDescriptionShadowed } from "@/elements/content-description-shadowed/content-description-shadowed";
import { ContentDescriptionPlaceholder } from "@/elements/placeholders/content-description-placeholder/content-description-placeholder";
import { CompanyEmployees } from "@/server-components/company-employees/company-employees";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center gap-12 p-8">
      <div className="w-350 p-12 bg-amber-400 text-white flex-col flex gap-3 items-center rounded-2xl shadow-lg">
        <span className="text-2xl font-semibold">
          Cheme umožnit každému zvířátku, které moc štěstí v životě nemělo,
          novou šanci na život
        </span>
        <span className="text-sm">Daisy z. s.</span>
      </div>

      <ContentDescriptionShadowed heading="Kdo jsme?" id="whoweare">
        <span>
          Jsme velci milovníci všech zvířátek, hlavně tedy pejsků a kočiček.
          Bohužel né každému zvířátku se dostane dostatečné péče a od toho jsme
          tady my.
        </span>
      </ContentDescriptionShadowed>

      <ContentDescriptionShadowed
        heading="Jak to u nás funguje?"
        id="jaktofunguje"
      >
        <span>Na doplnění této části se stále pracuje -Alan ze sklepa :)</span>
      </ContentDescriptionShadowed>

      <div className="flex flex-col gap-4 items-left w-full">
        <span className="text-3xl font-semibold">Lidé v azylu</span>
        <CompanyEmployees />
      </div>
    </div>
  );
}
