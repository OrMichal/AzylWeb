import { IFAQDTO } from "@/interfaces/faq/IFaqDTO";
import { IFAQ } from "@/models/faq/faq.model";

export function GetFAQDTO(faq: IFAQ): IFAQDTO {
  const res: IFAQDTO = {
    question: faq.question,
    answer: faq.answer,
  };

  return res;
}
