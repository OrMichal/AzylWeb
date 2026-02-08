import { MongoConnect } from "@/lib/mongoose/mongoose";
import { ArticleModel, IArticle } from "@/models/article/article.model";

export const ARTICLES_PER_PAGE: number = 10;

export async function* GetAllArticles(): AsyncGenerator<IArticle> {
  await MongoConnect();
  for await (const article of ArticleModel.find()) {
    yield article;
  }
}

export async function GetArticleById(id: string): Promise<IArticle> {
  await MongoConnect();
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
  await MongoConnect();
  for await (const article of ArticleModel.find(filter || {})
    .sort({ createdAt: -1 })
    .skip((page - 1) * ARTICLES_PER_PAGE)
    .limit(ARTICLES_PER_PAGE)) {
    yield article;
  }
}

export async function GetArticlesMaxPageByPage(page: number): Promise<number> {
  await MongoConnect();
  const articles = await ArticleModel.find();

  return GetArticlePagesCount(articles);
}

export async function GetArticlesCount(
  filter: Record<string, any>,
): Promise<number> {
  return ArticleModel.countDocuments(filter);
}

export async function GetArticlesPages(filter?: Record<string, any>): Promise<number> {
  await MongoConnect();
  const articleCount = await ArticleModel.countDocuments(filter || {})

  return Math.ceil(articleCount / ARTICLES_PER_PAGE);
}
