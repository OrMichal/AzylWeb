import { MongoConnect } from "@/lib/mongoose/mongoose";
import { Animal, IAnimal } from "@/models/animal/animal";
import { AnimalTypeModel, IAnimalType } from "@/models/animalType/animalType";
import { queryParams } from "../core-service/core.service";

export async function GetAllAnimals(): Promise<IAnimal[]> {
  await MongoConnect();
  const animals: IAnimal[] = await Animal.find();
  if (!animals) {
    throw new Error("Animals could not be found");
  }

  return animals;
}

export async function GetAnimalsByType(typeName: string): Promise<IAnimal[]> {
  await MongoConnect();
  const type: IAnimalType | null = await AnimalTypeModel.findOne({
    type: typeName,
  });

  if (!type) {
    throw new Error("Animal type could not be found");
  }

  const animals: IAnimal[] = await Animal.find({ animalType: type });
  if (!animals) {
    throw new Error("Animals could not be found");
  }

  return animals;
}

export async function GetFilteredAnimals(
  query?: queryParams,
): Promise<IAnimal[]> {
  await MongoConnect();
  const filter: Record<string, any> = {};

  let animalState = query?.animalState;
  let animalGender = query?.animalGender;

  if (animalState) {
    filter.state =
      animalState == "lookingForHome"
        ? "hledá domov"
        : animalState == "foundHome"
          ? "našel domov"
          : animalState == "quarantine"
            ? "karanténa"
            : "leftUs";
  }

  if (animalGender) {
    filter.gender = animalGender == "male" ? 1 : 0;
  }

  console.log(`animalState: ${animalState}, animalGender: ${animalGender}`);

  const animals: IAnimal[] = await Animal.find<IAnimal>({ ...filter });
  return animals;
}

export async function* GetAnimalsByState(
  state: string,
  count?: number,
): AsyncGenerator<IAnimal> {
  let num: number = 0;
  for await (const animal of Animal.find<IAnimal>({ state: state })) {
    if (num == count && num) return;

    yield animal;
    num++;
  }
}

export async function GetAnimalById(id: string): Promise<IAnimal> {
  await MongoConnect();
  const anim: IAnimal | null = await Animal.findOne({ _id: id });

  if (!anim) {
    throw new Error("Could not find animal");
  }

  return anim;
}
