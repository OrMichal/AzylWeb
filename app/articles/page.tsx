import {
  ArticleGrid,
  ISearchParamsAsyncComponent,
} from "@/server-components/Article-grid/article-grid";
import { Pagination } from "@/server-components/Pagination/pagination";
import { GetArticlesByPage, GetArticlesMaxPageByPage } from "@/services/article-service/article.service";
import { GetGeneratorArray, GetStringFromSearchParams } from "@/services/core-service/core.service";
import { ReadonlyURLSearchParams } from "next/navigation";

export default async function NewsletterPage({
  searchParams,
}: ISearchParamsAsyncComponent) {
  const queryParams = await searchParams;
  const params = new URLSearchParams();
  const page = Number.parseInt(queryParams.page as string);
  const maxPage = await GetArticlesMaxPageByPage(page);
  return (
    <main className="flex flex-col gap-10 items-center">
      <ArticleGrid searchParams={searchParams} />
      <Pagination searchParams={searchParams} maxPage={maxPage} />
    </main>
  );
}
