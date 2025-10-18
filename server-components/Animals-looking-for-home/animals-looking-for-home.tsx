import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AnimalsLookingForHome() {
  return (
    <div
      className="flex gap-3 p-4 w-full items-center rounded-xl shadow
      hover:shadow-lg hover:cursor-pointer
      "
    >
      <FontAwesomeIcon icon={faMagnifyingGlassLocation} className="text-4xl" />
      <span className="text-2xl">Hledají domov</span>
    </div>
  );
}
