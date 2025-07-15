import mongoose, { Schema, Types, Document } from "mongoose";

export interface IAnimal extends Document {
  name: string;
  state: string;
  age: number;
  animalType: Types.ObjectId;
  imageGuid: string;
  description: string;
  history: string;
}

const AnimalSchema = new Schema<IAnimal>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  state: { type: String, required: true },
  animalType: {
    type: Schema.Types.ObjectId,
    ref: "animalTypes",
    required: true,
  },
  imageGuid: { type: String, required: true },
  description: { type: String, required: true },
  history: { type: String, required: true },
});

export const Animal =
  mongoose.models.animals || mongoose.model<IAnimal>("animals", AnimalSchema);
