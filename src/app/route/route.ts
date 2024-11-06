import { NextResponse } from "next/server";

// /route
export async function GET() {
    return NextResponse.json([
        {
            id: 1,
            name: "John Doe",
        },
        {
            id: 2,
            name: "Jane Doe",
        },
        {
            id: 3,
            name: "Jim Doe",
        }
    ]);
}
