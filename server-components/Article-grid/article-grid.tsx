import { ArticleCard } from "@/client-components/Article-card/article-card";
import { IArticle } from "@/models/article/article.model";
import { GetArticlesByPage } from "@/services/article-service/article.service";
import { GetGeneratorArray } from "@/services/core-service/core.service";

export interface ISearchParamsAsyncComponent {
  searchParams: { [key: string]: string | undefined };
}

export async function ArticleGrid({
  searchParams,
}: ISearchParamsAsyncComponent) {
  const page = searchParams.page;
  const articles = await GetGeneratorArray(
    GetArticlesByPage(Number.parseInt(page ?? "1")),
  );
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {articles.map((a) => (
        <ArticleCard key={crypto.randomUUID()} article={a} />
      ))}
    </div>
  );
}
