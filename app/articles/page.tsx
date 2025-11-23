import { ArticlePages } from "@/client-components/Article-pages/article-pages";
import {
  ArticleGrid,
  ISearchParamsAsyncComponent,
} from "@/server-components/Article-grid/article-grid";
import { GetStringFromSearchParams } from "@/services/core-service/core.service";
import { ReadonlyURLSearchParams } from "next/navigation";

export default async function NewsletterPage({
  searchParams,
}: ISearchParamsAsyncComponent) {
  const queryParams = await searchParams;
  const params = new URLSearchParams();
  const filter = GetStringFromSearchParams(params as ReadonlyURLSearchParams);
  return (
    <main className="flex flex-col gap-10 items-center">
      <ArticleGrid searchParams={searchParams} />
      <ArticlePages />
    </main>
  );
}
