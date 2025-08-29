import { GetArticlesCount } from "@/services/article-service/article.service";
import { count } from "console";
import { NextRequest, NextResponse } from "next/server";

interface IArticleCountRequestProps {
  filter: Record<string, any>;
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const params: Record<string, any> = {};

    req.nextUrl.searchParams.forEach((p) => {
      params[p] = req.nextUrl.searchParams.get(p);
    });

    const count = await GetArticlesCount(params);
    return NextResponse.json({ count: count });
  } catch (e) {
    return NextResponse.json(
      { message: "error occured while getting article count" },
      { status: 500 },
    );
  }
}
