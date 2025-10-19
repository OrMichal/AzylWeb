import { ContactForm } from "@/client-components/contact-form/contact-form";
import { ContentDescription } from "@/client-components/content-description/content-description";

export default function ContactPage() {
  return (
    <div className="pt-10 pb-10 flex flex-col gap-10 ">
      <ContentDescription heading="Kontakty">
        <span>
          Na této stránce máte možnost různých komunikačních kanálů, přes které
          se s námi kdykoli spojíte. Těšíme se na zavolání, zprávu přes
          kontaktní formulář i případné emailové či datové zprávy.
        </span>
      </ContentDescription>
      <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col w-full justify-center gap-4 w-full">
        <ContactForm />
        <ContentDescription heading="Průběh kontaktování">
          <span>
            Po vyplnění kontaktního formuláře vlevo a po kliknutí na tlačítko
            "Odeslat zprávu" dostaneve vaši zprávu prostřednictvím e-mailu. V
            případě, že by nastala jakákoliv chyba, napište nám na emailovou
            adresu: daisyazyl.support@gmail.com.
          </span>
        </ContentDescription>
      </div>
    </div>
  );
}
