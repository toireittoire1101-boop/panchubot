import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { messages, model = "gpt-4.1" } = await req.json();

    const completion = await openai.chat.completions.create({
      model,
      messages,
      stream: false,
    });

    return NextResponse.json({
      reply: completion.choices[0].message,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "AI request failed" }, { status: 500 });
  }
}
