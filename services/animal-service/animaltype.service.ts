import { MongoConnect } from "@/lib/mongoose/mongoose";
import { AnimalTypeModel, IAnimalType } from "@/models/animalType/animalType";

export async function GetAnimalTypes(): Promise<IAnimalType[]> {
  await MongoConnect();
  const types: IAnimalType[] | null = await AnimalTypeModel.find();

  if (!types) {
    throw new Error("could not get animal types");
  }

  return types;
}
