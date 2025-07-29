import { GetArticlesByPage } from "@/services/article-service/article.service";
import { GetGeneratorArray } from "@/services/core-service/core.service";

interface INewsletterListProps {
  page?: number;
}

export async function NewsletterList({ page }: INewsletterListProps) {
  const articles = await GetGeneratorArray(GetArticlesByPage(page || 1));

  return <div className="flex flex-col gap-2"></div>;
}
