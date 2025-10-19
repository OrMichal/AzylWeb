import { AppSummary } from "@/elements/app-summary/app-summary";
import { IFAQDTO } from "@/interfaces/faq/IFaqDTO";
import { IFAQ } from "@/models/faq/faq.model";
import { GetGeneratorArray } from "@/services/core-service/core.service";
import { GetAllFAQ } from "@/services/faq-service/faq.service";
import { GetFAQDTO } from "@/services/faq-service/faqDTO.service";

export async function FAQList() {
  const faqs = GetAllFAQ();
  const faqList: IFAQ[] = await GetGeneratorArray(faqs);
  const faqDTOList: IFAQDTO[] = faqList.map((x) => GetFAQDTO(x));

  return (
    <div className="flex flex-row flex-wrap gap-10">
      {faqDTOList.map((f) => (
        <AppSummary key={crypto.randomUUID()} title={f.question}>
          <span>{f.answer}</span>
        </AppSummary>
      ))}
    </div>
  );
}
