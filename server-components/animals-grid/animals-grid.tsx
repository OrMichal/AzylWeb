import "./animals-grid.css";
import { IAnimal } from "@/models/animal/animal";
import {
    GetAnimals,
  GetFilteredAnimals,
} from "@/services/animal-service/animals.service";
import { AnimalCard } from "../Animal-card/animal-card";
import Link from "next/link";
import { IPageProps, queryParams } from "@/services/core-service/core.service";
import { IAnimalGridFilters } from "../animals-grid-filter/animals-grid-filter";

interface IAnimalsGridProps {
  querry: queryParams;
  page: number;
  filters?: IAnimalGridFilters;
}

export async function AnimalsGrid({ querry, page, filters }: IAnimalsGridProps) {
  const params = await querry;
  const animals: IAnimal[] = await GetAnimals(page, filters);

  if (animals.length == 0) {
    return (
      <div className="w-full">Nepodařilo se najíž žádná taková zvířátka.</div>
    );
  }

  return (
    <div className="responsive-grid w-full">
      {animals.map((a: IAnimal) => (
        <Link key={a._id.toString()} href={`/animals/${a._id}`}>
          <AnimalCard animal={a} />
        </Link>
      ))}
    </div>
  );
}
