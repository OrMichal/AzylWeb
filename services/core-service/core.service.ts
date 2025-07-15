export async function GetGeneratorArray<T>(
  generator: AsyncGenerator<T>,
): Promise<Array<T>> {
  const res: Array<T> = [];
  for await (const item of generator) {
    res.push(item);
  }

  return res;
}
