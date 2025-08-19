import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Crop from "@/models/lists";

export async function POST(request) {
  await connectDB();
  const body = await request.json(); 

  const {name,price, available } = body;
if (!name.trim() || !price.trim() || !price.trim()) {
    return NextResponse.json(
      { error: "crop is required" },
      { status: 400 }
    );
  }

  const crop = new Crop({ name, price, available });
  await crop.save();

  return NextResponse.json({ message: "Crop added" });
}

export async function GET() {
  await connectDB();
  const crops = await Crop.find({});
  return NextResponse.json(crops);
}
