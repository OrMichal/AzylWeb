import { ArticleCard } from "@/client-components/Article-card/article-card";
import { GetArticlesByPage } from "@/services/article-service/article.service";
import { GetGeneratorArray } from "@/services/core-service/core.service";

export async function ArticleList() {
  const articles = (await GetGeneratorArray(GetArticlesByPage(1))).slice(0, 3);

  return (
    <section className="flex gap-5 justify-between w-full">
      {articles.map((a) => (
        <ArticleCard key={crypto.randomUUID()} article={a} />
      ))}
    </section>
  );
}
