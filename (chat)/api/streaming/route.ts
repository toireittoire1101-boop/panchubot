import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { messages, model = "gpt-4.1" } = await req.json();

    const stream = await openai.chat.completions.create({
      model,
      messages,
      stream: true,
    });

    return new Response(stream.toReadableStream(), {
      headers: {
        "Content-Type": "text/event-stream",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Streaming failed" }, { status: 500 });
  }
}
