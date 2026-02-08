import { Intersect } from "@/interfaces/extensions/Intersect";

export interface ISearchParamsAsyncComponent<T extends any[] = []> {
  searchParams: Promise<{ [key: string]: string | undefined } & Intersect<T>>;
}
