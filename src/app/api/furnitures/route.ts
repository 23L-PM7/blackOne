import { dbRequest } from "./dbrequest";
import slugify from "slugify";
import { nanoid } from "nanoid";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const filter: Record<string, string> = {};

  if (slug) {
    filter.slug = slug;
  }

  const { documents } = await dbRequest("furniture", "find", {
    filter,
  });

  return Response.json(documents);
}

export async function POST(request: Request) {
  // obtain info from body
  const body = await request.json();
  const {
    name,
    description,
    details,
    price,
    category,
    dimensions,
    picture,
    pictureTwo,
  } = body;

  //   create
  const data = await dbRequest("furniture", "insertOne", {
    document: {
      name: name,
      slug: slugify(`${name}-${nanoid(4)}`),
      description: description,
      details: details,
      price: price,
      category: category,
      dimensions: dimensions,
      picture: picture,
      pictureTwo: pictureTwo,
    },
  });

  //   response
  return Response.json(data);
}
