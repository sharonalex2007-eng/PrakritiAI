// app/api/ayurveda/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "API removed. Use client-side remediesDB." });
}