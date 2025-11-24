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

  return (
    <Link className="block w-full" href={`/articles/${article._id}`}>
      <article
        className="flex flex-col gap-4 sm:gap-6 shadow p-4 sm:p-5 rounded-xl w-full relative
        hover:shadow-lg transition-shadow duration-200"
      >
        <div className="relative w-full aspect-video sm:aspect-[4/3] flex-shrink-0">
          <Image
            src={`/api/articles/image/${articleDto.imageGuid}`}
            alt={articleDto.heading}
            fill
            className=" object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>

        <section className="flex flex-col items-start gap-1 sm:gap-2 w-full">
          <h2 className="text-lg sm:text-xl font-light border-b border-amber-300 w-full pb-1">
            {articleDto.heading}
          </h2>

          <span className="text-xs sm:text-sm text-gray-500">
            před {CalcSinceDate(articleDto.createdAt)}
          </span>

          <p className="text-sm sm:text-base pt-2 sm:pt-3 text-gray-700 line-clamp-3">
            {articleDto.description}
          </p>
        </section>
      </article>
    </Link>
  );
}
