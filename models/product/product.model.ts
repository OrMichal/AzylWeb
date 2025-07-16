import { Document, models, model, Schema, Types } from "mongoose";

export interface IProduct extends Document {
  productType: Types.ObjectId;
  animalTargetType: Types.ObjectId;
  name: string;
  originalPrice: number;
  salePrice?: number;
  weight: string;
  description: string;
}

const ProductSchema = new Schema<IProduct>(
  {
    productType: { ref: "productType", required: true },
    animalTargetType: { ref: "animalTypes", required: true },
    name: { type: String, required: true },
    originalPrice: { type: Number, required: true },
    salePrice: { type: Number },
    weight: { type: String, required: true },
    description: { type: String },
  },
  { collection: "product" },
);

export const ProductModel =
  models.product || model<IProduct>("product", ProductSchema);
