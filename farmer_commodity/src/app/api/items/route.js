import { NextResponse } from "next/server";

let items = [];


  export async function GET() {
  return NextResponse.json(items.count()); 
}
