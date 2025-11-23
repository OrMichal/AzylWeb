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
        className="flex flex-col sm:flex-row gap-5 sm:gap-10 shadow p-4 sm:p-5 rounded-3xl w-full relative
        hover:shadow-lg transition-shadow duration-200"
      >
        <div className="relative w-full sm:w-1/3 aspect-video sm:aspect-auto">
          <Image
            src={`/api/articles/image/${articleDto.imageGuid}`}
            alt="article image"
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>

        <section className="flex flex-col items-start gap-2 w-full sm:w-2/3">
          <h2 className="text-lg sm:text-xl font-light border-b border-amber-300 w-full pb-1">
            {articleDto.heading}
          </h2>
          <span className="text-sm sm:text-base text-gray-600">
            před {CalcSinceDate(articleDto.createdAt)}
          </span>
          <span className="text-sm sm:text-base pt-3 sm:pt-5 text-gray-700">
            {articleDto.description}
          </span>
        </section>
      </article>
    </Link>
  );
}
