import { ContentDescriptionShadowed } from "@/elements/content-description-shadowed/content-description-shadowed";
import { IAnimalDTO } from "@/interfaces/animal/IAnimalDTO";
import { IAnimal } from "@/models/animal/animal";
import { CalcAnimalAge } from "@/server-components/Animal-card/animal-card";
import { GetAnimalDTO } from "@/services/animal-service/animalDTO.service";
import { GetAnimalById } from "@/services/animal-service/animals.service";
import Image from "next/image";

interface PageProps {
  params: { id: string };
}

export default async function AnimalById({ params }: PageProps) {
  const { id } = await params;
  const Animal: IAnimal = await GetAnimalById(id);
  const animalDTO: IAnimalDTO = await GetAnimalDTO(Animal);
  console.log(animalDTO);
  return (
    <div className="flex flex-col gap-8 items-center w-full ">
      <div className="w-full flex gap-10 items-start shadow-lg p-4 rounded-4xl ">
        <div className="w-120 h-120 relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/api/animals/images/${animalDTO.imageGuid}`}
            alt={`daisy azyl ${animalDTO.name} description`}
            fill
            className="rounded-4xl"
          />
        </div>
        <div
          className="flex flex-col gap-7 items-start mt-8
            text-gray-600 font-medium text-2xl
          "
        >
          <span>Jméno: {animalDTO.name}</span>
          <span>Věk: {CalcAnimalAge(animalDTO.birthDay)}</span>
          <span>Typ zvířete: {animalDTO.animalType}</span>
          <span>Stav: {animalDTO.state}</span>
        </div>
      </div>
      {animalDTO.description && (
        <ContentDescriptionShadowed heading="Podrobnější popis">
          <span>{animalDTO.description}</span>
        </ContentDescriptionShadowed>
      )}
      {animalDTO.history && (
        <ContentDescriptionShadowed heading="Historie zvířete">
          <span>{animalDTO.history}</span>
        </ContentDescriptionShadowed>
      )}
    </div>
  );
}
