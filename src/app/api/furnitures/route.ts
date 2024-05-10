import { dbRequest } from "./dbrequest";
import slugify from "slugify";
import { nanoid } from "nanoid";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const { documents } = await dbRequest("furniture", "find");
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
      slug: slugify(`${name}-${nanoid()}`),
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
