import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { existsSync } from "fs";
import { createReadStream } from "fs";
import { iteratorToStream } from "@/app/api/employees/images/[id]/route";
import { nodeStreamToIterator } from "@/app/api/employees/images/[id]/route";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const filepath = path.resolve(
    process.cwd(),
    "database/animal-images",
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
