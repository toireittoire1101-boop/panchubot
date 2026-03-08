import { NextResponse } from "next/server";

let memory: any[] = [];

export async function GET() {
  return NextResponse.json(memory);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    memory.push(data);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
