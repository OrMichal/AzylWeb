import { NextRequest, NextResponse } from "next/server";
import { existsSync, createReadStream } from "fs";
import path from "path";
import { MongoConnect } from "@/lib/mongoose/mongoose";
import { GetEmployeeById } from "@/services/Employee-service/employee-service";

async function* nodeStreamToIterator(stream: fs.ReadStream) {
  for await (const chunk of stream) {
    yield new Uint8Array(chunk);
  }
}

function iteratorToStream(iterator: AsyncIterator<Uint8Array>) {
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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const filepath = path.resolve(
    process.cwd(),
    "database/employee-images",
    id + ".jpg",
  );

  console.log(filepath);

  if (!existsSync(filepath)) {
    return NextResponse.json({ message: "image not found" }, { status: 404 });
  }

  const nodeStream = createReadStream(filepath);
  const webStream = iteratorToStream(nodeStreamToIterator(nodeStream));

  return new NextResponse(webStream, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
