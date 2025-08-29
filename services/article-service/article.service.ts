import { MongoConnect } from "@/lib/mongoose/mongoose";
import { ArticleModel, IArticle } from "@/models/article/article.model";

export async function* GetAllArticles(): AsyncGenerator<IArticle> {
  await MongoConnect();
  for await (const article of ArticleModel.find()) {
    yield article;
  }
}

export async function* GetFilteredArticles(
  filter: Record<string, any>,
): AsyncGenerator<IArticle> {
  await MongoConnect();
  for await (const article of ArticleModel.find(filter)) {
    yield article;
  }
}

export async function* GetArticlesByPage(
  page: number,
  filter?: Record<string, any>,
): AsyncGenerator<IArticle> {
  for await (const article of ArticleModel.find(filter || {})
    .sort({ createdAt: -1 })
    .skip((page - 1) * 12)
    .limit(12)) {
    yield article;
  }
}

export async function GetArticlesCount(
  filter: Record<string, any>,
): Promise<number> {
  return ArticleModel.countDocuments(filter);
}
