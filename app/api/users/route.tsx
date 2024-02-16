import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) { // `request` params here is to prevent caching
  // in real world: fetch usres from a db

  return NextResponse.json([
    {id: 1, name: 'Lorraine'},
    {id: 2, name: 'Qinyi'},
  ]);
}