import { NextResponse } from "next/server";
import { projects } from "./projects";

// To handle a GET request to /api
export async function GET(request: Request): Promise<NextResponse> {
    const url = new URL(request.url); // Use URL to parse the request URL
    const count = url.searchParams.get('count'); // Extract query parameters
    const numProjects = count ? parseInt(count, 10) : projects.length;

    return NextResponse.json({ message: projects.slice(0, numProjects) }, { status: 200 });
}
