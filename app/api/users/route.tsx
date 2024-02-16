import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) { // thought `request` params here is not used, but we have to have it to prevent caching
  // in real world: fetch usres from a db

  return NextResponse.json([
    {id: 1, name: 'Lorraine'},
    {id: 2, name: 'Qinyi'},
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  //Validate
  // if invalid, return 400
  // else, return data
  return NextResponse.json({id: 1, name: body.name});
}