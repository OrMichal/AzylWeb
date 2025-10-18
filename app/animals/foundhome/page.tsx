import { AnimalFinder } from "@/client-components/Animal-finder/animal-finder";
import { AnimalsFoundHomeDescription } from "@/client-components/Animals-found-home-description/animals-found-home-description";
import { AnimalsInQuarantineDescription } from "@/client-components/Animals-in-quarantine-description/animals-in-quarantine-description";
import { AnimalsGrid } from "@/server-components/animals-grid/animals-grid";

export default async function AnimalsFoundHome({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center w-full">
      <section>
        <AnimalsFoundHomeDescription />
      </section>
      <AnimalFinder>
        <AnimalsGrid querry={searchParams} />
      </AnimalFinder>
    </div>
  );
}
