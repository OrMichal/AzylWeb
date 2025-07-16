import { Document, Schema, models, model } from "mongoose";

export interface IProductType extends Document {
  name: string;
}

const ProductTypeSchema = new Schema<IProductType>(
  {
    name: { type: String, required: true },
  },
  { collection: "productType" },
);

export const ProductTypeModel =
  models.productType || model<IProductType>("productType", ProductTypeSchema);
