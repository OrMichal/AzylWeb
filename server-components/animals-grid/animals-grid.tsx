import { IAnimal } from "@/models/animal/animal";
import { GetAllAnimals } from "@/services/animal-service/animals.service";
import { AnimalCard } from "../Animal-card/animal-card";
import Link from "next/link";

export async function AnimalsGrid() {
  const animals: IAnimal[] = await GetAllAnimals();

  return (
    <div className="grid grid-cols-6 gap-3 w-full">
      {animals.map((a: IAnimal) => (
        <Link key={a._id as string} href={`/animals/${a._id}`}>
          <AnimalCard animal={a} />
        </Link>
      ))}
    </div>
  );
}
