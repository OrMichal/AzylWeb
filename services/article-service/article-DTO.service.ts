import { IArticleDTO } from "@/interfaces/article/article.dto";
import { IArticle } from "@/models/article/article.model";

export function GetArticleDTO(article: IArticle): IArticleDTO {
  return {
    heading: article.heading,
    description: article.description,
    imageGuid: article.imageGuid,
    content: article.content,
    createdAt: article.createdAt,
    index: article.index,
  } as IArticleDTO;
}
