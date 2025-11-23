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
    <div className="flex items-center gap-3 rounded-2xl shadow-lg hover:shadow-2xl hover:translate-y-[-8px] transition-transform">
      <div className="m-2 relative flex flex-col items-center w-full gap-3">
        <div className="relative w-full h-64">
          <Image
            alt={`daisy azyl ${animalDTO.name}`}
            src={`/api/animals/images/${animalDTO.imageGuid}`}
            fill
            className="rounded-2xl object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        <div className="flex flex-col gap-1 flex-wrap mt-2 p-2 backdrop-blur-xs">
          <span>
            {animalDTO.name}{" "}
            {animalDTO.gender == "sameček" ? (
              <FontAwesomeIcon icon={faMars} />
            ) : (
              <FontAwesomeIcon icon={faVenus} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
