import { ReadonlyURLSearchParams } from "next/navigation";

export async function GetGeneratorArray<T>(
  generator: AsyncGenerator<T>,
): Promise<Array<T>> {
  const res: Array<T> = [];
  for await (const item of generator) {
    res.push(item);
  }
  return res;
}

export function GetQueryFromObject(record: Record<string, any>): string {
  let res: string = "";

  Object.keys(record).forEach((k) => {
    res = res.concat(`&${k}=${record[k]}`);
  });

  return res;
}

export function GetObjectFromQuery(query: string): Record<string, any> {
  const res: Record<string, any> = {};

  query
    .replace(/^\?/, "")
    .split("&")
    .forEach((p) => {
      if (!p) return;
      const splitted = p.split("=");
      res[splitted[0]] = splitted[1];
    });

  return res;
}

export function Range(start: number, end: number): number[] {
  return [...Array(end)].map((_, i) => i + 1).filter((x) => x >= start);
}

export function GetObjectFromSearchParams(
  params: ReadonlyURLSearchParams,
): Record<string, any> {
  let res: Record<string, any> = {};
  params.forEach((value, key) => (res[key] = value));
  return res;
}

export function GetStringFromSearchParams(
  params: ReadonlyURLSearchParams,
): String {
  if (params.size == 0) {
    return "";
  }

  let res: String = "";

  params.forEach((value, key) => (res = res?.concat(`&${key}=${value}`)));
  res = res?.replace(/^&/, "?");
  return res;
}
