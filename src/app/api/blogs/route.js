import { NextResponse } from "next/server";
import blogData from "@/data/blogData.json";

export async function GET() {
  return NextResponse.json(blogData);
}
