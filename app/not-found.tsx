import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col mt-5 items-center text-gray-800 relative p-4">
      <h2 className="text-5xl font-medium mb-4">404</h2>
      <h1 className="text-4xl font-bold mb-4">Stránka nenalezena</h1>
      <p className="text-lg mb-8">
        Omlouváme se, ale hledaná stránka nebyla nalezena.
      </p>
      <div className="relative w-64 h-64">
        <Image
          src="/images/animal-paw.png"
          width={40}
          height={40}
          alt="Tlapa"
          className="absolute top-10 left-8 transform scale-150 rotate-12 opacity-80"
        />
        <Image
          src="/images/animal-paw.png"
          width={40}
          height={40}
          alt="Tlapa"
          className="absolute bottom-10 right-8 transform scale-200 -rotate-6 opacity-80"
        />
        <Image
          src="/images/animal-paw.png"
          width={40}
          height={40}
          alt="Tlapa"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125 opacity-80"
        />
      </div>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-colors duration-300"
      >
        Zpět na domovskou stránku
      </Link>
    </div>
  );
}
