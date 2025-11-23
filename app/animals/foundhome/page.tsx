import { AnimalFinder } from "@/client-components/Animal-finder/animal-finder";
import { AnimalsFoundHomeDescription } from "@/client-components/Animals-found-home-description/animals-found-home-description";
import { AnimalsGrid } from "@/server-components/animals-grid/animals-grid";
import { queryParams } from "@/services/core-service/core.service";

export default async function AnimalsFoundHome({
  searchParams,
}: {
  searchParams: Promise<queryParams>;
}) {
  const  searchParamss  = await searchParams; 
  return (
    <div className="flex flex-col gap-10 mt-10 items-center w-full">
      <section>
        <AnimalsFoundHomeDescription />
      </section>
      <AnimalFinder>
        <AnimalsGrid
          querry={searchParamss}
          page={parseInt(searchParamss?.page?.toString()!)}
        />
      </AnimalFinder>
    </div>
  );
}
