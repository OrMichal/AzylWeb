import { IAnimalDTO } from "@/interfaces/animal/IAnimalDTO";
import { IAnimal } from "@/models/animal/animal";
import { GetAnimalDTO } from "@/services/animal-service/animalDTO.service";
import {
  faFemale,
  faMale,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  return (
<div className="flex flex-col items-center gap-3 rounded-xl shadow-lg 
                hover:shadow-2xl hover:-translate-y-2 transition-transform duration-200 w-full max-w-sm">
  <div className="relative w-full">
    {/* Image */}
    <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80">
      <Image
        alt={`daisy azyl ${animalDTO.name}`}
        src={`/api/animals/images/${animalDTO.imageGuid}`}
        fill
        className="rounded-xl object-cover"
        sizes="(max-width: 768px) 100vw, 100px"
      />
    </div>

    <div className="absolute bottom-2 left-2 right-2 bg-white rounded-xl p-2 text-center">
      <span className="font-semibold text-sm sm:text-base">
        {animalDTO.name}{" "}
        {animalDTO.gender === "sameček" ? (
          <FontAwesomeIcon icon={faMars} className="ml-1" />
        ) : (
          <FontAwesomeIcon icon={faVenus} className="ml-1" />
        )}
      </span>
    </div>
  </div>
</div>
  );
}
