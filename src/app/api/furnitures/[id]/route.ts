import { dbRequest } from "../dbrequest";
import slugify from "slugify";
import { nanoid } from "nanoid";

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
  const data = await dbRequest("furniture", "updateOne", {
    filter: { _id: { $oid: id } },
    update: {
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

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const _id = { $oid: id };
  const { documents } = await dbRequest("furniture", "findOne", _id);
  return Response.json(documents);
}
