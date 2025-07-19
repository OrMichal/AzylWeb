import { IAnimal } from "@/models/animal/animal";
import { GetAnimalsByState } from "@/services/animal-service/animals.service";
import { GetGeneratorArray } from "@/services/core-service/core.service";
import { AnimalCard } from "../Animal-card/animal-card";
import Link from "next/link";

interface IAnimalsFlexProps {
  state: string;
}

export async function AnimalsFlex({ state }: IAnimalsFlexProps) {
  const animals: IAnimal[] = await GetGeneratorArray(
    GetAnimalsByState(state, 5),
  );

  console.log(animals);

  return (
    <div className="flex w-full justify-around  items-center">
      {animals.map((a) => (
        <Link key={crypto.randomUUID()} href={`/animals/${a._id}`}>
          <AnimalCard animal={a} />
        </Link>
      ))}
    </div>
  );
}
