import { ContentDescription } from "@/client-components/content-description/content-description";
import { IArticle } from "@/models/article/article.model";
import { CalcSinceDate } from "@/server-components/Animal-card/animal-card";
import { ArticleList } from "@/server-components/Article-list/article-list";
import { GetArticleById } from "@/services/article-service/article.service";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticleByIdPage({ params }: PageProps) {
  const { id } = await params;
  const article: IArticle = await GetArticleById(id);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl">{article.heading}</h2>
        <span>stáří: {CalcSinceDate(article.createdAt)}</span>
      </div>

      <div>
        <Image
          src={`/api/articles/image/${article.imageGuid}`}
          width={800}
          height={800}
          alt={`article ${id} image`}
          sizes="(max-width: 768px) 400px, 600px"
          className="object-cover rounded-xl"
        />
      </div>

      <blockquote>{article.description}</blockquote>

      <article>{article.content}</article>

      <ContentDescription heading="Mohlo by vás také zajímat">
        <ArticleList />
      </ContentDescription>
    </div>
  );
}
