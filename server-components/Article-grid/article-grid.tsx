import { ArticleCard } from "@/client-components/Article-card/article-card";
import { GetArticlesByPage } from "@/services/article-service/article.service";
import { GetGeneratorArray } from "@/services/core-service/core.service";
import { ISearchParamsAsyncComponent } from "@/interfaces/extensions/ISearchParamsAsyncComponent";

export async function ArticleGrid({
  searchParams,
}: ISearchParamsAsyncComponent) {
  const pars = await searchParams;
  const page = pars.page;
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
    <div className="flex flex-col gap-4 w-full">
      {articles.map((a) => (
        <ArticleCard key={crypto.randomUUID()} article={a} />
      ))}
    </div>
  );
}
