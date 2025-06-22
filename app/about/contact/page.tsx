import { ContactForm } from "@/client-components/contact-form/contact-form";
import { ContentDescription } from "@/client-components/content-description/content-description";

export default function ContactPage() {
  return (
    <div className="w-350 pt-10 pb-10">
      <ContentDescription heading="Kontakty">
        <span>
          Na této stránce máte možnost různých komunikačních kanálů, přes které
          se s námi kdykoli spojíte. Těšíme se na zavolání, zprávu přes
          kontaktní formulář i případné emailové či datové zprávy.
        </span>
      </ContentDescription>
      <ContactForm />
    </div>
  );
}
