import slugify from "slugify";
import { dbRequest } from "../furnitures/dbrequest";
import { nanoid } from "nanoid";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const filter: Record<string, string> = {};

  if (slug) {
    filter.slug = slug;
  }

  const { documents } = await dbRequest("orders", "find", {
    filter,
  });

  return Response.json(documents);
}

export async function POST(request: Request) {
  // obtain info from body
  const body = await request.json();
  const { items, totalprice } = body;

  //   create
  const data = await dbRequest("orders", "insertOne", {
    document: {
      item: {
        items,
      },
      totalprice: totalprice,
      slug: nanoid(4),
    },
  });

  //   response
  return Response.json(data);
}
