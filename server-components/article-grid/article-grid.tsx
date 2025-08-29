import { IArticle } from "@/models/article/article.model";
import { GetArticlesByPage } from "@/services/article-service/article.service";
import { GetGeneratorArray } from "@/services/core-service/core.service";

interface IArticleGridProps {
  page: number;
}

export async function ArticleGrid({ page }: IArticleGridProps) {
  const articles: IArticle[] = await GetGeneratorArray(GetArticlesByPage(page));

  return (
    <section>
      {articles.map((a) => (
        <div>{a.content}</div>
      ))}
    </section>
  );
}
