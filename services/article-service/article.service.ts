import { MongoConnect } from "@/lib/mongoose/mongoose";
import { ArticleModel, IArticle } from "@/models/article/article.model";

export const ARTICLES_PER_PAGE: number = 12;

export async function* GetAllArticles(): AsyncGenerator<IArticle> {
  await MongoConnect();
  for await (const article of ArticleModel.find()) {
    yield article;
  }
}

export async function GetArticleById(id: string): Promise<IArticle> {
  const article = await ArticleModel.findOne({ _id: id });
  return article;
}

export function GetArticlePagesCount(articles: IArticle[]): number {
  return Math.ceil(articles.length / ARTICLES_PER_PAGE);
}

export async function* GetFilteredArticles(
  filter?: Record<string, any>,
): AsyncGenerator<IArticle> {
  await MongoConnect();
  for await (const article of ArticleModel.find(filter || {})) {
    yield article;
  }
}

export async function* GetArticlesByPage(
  page: number,
  filter?: Record<string, any>,
): AsyncGenerator<IArticle> {
  for await (const article of ArticleModel.find(filter || {})
    .sort({ createdAt: -1 })
    .skip((page - 1) * ARTICLES_PER_PAGE)
    .limit(12)) {
    yield article;
  }
}

export async function GetArticlesCount(
  filter: Record<string, any>,
): Promise<number> {
  return ArticleModel.countDocuments(filter);
}
