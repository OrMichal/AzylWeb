import { IArticleDTO } from "@/interfaces/article/article.dto";
import { IArticle } from "@/models/article/article.model";
import { GetArticleDTO } from "@/services/article-service/article-DTO.service";
import Image from "next/image";

interface IArticleCardProps {
  article: IArticle;
}

export function ArticleCard({ article }: IArticleCardProps) {
  const articleDto: IArticleDTO = GetArticleDTO(article);

  return (
    <article className="flex gap-10">
      <div className="relative w-30 h-30">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/api/articles/image/${articleDto.imageGuid}`}
          fill
          alt="article image"
        />
      </div>
      <section className="flex flex-col items-start gap-2">
        <h2>{articleDto.heading}</h2>
        <span>{articleDto.description}</span>
      </section>
    </article>
  );
}
