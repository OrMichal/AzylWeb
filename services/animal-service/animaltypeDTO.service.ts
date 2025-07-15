import { IAnimalTypeDTO } from "@/interfaces/animal/IAnimalTypeDTO";
import { MongoConnect } from "@/lib/mongoose/mongoose";
import { IAnimalType } from "@/models/animalType/animalType";
import { GetAnimalTypes } from "./animaltype.service";
import { GetAnimalTypeDTO } from "./animalDTO.service";

export async function* GetAnimalTypeDTOS(): AsyncGenerator<IAnimalTypeDTO> {
  await MongoConnect();
  const types: IAnimalType[] = await GetAnimalTypes();

  for (const type of types) {
    const dto = await GetAnimalTypeDTO(type);
    yield dto;
  }
}
