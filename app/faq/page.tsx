import { ContentDescription } from "@/client-components/content-description/content-description";
import { AppSummary } from "@/elements/app-summary/app-summary";
import { FAQList } from "@/server-components/faq-list/faq-list";
import Link from "next/link";

export default function FAQ() {
  return (
    <div className="flex flex-col gap-10 pt-10 pb-10">
      <FAQList />
      <ContentDescription heading="Nanešli jste zde váš problém?">
        <span>
          Pokud vám ani jedna z těchto rad a vysvětlení nepomohla, neváhejte nás
          kontaktovat prostřednictvím e-mailu: daisyazyl@seznam.cz nebo
          telefonicky na čísle: 111 222 333. Případně nám můžete napsat
          prostřednictvím našeho{" "}
          <Link
            href={"/about/contact"}
            className="text-blue-700 hover:underline"
          >
            webového kontaktního formuláře
          </Link>{" "}
          a my vám velmi rádi pomůžeme.
        </span>
      </ContentDescription>
    </div>
  );
}
