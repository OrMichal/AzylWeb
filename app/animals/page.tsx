import { IAnimalTypeDTO } from "@/interfaces/animal/IAnimalTypeDTO";
import { AnimalsFoundHome } from "@/server-components/Animals-found-home/animals-found-home";
import { AnimalsGrid } from "@/server-components/animals-grid/animals-grid";
import { AnimalsInQuarantine } from "@/server-components/Animals-in-quarantine/animals-in-quarantine";
import { AnimalsLeftUs } from "@/server-components/Animals-left-us/animals-left-us";
import { AnimalsLookingForHome } from "@/server-components/Animals-looking-for-home/animals-looking-for-home";
import { GetAnimalTypeDTOS } from "@/services/animal-service/animaltypeDTO.service";
import { GetGeneratorArray, queryParams } from "@/services/core-service/core.service";
import Link from "next/link";

export interface IAnimalGridFilters {
  animalType?: string;
  state?: string;
}

export default async function Animals({
  searchParams,
}: {
  searchParams: Promise<queryParams>;
}) {
  const animalTypes: Array<IAnimalTypeDTO> =
    await GetGeneratorArray(GetAnimalTypeDTOS());

  const pars = await searchParams;

  return (
    <div className="pt-5 flex flex-col gap-6 w-full items-center">
      <div className="flex flex-col sm:flex-col md:flex-row gap-4 w-full lg:justify-between">
        <Link
          href="/animals/quarantine?animalState=quarantine"
          className="w-full sm:w-full md:w-1/2 lg:w-1/4"
        >
          <AnimalsInQuarantine />
        </Link>
        <Link
          href="/animals/foundhome?animalState=foundHome"
          className="w-full sm:w-full md:w-1/2 lg:w-1/4"
        >
          <AnimalsFoundHome />
        </Link>
        <Link
          href="/animals/lookingforhome?animalState=lookingForHome"
          className="w-full sm:w-full md:w-1/2 lg:w-1/4"
        >
          <AnimalsLookingForHome />
        </Link>
        <Link
          href="/animals/leftus?animalState=leftUs"
          className="w-full sm:w-full md:w-1/2 lg:w-1/4"
        >
          <AnimalsLeftUs />
        </Link>
      </div>

      <h2 className="mt-10 text-xl sm:text-2xl font-medium text-center">
        Prohlídněte si zvířátka, která si prošla naším azylem
      </h2>
      <div className="w-full">
        <AnimalsGrid querry={pars} page={1} />
      </div>
    </div>
  );
}
