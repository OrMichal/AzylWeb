import { Schema, Document, models, model } from "mongoose";

export interface IFAQ extends Document {
  question: string;
  answer: string;
}

const FAQSchema = new Schema<IFAQ>(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { collection: "faq" },
);

export const FAQModel = models.faq || model<IFAQ>("faq", FAQSchema);
