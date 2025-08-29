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

  query.split("&").forEach((p) => {
    const splitted = p.split("=");
    res[splitted[0]] = splitted[1];
  });

  return res;
}
