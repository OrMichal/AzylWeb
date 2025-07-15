import { IAnimalDTO } from "@/interfaces/animal/IAnimalDTO";
import { IAnimal } from "@/models/animal/animal";
import { AnimalTypeModel, IAnimalType } from "@/models/animalType/animalType";
import { MongoConnect } from "@/lib/mongoose/mongoose";
import { IAnimalTypeDTO } from "@/interfaces/animal/IAnimalTypeDTO";

export async function GetAnimalDTO(animal: IAnimal): Promise<IAnimalDTO> {
  await MongoConnect();

  const animalType: IAnimalType | null = await AnimalTypeModel.findOne({
    _id: animal.animalType,
  });
  console.log(animal.animalType);
  if (!animalType) {
    throw new Error("Could not get animal type");
  }

  let res: IAnimalDTO = {
    name: animal.name,
    age: animal.age,
    state: animal.state,
    imageGuid: animal.imageGuid,
    animalType: animalType.type,
    description: animal.description,
    history: animal.history,
  };

  return res;
}

export async function GetAnimalTypeDTO(
  type: IAnimalType,
): Promise<IAnimalTypeDTO> {
  await MongoConnect();
  const animalType: IAnimalType | null = await AnimalTypeModel.findOne({
    _id: type._id,
  });

  if (!animalType) {
    throw new Error("Could not get animal type");
  }

  const res: IAnimalTypeDTO = {
    type: animalType.type,
  };

  return res;
}
