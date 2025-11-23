import { ContentDescriptionShadowed } from "@/elements/content-description-shadowed/content-description-shadowed";
import { IAnimalDTO } from "@/interfaces/animal/IAnimalDTO";
import { IAnimal } from "@/models/animal/animal";
import { CalcSinceDate } from "@/server-components/Animal-card/animal-card";
import { GetAnimalDTO } from "@/services/animal-service/animalDTO.service";
import { GetAnimalById } from "@/services/animal-service/animals.service";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AnimalById({ params }: PageProps) {
  const { id } = await params;
  const Animal: IAnimal = await GetAnimalById(id);
  const animalDTO: IAnimalDTO = await GetAnimalDTO(Animal);

  return (
    <div className="flex flex-col gap-8 items-center w-full ">
      <div className="w-full flex flex-col items-center gap-5 p-4">
        <h2 className="text-3xl">
          {animalDTO.name} - {CalcSinceDate(animalDTO.birthDay)}
        </h2>
        <section className="flex items-start gap-15 w-full">
          <div className="w-120 h-120 relative">
            <Image
              src={`/api/animals/images/${animalDTO.imageGuid}`}
              alt={`daisy azyl ${animalDTO.name} description`}
              fill
              className="rounded-4xl"
            />
          </div>
          <div
            className="flex flex-col gap-7 items-start mt-8
            text-gray-800 font-medium text-2xl
          "
          >
            <span>Stav: {animalDTO.state}</span>
          </div>
        </section>
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
