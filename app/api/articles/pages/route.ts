import { IArticle } from "@/models/article/article.model";
import { GetFilteredArticles } from "@/services/article-service/article.service";
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

    const res: number[] = articles.map(a => )

    NextResponse.json({  });
  } catch (e) {
    NextResponse.json({ message: "oopsie daisie" });
  }
}
