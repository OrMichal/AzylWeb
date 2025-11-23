import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { existsSync } from "fs";
import { createReadStream } from "fs";
import {iteratorToStream, nodeStreamToIterator} from "@/services/stream-service/stream.service";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const filepath = path.resolve(
    process.cwd(),
    "database/article-images",
    id + ".jpg",
  );
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
