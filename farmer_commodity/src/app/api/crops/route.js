import { NextResponse } from "next/server";

let crops = [];

export async function POST(request) {
  const body = await request.json(); 

  const {crop } = body;
  if (!crop?.trim() ) {
    return NextResponse.json(
      { error: "crop is required" },
      { status: 400 }
    );
  }
  crops.push(crop);

  return NextResponse.json({ message: "Crop added" });
}

  export async function GET() {
  return NextResponse.json(crops); 
}
