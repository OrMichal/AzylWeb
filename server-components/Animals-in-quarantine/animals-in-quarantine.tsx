import { faBiohazard, faHouseLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export async function AnimalsInQuarantine() {
  return (
    <div
      className="flex gap-3 p-4 w-full items-center rounded-xl shadow
        hover:shadow-lg
      "
    >
      <FontAwesomeIcon icon={faBiohazard} className="text-4xl" />
      <span className="text-2xl">Karanténa</span>
    </div>
  );
}
