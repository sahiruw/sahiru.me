import { NextResponse } from "next/server";
import { projects } from "./projects";

// To handle a GET request to /api
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const count = searchParams.get('count');
    const numProjects = count ? parseInt(count, 10) : projects.length;

    return NextResponse.json({ message: projects.slice(0, numProjects) }, { status: 200 });
}
