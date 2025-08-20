import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Item from "@/models/crops";

export async function POST(request) {
  await connectDB();
  const { crop } = await request.json();

if (!crop?.trim()) {
  return NextResponse.json(
    { error: "crop is required" },
    { status: 400 }
  );
}

const newItem = new Item({ crop });
await newItem.save();

return NextResponse.json({ message: "Crop added" });
}

export async function GET() {
  await connectDB();
  const crops = await Item.find({});
  return NextResponse.json(crops);
}