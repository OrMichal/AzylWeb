import mongoose, { Schema, Document } from "mongoose";

export interface IAnimalType extends Document {
  type: string;
}

const AnimalTypeSchema = new Schema<IAnimalType>(
  {
    type: { type: String, required: true },
  },
  { collection: "animalTypes" },
);

export const AnimalTypeModel =
  mongoose.models.AnimalType ||
  mongoose.model<IAnimalType>("AnimalType", AnimalTypeSchema);
