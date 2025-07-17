import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Eshop() {
  return (
    <div className="mt-40 w-full flex items-center justify-center bg-gradient-to-br px-4">
      <div className="bg-white rounded-2xl p-10 flex flex-col items-center text-center gap-6 max-w-md animate-fade-in">
        <h1 className="text-2xl md:text-3xl font-semibold text-black ">
          Na této sekci stále pracujeme
        </h1>
        <p className="text-gray-600 ">
          E-shop ještě není připravený. Dokončujeme poslední úpravy, brzy bude k
          dispozici!
        </p>
        <Link
          href="/"
          className="mt-4 px-6 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium transition"
        >
          Zpět na domovskou stránku
        </Link>
      </div>
    </div>
  );
}
