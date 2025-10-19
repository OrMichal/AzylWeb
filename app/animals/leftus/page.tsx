import { AnimalFinder } from "@/client-components/Animal-finder/animal-finder";
import { AnimalsInQuarantineDescription } from "@/client-components/Animals-in-quarantine-description/animals-in-quarantine-description";
import { AnimalsLeftUsDescription } from "@/client-components/Animals-left-us-description/animals-left-us-description";
import { AnimalsGrid } from "@/server-components/animals-grid/animals-grid";

export default async function AnimalsLeftUs({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center w-full">
      <section>
        <AnimalsLeftUsDescription />
      </section>
      <AnimalFinder>
        <AnimalsGrid
          querry={searchParams}
          page={parseInt(searchParams?.page?.toString())}
        />
      </AnimalFinder>
    </div>
  );
}
