import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AnimalsFoundHome() {
  return (
    <div
      className="flex gap-3 p-4 w-full h-auto items-center shadow rounded-xl
      hover:shadow-lg hover:cursor-pointer
      "
    >
      <FontAwesomeIcon icon={faHouseChimney} className="text-4xl" />
      <span className="text-2xl">Našla domov</span>
    </div>
  );
}
