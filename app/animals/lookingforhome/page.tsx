import { AnimalFinder } from "@/client-components/Animal-finder/animal-finder";
import { AnimalsInQuarantineDescription } from "@/client-components/Animals-in-quarantine-description/animals-in-quarantine-description";
import { AnimalsLookingForHomeDescription } from "@/client-components/Animals-looking-for-home-description/animals-looking-for-home-description";
import { AnimalsGrid } from "@/server-components/animals-grid/animals-grid";
import { queryParams } from "@/services/core-service/core.service";

export default async function AnimalsLookingForHome({
  searchParams,
}: {
  searchParams: Promise<queryParams>;
}) {
  const pars = await searchParams;
  return (
    <div className="flex flex-col gap-10 mt-10 items-center w-full">
      <section>
        <AnimalsLookingForHomeDescription />
      </section>
      <AnimalFinder>
        <AnimalsGrid
          querry={pars}
          page={parseInt(pars?.page?.toString()!)}
        />
      </AnimalFinder>
    </div>
  );
}
