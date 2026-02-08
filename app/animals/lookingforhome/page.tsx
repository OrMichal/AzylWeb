import { AnimalsLookingForHomeDescription } from "@/client-components/Animals-looking-for-home-description/animals-looking-for-home-description";
import { ISearchParamsAsyncComponent } from "@/interfaces/extensions/ISearchParamsAsyncComponent";
import { AnimalsGridFilter, IAnimalGridFilters } from "@/server-components/animals-grid-filter/animals-grid-filter";
import { AnimalsGrid } from "@/server-components/animals-grid/animals-grid";
import { Pagination } from "@/server-components/Pagination/pagination";
import { GetAnimalsPages } from "@/services/animal-service/animals.service";

export default async function AnimalsLookingForHome({
  searchParams,
}: ISearchParamsAsyncComponent<[IAnimalGridFilters]>) {
  const pars = await searchParams;

  const page = Number(pars.page) || 1;
  pars.page = page.toString();

  const filters: IAnimalGridFilters = {
    state: pars.state,
    animalType: pars.animalType,
  };

  const maxPage = await GetAnimalsPages(filters);

  return (
    <div className="pt-5 flex flex-col gap-6 w-full items-center">
      <AnimalsLookingForHomeDescription />
      <div className="flex flex-col gap-1 w-full">
        <AnimalsGridFilter />
        <AnimalsGrid querry={pars} filters={filters} page={page} />
        <Pagination searchParams={searchParams} maxPage={maxPage} />
      </div>
    </div>
  );
}
