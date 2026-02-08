import { AnimalsInQuarantineDescription } from "@/client-components/Animals-in-quarantine-description/animals-in-quarantine-description";
import { AnimalsGridFilter, IAnimalGridFilters } from "@/server-components/animals-grid-filter/animals-grid-filter";
import { AnimalsGrid } from "@/server-components/animals-grid/animals-grid";
import { ISearchParamsAsyncComponent } from "@/interfaces/extensions/ISearchParamsAsyncComponent";
import { GetAnimalsPages } from "@/services/animal-service/animals.service";
import { Pagination } from "@/server-components/Pagination/pagination";

export default async function AnimalsInQuarantine({ searchParams }: ISearchParamsAsyncComponent<[IAnimalGridFilters]>) {
  const pars = await searchParams;

  const page = Number(pars.page) || 1;
  pars.page = page.toString();

  const filters: IAnimalGridFilters = {
    state: pars.state,
    animalType: pars.animalType,
  };

  const maxPage = await GetAnimalsPages(filters);
  console.log(maxPage);

  return (
    <div className="pt-5 flex flex-col gap-6 w-full items-center">
      <AnimalsInQuarantineDescription />
      <div className="flex flex-col gap-1 w-full">
        <AnimalsGridFilter />
        <AnimalsGrid querry={pars} filters={filters} page={page} />
        <Pagination searchParams={searchParams} maxPage={maxPage} />
      </div>
    </div>
  );
}
