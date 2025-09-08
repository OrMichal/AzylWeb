import { IArticleDTO } from "@/interfaces/article/article.dto";
import { IArticle } from "@/models/article/article.model";
import { CalcSinceDate } from "@/server-components/Animal-card/animal-card";
import { GetArticleDTO } from "@/services/article-service/article-DTO.service";
import Image from "next/image";
import Link from "next/link";

interface IArticleCardProps {
  article: IArticle;
}

export function ArticleCard({ article }: IArticleCardProps) {
  const articleDto: IArticleDTO = GetArticleDTO(article);
  console.log(articleDto);

  return (
    <Link className="relative" href={`/articles/${articleDto.index}`}>
      <article className="flex gap-10 shadow p-5 rounded-3xl w-full relative">
        <div className="relative w-40 h-40">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/api/articles/image/${articleDto.imageGuid}`}
            fill
            alt="article image"
            className="rounded-xl"
          />
        </div>
        <section className="flex flex-col items-start gap-2 w-full">
          <h2 className="text-xl font-light border-b-1 border-amber-300 w-full">
            {articleDto.heading}
          </h2>
          <span>před {CalcSinceDate(articleDto.createdAt)}</span>
          <span className="text-sm pt-5">{articleDto.description}</span>
        </section>
      </article>
    </Link>
  );
}
