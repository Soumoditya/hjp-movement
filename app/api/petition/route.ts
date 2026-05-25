import { kv } from '@vercel/kv'
import { NextRequest } from 'next/server'

export async function GET() {
  try {
    const count = (await kv.get<number>('hjp:petition:count')) ?? 0
    return Response.json({ count, ok: true })
  } catch {
    return Response.json({ count: 0, ok: false })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const name = (body.name ?? '').toString().trim()
    const city = (body.city ?? '').toString().trim()

    if (!name || !city) {
      return Response.json({ error: 'Name and city are required' }, { status: 400 })
    }

    const count = await kv.incr('hjp:petition:count')

    await kv.lpush(
      'hjp:signatures',
      JSON.stringify({ name, city, ts: new Date().toISOString() })
    )

    return Response.json({ success: true, count })
  } catch {
    return Response.json(
      { error: 'Storage not ready. Connect Vercel KV in your project dashboard.' },
      { status: 503 }
    )
  }
}
