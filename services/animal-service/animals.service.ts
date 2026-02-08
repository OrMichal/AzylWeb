import { MongoConnect } from "@/lib/mongoose/mongoose";
import { Animal, IAnimal } from "@/models/animal/animal";
import { AnimalTypeModel, IAnimalType } from "@/models/animalType/animalType";
import { queryParams } from "../core-service/core.service";
import { IAnimalGridFilters } from "@/server-components/animals-grid-filter/animals-grid-filter";

const ANIMALS_PER_PAGE = 10;

export async function GetAnimals(
  page: number,
  filters?: IAnimalGridFilters
): Promise<IAnimal[]> {
  const query: any = {};

  if (filters?.state) {
    query.state = filters.state;
  }

  if (filters?.animalType) {
    const id = await AnimalTypeModel.findOne({ type: filters?.animalType });
    query.animalType = id._id;
  }

  return Animal.find(query)
    .skip((page - 1) * ANIMALS_PER_PAGE)
    .limit(ANIMALS_PER_PAGE)
}

export async function GetAnimalsPages(filter?: Record<string, any>): Promise<number> {
  let query: Record<string, any> = { ...filter };

  const animType = await AnimalTypeModel.findOne({ type: filter?.animalType });
  query.animalType = animType?._id;

  const res = await Animal.find(query || {});

  return Math.ceil(res.length / ANIMALS_PER_PAGE);
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
  page: number,
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

  const animals: IAnimal[] = await Animal.find({ ...filter })
    .skip((page - 1) * ANIMALS_PER_PAGE)
    .limit(ANIMALS_PER_PAGE);
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
