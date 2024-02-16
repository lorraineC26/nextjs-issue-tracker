import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

// interface Props {
//   params: { id: number };
// }

/** replace props: Props with
 * { params }: Props
 * then further define inline by
 * { params }: params: { id: number }
 * so we dont need the Props interface anymore
 * */
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //in real world: fetch data from a db
  // if not found, return 404 error
  // else return data

  if (params.id > 10) {
    return NextResponse.json({error: 'User not found'}, {status: 404})
  }

  return NextResponse.json({id: 1, name: 'Lorraine'})

}
