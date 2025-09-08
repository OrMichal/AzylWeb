import { IAnimalTypeDTO } from "@/interfaces/animal/IAnimalTypeDTO";
import { AnimalsGrid } from "@/server-components/animals-grid/animals-grid";
import { GetAnimalTypeDTOS } from "@/services/animal-service/animaltypeDTO.service";
import { GetGeneratorArray } from "@/services/core-service/core.service";

export interface IAnimalGridFilters {
  animalType?: string;
  state?: string;
}

export default async function Animals() {
  const animalTypes: Array<IAnimalTypeDTO> =
    await GetGeneratorArray(GetAnimalTypeDTOS());

  return (
    <div className="pt-5 flex flex-col gap-3 w-full items-center">
      <h2 className="text-2xl font-medium">Naše zvířátka</h2>
      <AnimalsGrid />
    </div>
  );
}
