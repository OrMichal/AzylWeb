import { ContentDescriptionShadowed } from "@/elements/content-description-shadowed/content-description-shadowed";
import { CompanyEmployees } from "@/server-components/company-employees/company-employees";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center gap-12 p-8 ">
      <section className="w-full p-12 bg-amber-400 text-white flex flex-col gap-4 items-center rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold">
          Chceme umožnit každému zvířátku, které nemělo štěstí v životě, novou
          šanci
        </h1>
        <p className="text-lg italic">
          Daisy z. s. – váš azyl pro pejsky a kočičky
        </p>
      </section>

      <ContentDescriptionShadowed heading="Kdo jsme?" id="whoweare">
        <p className="text-lg font-extralight">
          Jsme skupina vášnivých milovníků zvířat, kteří věří, že každý tvor si
          zaslouží lásku, péči a bezpečný domov. Zaměřujeme se především na
          pejsky a kočičky, kteří prošli těžkými chvílemi – byli týraní,
          opuštění, hendikepovaní nebo nemocní. Náš azyl je místem, kde jim
          dáváme druhou šanci, pomáháme s rehabilitací a hledáme pro ně nové
          rodiny, které je budou milovat tak, jak si zaslouží.
        </p>
      </ContentDescriptionShadowed>

      <ContentDescriptionShadowed
        heading="Jak to u nás funguje?"
        id="jaktofunguje"
      >
        <p className="text-lg font-extralight">
          V našem azylu pečujeme o zvířata s maximální péčí a ohledem na jejich
          zdravotní i psychický stav. Každý nový příchod projde veterinární
          kontrolou, rehabilitací a individuálním přístupem. Naši dobrovolníci a
          zaměstnanci jim poskytují nejen zdravotní péči, ale také spoustu lásky
          a trpělivosti. Postupně zvířátka připravujeme na adopci a snažíme se
          najít ideální nový domov, kde budou mít šanci na šťastný život.
        </p>
      </ContentDescriptionShadowed>

      <section className="flex flex-col gap-6 w-full ">
        <h2 className="text-3xl font-semibold">Lidé v azylu</h2>
        <CompanyEmployees />
      </section>
    </div>
  );
}
