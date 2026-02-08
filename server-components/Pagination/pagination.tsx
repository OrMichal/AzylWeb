import { GetArticlesPages } from "@/services/article-service/article.service";
import { SearchParams } from "next/dist/server/request/search-params";
import Link from "next/link";
import { PageButton } from "./page-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { PageCard } from "./page-card";

interface IPaginationProps {
  searchParams: Promise<SearchParams>;
  maxPage: number;
}

export async function Pagination({ searchParams, maxPage }: IPaginationProps) {
  const params = await searchParams;
  const page = Number.parseInt(params.page as string) || 1;

  let offset: number = 3;
  let pages: Array<number> = [];
  let currentPage = page;
  const minPage = 1;

  for (let i = currentPage - offset; i < (currentPage + offset + 1); i++) {
    if(i > maxPage) break;
    if(i < 1) continue;

    pages.push(i);
  }


  return(
    (maxPage != 0 &&
      <div className="flex flex-row gap-5 items-center">
        {
          currentPage > minPage 
            ? <Link href={`?page=${currentPage - 1}`}>
               <PageButton disabled={currentPage == minPage}>
                <FontAwesomeIcon icon={faCircleChevronLeft} />
               </PageButton>
              </Link>
            : <PageButton disabled={true}>
                <FontAwesomeIcon icon={faCircleChevronLeft} />
              </PageButton>
        }
        {(pages[0] != minPage && pages.length > 0) && <div className="text-gray-400 self-end">...</div>}
        <div className="flex flex-row items-center gap-1">
          {
            pages.map(p => (
              <Link href={`?page=${p}`} key={crypto.randomUUID()}>
                <PageCard active={currentPage == p}>{p}</PageCard>
              </Link>
            ))
          }
        </div>
        {(pages.at(-1) != maxPage && pages.length > 0) && <div className="text-gray-400 self-end">...</div>}
        {
          currentPage != pages.at(-1) 
            ? <Link href={`?page=${currentPage + 1}`}>
               <PageButton disabled={currentPage == maxPage}>
                <FontAwesomeIcon icon={faCircleChevronRight} />
               </PageButton>
              </Link>
            : <PageButton disabled={true}>
                <FontAwesomeIcon icon={faCircleChevronRight} />
              </PageButton>
        }
      </div>
    )
  );
}
