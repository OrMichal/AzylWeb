import { IAnimal } from "@/models/animal/animal";
import { GetAnimalDTO } from "@/services/animal-service/animalDTO.service";
import { GetAllAnimals } from "@/services/animal-service/animals.service";
import { AnimalCard } from "../Animal-card/animal-card";
import Link from "next/link";

export async function AnimalsGrid() {
  const animals: IAnimal[] = await GetAllAnimals();

  return (
    <div className="grid grid-cols-6">
      {animals.map((a: IAnimal) => (
        <Link key={a._id as string} href={`/animals/${a._id}`}>
          <AnimalCard animal={a} />
        </Link>
      ))}
    </div>
  );
}
