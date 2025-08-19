import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/users";

export async function POST(request) {
  await connectDB();
  const body = await request.json();
  const { name, email, password, role } = body;

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json({ error: "Email already exists" }, { status: 400 });
  }

  const user = new User({ name, email, password, role });
  await user.save();
  return NextResponse.json({ message: "User registered", user });


}