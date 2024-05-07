import { dbRequest } from "../dbrequest";

// delete

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const data = await dbRequest("furniture", "deleteOne", {
    filter: { _id: { $oid: id } },
  });

  return Response.json(data);
}

// update

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  // obtain info from body
  const body = await request.json();
  const { name, description, details, price, category, dimensions, picture } =
    body;

  console.log({ body });

  //   create
  const data = await dbRequest("furniture", "updateOne", {
    filter: { _id: { $oid: id } },
    update: {
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
