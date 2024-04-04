import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  console.log(`Content-Length: ${req.headers.get("Content-Length")}`)
  return new Response()
}
