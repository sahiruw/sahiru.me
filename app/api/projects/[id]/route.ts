import { NextResponse } from "next/server";
import { projects } from "../projects"; // Replace with your data source

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const { id } = params;

  // Convert the id to a number and find the project
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return NextResponse.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: project }, { status: 200 });
}
