import { NextResponse } from "next/server";
import { projects } from "./projects";

// To handle a GET request to /api
interface GetRequest {
    url: string;
}

export async function GET(request: GetRequest): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const count = searchParams.get('count');
    const numProjects = count ? parseInt(count, 10) : projects.length;

    return NextResponse.json({ message: projects.slice(0, numProjects) }, { status: 200 });
}
