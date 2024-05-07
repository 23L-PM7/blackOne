import { dbRequest } from "./dbrequest";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  console.log({ id });

  const { documents } = await dbRequest("furniture", "find");
  return Response.json(documents);
}

export async function POST(request: Request) {
  // obtain info from body
  const body = await request.json();
  const { name, description, details, price, category, dimensions, picture } =
    body;

  console.log({ body });

  //   create
  const data = await dbRequest("furniture", "insertOne", {
    document: {
      name: name,
      description: description,
      details: details,
      price: price,
      category: category,
      dimensions: dimensions,
      picture: picture,
    },
  });

  //   response
  return Response.json(data);
}
