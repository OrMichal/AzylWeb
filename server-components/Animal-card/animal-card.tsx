import { IAnimalDTO } from "@/interfaces/animal/IAnimalDTO";
import { IAnimal } from "@/models/animal/animal";
import { GetAnimalDTO } from "@/services/animal-service/animalDTO.service";
import {
    faCloud,
  faFemale,
  faHouse,
  faMagnifyingGlass,
  faMale,
  faMars,
  faRadiation,
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
<div className="flex flex-col items-center gap-3 rounded-xl shadow p-3 border border-gray-200
                hover:shadow-lg hover:-translate-y-2 transition-transform duration-200 w-full max-w-sm">
  <div className="relative w-full">
    <div className="relative w-full h-48 sm:h-64 md:h-55 lg:h-50">
      <Image
        alt={`daisy azyl ${animalDTO.name}`}
        src={`/api/animals/images/${animalDTO.imageGuid}`}
        fill
        className="rounded-xl object-cover"
        sizes="(max-width: 768px) 100vw, 100px"
      />
    </div>

    <div className="bg-white rounded-xl p-2 text-center flex flex-col items-center">
      <span className="font-semibold text-md sm:text-base inline-flex flex-row items-center gap-1">
        {animalDTO.name}
        {animalDTO.gender === "sameček" ? (
          <FontAwesomeIcon icon={faMars} className="ml-1" />
        ) : (
          <FontAwesomeIcon icon={faVenus} className="ml-1" />
        )}
      </span>
      <span className="text-gray-500">{animalDTO.animalType}</span>
      {
        animalDTO.state === "našel domov" &&
          <span className="inline-flex flex-row items-center gap-2 p-2 rounded-xl bg-blue-300 mt-2">
            <FontAwesomeIcon icon={faHouse} />
            <span>našel domov</span>
          </span>
      }
      {
        animalDTO.state === "hledá domov" &&
          <span className="inline-flex flex-row items-center gap-2 p-2 rounded-xl bg-green-300 mt-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <span>hledá domov</span>
          </span>
      }
      {
        animalDTO.state === "opustil nás" &&
          <span className="inline-flex flex-row items-center gap-2 p-2 rounded-xl bg-green-300 mt-2">
            <FontAwesomeIcon icon={faCloud} />
            <span>opustil nás</span>
          </span>
      }
      {
        animalDTO.state === "karanténa" &&
          <span className="inline-flex flex-row items-center gap-2 p-2 rounded-xl bg-green-300 mt-2">
            <FontAwesomeIcon icon={faRadiation} />
            <span>karanténa</span>
          </span>
      }
    </div>
  </div>
</div>
  );
}
