import { AppOption } from "@/elements/app-option/app-option";
import { AppRollDownMenu } from "@/elements/app-rolldown-menu/app-rolldown-menu";
import { AppSelect } from "@/elements/app-select/app-select";
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
      <h2 className="text-2xl font-medium">
        Zvířátka, která prošla naším azylem
      </h2>
      <AnimalsGrid />
    </div>
  );
}
