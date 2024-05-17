import { nanoid } from "nanoid";
import { dbRequest } from "../../furnitures/dbrequest";

// delete

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const data = await dbRequest("orders", "deleteOne", {
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
  const { items, totalprice } = body;

  //   create
  const data = await dbRequest("orders", "updateOne", {
    filter: { _id: { $oid: id } },
    update: {
      totalprice: totalprice,
      items: {
        items,
      },
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
  const { documents } = await dbRequest("orders", "findOne", _id);
  return Response.json(documents);
}
