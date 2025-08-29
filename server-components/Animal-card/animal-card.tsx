import { IAnimalDTO } from "@/interfaces/animal/IAnimalDTO";
import { IAnimal } from "@/models/animal/animal";
import { GetAnimalDTO } from "@/services/animal-service/animalDTO.service";
import Image from "next/image";

interface IAnimalCardProps {
  animal: IAnimal;
}

export const CalcSinceDate = (birthdateStr: string): string => {
  const year = parseInt(birthdateStr.slice(0, 4), 10);
  const month = parseInt(birthdateStr.slice(4, 6), 10) - 1;
  const day = parseInt(birthdateStr.slice(6, 8), 10);

  const birthDate = new Date(year, month, day);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years > 0) {
    return `${years} ${years === 1 ? "rok" : years < 5 ? "roky" : "let"}`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "měsíc" : months < 5 ? "měsíce" : "měsíců"}`;
  } else {
    const diffInMs = today.getTime() - birthDate.getTime();
    const weeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
    return `${weeks} ${weeks === 1 ? "týden" : weeks < 5 ? "týdny" : "týdnů"}`;
  }
};

export async function AnimalCard({ animal }: IAnimalCardProps) {
  const animalDTO: IAnimalDTO = await GetAnimalDTO(animal);

  console.log(animalDTO.birthDay);
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl shadow-lg hover:shadow-2xl hover:translate-y-[-8px] transition-transform">
      <div className="p-4 relative">
        <div className="relative h-50 w-50">
          <Image
            alt={`daisy azyl ${animalDTO.name}`}
            src={`${process.env.NEXT_PUBLIC_API_URL}/api/animals/images/${animalDTO.imageGuid}`}
            fill
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-1 w-full flex-wrap mt-2">
          <span>Jméno: {animalDTO.name}</span>
          <span>Věk: {CalcSinceDate(animalDTO.birthDay)} </span>
          <span>{animalDTO.state}</span>
        </div>
      </div>
    </div>
  );
}
