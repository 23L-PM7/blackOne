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
