import { ArticleModel, IArticle } from "@/models/article/article.model";

export async function* GetAllArticles(): AsyncGenerator<IArticle> {
  for await (const article of ArticleModel.find()) {
    yield article;
  }
}

export async function* GetArticlesByPage(
  page: number,
): AsyncGenerator<IArticle> {
  for await (const article of ArticleModel.find()
    .sort({ createdAt: -1 })
    .skip((page - 1) * 8)
    .limit(8)) {
    yield article;
  }
}

export async function GetArticlesCount(
  filter?: Record<string, any>,
): Promise<number> {
  return ArticleModel.countDocuments(filter);
}
