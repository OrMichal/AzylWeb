import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AnimalsLeftUs() {
  return (
    <div
      className="flex gap-3 p-4 w-full items-center rounded-xl shadow
      hover:shadow-lg hover:cursor-pointer
      "
    >
      <FontAwesomeIcon icon={faCloud} className="text-4xl" />
      <span className="text-2xl">Opustila nás</span>
    </div>
  );
}
