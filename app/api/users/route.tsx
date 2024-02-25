import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  // thought `request` params here is not used, but we have to have it to prevent caching
  // in real world: fetch usres from a db

  return NextResponse.json([
    { id: 1, name: "Lorraine" },
    { id: 2, name: "Qinyi" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  // if invalid, return 400
  // else, return data

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 }); // usually use 201 to indicate an obj is created
}
