import { NextResponse } from "next/server";

let users = [];

export async function POST(request) {
  const body = await request.json(); 

  const { name, email, password, role } = body;
  if (!name?.trim() || !email?.trim() || !password?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and password are required" },
      { status: 400 }
    );
  }
  
  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    return NextResponse.json({ error: "Crop name required" }, { status: 400 })
    }

  users.push({name, email, password, role});
  return NextResponse.json({ message: "User Signed in" });


}