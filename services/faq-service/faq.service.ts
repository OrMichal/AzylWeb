import { MongoConnect } from "@/lib/mongoose/mongoose";
import { FAQModel, IFAQ } from "@/models/faq/faq.model";

export async function* GetAllFAQ(): AsyncGenerator<IFAQ> {
  await MongoConnect();
  const faqs: IFAQ[] | null = await FAQModel.find();

  if (!faqs) {
    throw new Error("Could not get frequently asked questions.");
  }

  for (const faq of faqs) {
    yield faq;
  }
}
