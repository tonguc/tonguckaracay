import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const correct = process.env.SQUAD_PASSWORD;
  if (!correct) return NextResponse.json({ ok: false }, { status: 500 });
  return NextResponse.json({ ok: password === correct });
}
