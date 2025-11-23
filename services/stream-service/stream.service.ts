import {ReadStream} from "fs";

export async function* nodeStreamToIterator(stream: ReadStream) {
  for await (const chunk of stream) {
    yield new Uint8Array(chunk);
  }
}

export function iteratorToStream(iterator: AsyncIterator<Uint8Array>) {
  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      const { value, done } = await iterator.next();
      if (done) controller.close();
      else controller.enqueue(value);
    },
    cancel() {
      iterator.return?.();
    },
  });
}

