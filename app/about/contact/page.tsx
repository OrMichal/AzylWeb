import { ContactForm } from "@/client-components/contact-form/contact-form";
import { ContentDescription } from "@/client-components/content-description/content-description";

export default function ContactPage() {
  return (
    <div className="w-350 pt-10 pb-10 flex flex-col gap-10 ">
      <ContentDescription heading="Kontakty">
        <span>
          Na této stránce máte možnost různých komunikačních kanálů, přes které
          se s námi kdykoli spojíte. Těšíme se na zavolání, zprávu přes
          kontaktní formulář i případné emailové či datové zprávy.
        </span>
      </ContentDescription>
      <div className="flex w-full justify-center">
        <ContactForm />
      </div>
      <ContentDescription heading="Průbeh kontaktování">
        <span>
          Po kliknutí na tlačítko "Odeslat zprávu" vám i nám přijde e-mail o
          přijaté zprávě a my se poté můžeme případně k vaší zprávě vyjádřit.
        </span>
      </ContentDescription>
    </div>
  );
}
