const URL = process.env.UPSTASH_REDIS_REST_URL
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN

async function redis(command: string, ...args: string[]) {
  if (!URL || !TOKEN) throw new Error('not-configured')

  const path = [command, ...args].map(encodeURIComponent).join('/')
  const res = await fetch(`${URL}/${path}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    cache: 'no-store',
  })
  if (!res.ok) throw new Error('redis-error')
  const { result } = await res.json()
  return result
}

export async function GET() {
  try {
    const [countResult, rawSigners] = await Promise.all([
      redis('GET', 'hjp:petition:count'),
      redis('LRANGE', 'hjp:signatures', '0', '11'),
    ])
    const count = parseInt(countResult ?? '0', 10) || 0
    const recent = (Array.isArray(rawSigners) ? rawSigners : [])
      .map((s: string) => {
        try {
          const { name, city, ts } = JSON.parse(s)
          return { name: (name as string).split(' ')[0], city, ts }
        } catch { return null }
      })
      .filter(Boolean)
    return Response.json({ count, ok: true, recent })
  } catch {
    return Response.json({ count: 0, ok: false, recent: [] })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = (body.name ?? '').toString().trim()
    const city = (body.city ?? '').toString().trim()

    if (!name || !city) {
      return Response.json({ error: 'Name and city are required' }, { status: 400 })
    }

    const count = await redis('INCR', 'hjp:petition:count')

    const entry = JSON.stringify({ name, city, ts: new Date().toISOString() })
    await redis('LPUSH', 'hjp:signatures', entry)

    return Response.json({ success: true, count: Number(count) })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'unknown'
    if (msg === 'not-configured') {
      return Response.json(
        {
          error:
            'Petition storage not configured. Add UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to your Vercel environment variables.',
        },
        { status: 503 }
      )
    }
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
