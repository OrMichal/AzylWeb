import { model, models, Document, Schema } from "mongoose";

export interface IArticle extends Document {
  heading: string;
  description: string;
  imageGuid: string;
  content: string;
  createdAt: string;
  index: number;
}

const articleSchema = new Schema<IArticle>(
  {
    heading: { type: String, required: true },
    description: { type: String, required: true },
    imageGuid: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: String, required: true },
    index: { type: Number, required: true },
  },
  { collection: "articles" },
);

export const ArticleModel =
  models.articles || model<IArticle>("articles", articleSchema);
