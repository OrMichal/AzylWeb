import { IArticle } from "@/models/article/article.model";
import {
  GetArticlePagesCount,
  GetFilteredArticles,
} from "@/services/article-service/article.service";
import {
  GetGeneratorArray,
  GetObjectFromQuery,
} from "@/services/core-service/core.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const params: Record<string, any> = GetObjectFromQuery(
      req.nextUrl.searchParams.toString(),
    );

    const articles: IArticle[] = await GetGeneratorArray(
      GetFilteredArticles(params),
    );

    return NextResponse.json(
      { pages: GetArticlePagesCount(articles) },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json(
      { message: "oopsie daisie " + e },
      { status: 500 },
    );
  }
}
