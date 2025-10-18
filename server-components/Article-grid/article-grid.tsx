import { ArticleCard } from "@/client-components/Article-card/article-card";
import { AppLink } from "@/elements/app-link/app-link";
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

  if (!articles[0]) {
    return (
      <section className="flex flex-col items-center justify-center gap-4 w-full text-center h-100">
        <h2 className="text-xl font-semibold">
          Nejsou dostupné žádné další články
        </h2>
        <p className="text-gray-500 max-w-md">
          Zdá se, že jsi už všechno přečetl. Zkus se vrátit na hlavní stránku,
          nebo si projdi starší články.
        </p>
      </section>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {articles.map((a) => (
        <ArticleCard key={crypto.randomUUID()} article={a} />
      ))}
    </div>
  );
}
