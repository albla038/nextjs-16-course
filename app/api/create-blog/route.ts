import { NextResponse } from "next/server";

export async function POST() {
  console.log("Hello from the server test");

  return NextResponse.json({
    success: true,
  });
}
