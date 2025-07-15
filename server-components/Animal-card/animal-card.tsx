import { IAnimalDTO } from "@/interfaces/animal/IAnimalDTO";
import { IAnimal } from "@/models/animal/animal";
import { GetAnimalDTO } from "@/services/animal-service/animalDTO.service";
import Image from "next/image";

interface IAnimalCardProps {
  animal: IAnimal;
}

export async function AnimalCard({ animal }: IAnimalCardProps) {
  const animalDTO: IAnimalDTO = await GetAnimalDTO(animal);
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl shadow-lg hover:shadow-2xl hover:translate-y-[-8px] transition-transform">
      <div className="p-4 relative">
        <div className="relative h-50 w-50">
          <Image
            alt="haha"
            src={`${process.env.NEXT_PUBLIC_API_URL}/api/animals/images/${animalDTO.imageGuid}`}
            fill
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-1 w-full flex-wrap mt-2">
          <span>Jméno: {animal.name}</span>
          <span>
            Věk: {animal.age}{" "}
            {animal.age >= 4 ? "roky" : animal.age == 1 ? "rok" : "let"}
          </span>
          <span>{animal.state}</span>
        </div>
      </div>
    </div>
  );
}
