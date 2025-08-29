import { ContentDescription } from "@/client-components/content-description/content-description";
import { PageContent } from "@/elements/page-content/page-content";
import { PageContentLink } from "@/elements/page-content/page-content-link";

export default function SupportPage() {
  return (
    <main className="flex flex-col gap-10 items-center">
      <PageContent>
        <>
          <PageContentLink href={"/about/support#intro"}>Úvod</PageContentLink>
          <PageContentLink href={"/about/support#howtosupport"}>
            Jak nás můžete podpořit?
          </PageContentLink>
          <PageContentLink href={"/about/support#financial"}>
            Finanční podpora
          </PageContentLink>
          <PageContentLink href={"/about/support#material"}>
            Materiální pomoc
          </PageContentLink>
          <PageContentLink href={"/about/support#adoption"}>
            Adopce na dálku
          </PageContentLink>
          <PageContentLink href={"/about/support#volunteering"}>
            Dobrovolnictví
          </PageContentLink>
          <PageContentLink href={"/about/support#partners"}>
            Firemní spolupráce
          </PageContentLink>
        </>
      </PageContent>

      <section id="intro" className="w-full">
        <ContentDescription heading="Úvod">
          <div className="flex flex-col gap-2">
            <span>
              Naše práce by nebyla možná bez pomoci našich podporovatelů. Díky
              vám můžeme poskytovat péči zvířatům, která potřebují nový domov a
              bezpečné prostředí.
            </span>
            <span>
              Každá forma podpory – ať už finanční, materiální nebo osobní – nám
              pomáhá měnit životy k lepšímu.
            </span>
          </div>
        </ContentDescription>
      </section>

      <section id="howtosupport" className="w-full">
        <ContentDescription heading="Jak nás můžete podpořit?">
          <div className="flex flex-col gap-2">
            <span>
              Podpořit nás můžete mnoha způsoby. Níže najdete přehled možností,
              jak se zapojit a pomoci našim svěřencům.
            </span>
          </div>
        </ContentDescription>
      </section>

      <section id="financial" className="w-full">
        <ContentDescription heading="Finanční podpora">
          <div className="flex flex-col gap-2">
            <span>
              Finanční příspěvky nám umožňují zajistit veterinární péči, krmivo
              a potřebné vybavení.
            </span>
            <span>
              Můžete přispět jednorázově nebo si nastavit trvalý příkaz a stát
              se naším pravidelným podporovatelem.
            </span>
            <span className="font-semibold">Číslo účtu: 123456789/0100</span>
            <span className="italic">QR kód pro platbu naleznete zde.</span>
          </div>
        </ContentDescription>
      </section>

      <section id="material" className="w-full">
        <ContentDescription heading="Materiální pomoc">
          <div className="flex flex-col gap-2">
            <span>
              Uvítáme také dary ve formě krmiva, dek, hraček nebo čisticích
              prostředků.
            </span>
            <span>
              Aktuálně nejvíce potřebujeme: kvalitní granule pro psy a kočky,
              deky, stelivo a hygienické prostředky.
            </span>
          </div>
        </ContentDescription>
      </section>

      <section id="adoption" className="w-full">
        <ContentDescription heading="Adopce na dálku">
          <div className="flex flex-col gap-2">
            <span>
              Pokud nemůžete zvíře adoptovat domů, můžete se zapojit formou
              adopce na dálku.
            </span>
            <span>
              Vyberete si konkrétního mazlíčka a přispíváte na jeho péči. O jeho
              stavu vás budeme pravidelně informovat.
            </span>
          </div>
        </ContentDescription>
      </section>

      <section id="volunteering" className="w-full">
        <ContentDescription heading="Dobrovolnictví">
          <div className="flex flex-col gap-2">
            <span>
              Přijímáme pomoc dobrovolníků, kteří chtějí věnovat svůj čas přímo
              u nás v azylu.
            </span>
            <span>
              Můžete pomoci s venčením, údržbou prostor, péčí o zvířata nebo s
              organizací akcí.
            </span>
          </div>
        </ContentDescription>
      </section>

      <section id="partners" className="w-full">
        <ContentDescription heading="Firemní spolupráce">
          <div className="flex flex-col gap-2">
            <span>
              Nabízíme možnost spolupráce s firmami, které chtějí podpořit naši
              činnost.
            </span>
            <span>
              Společně můžeme připravit partnerství, které pomůže zvířatům a
              zároveň podpoří dobré jméno vaší společnosti.
            </span>
            <span>
              Pokud máte zájem o spolupráci, kontaktujte nás na{" "}
              <a
                href="mailto:spoluprace@azyl.cz"
                className="text-blue-600 underline"
              >
                spoluprace@azyl.cz
              </a>
            </span>
          </div>
        </ContentDescription>
      </section>
    </main>
  );
}
