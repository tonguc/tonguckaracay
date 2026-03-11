import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { AUDIT_CATEGORIES } from '@/lib/audit-data'
import { calculateScore, getTopIssues } from '@/lib/scoring'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  try {
    const { url, auditId } = await req.json()
    if (!url) return NextResponse.json({ error: 'URL required' }, { status: 400 })

    // Build checklist prompt
    const allItems = AUDIT_CATEGORIES.flatMap(cat =>
      cat.sections.flatMap(sec =>
        sec.items.map(item => ({
          id: item.id,
          category: cat.label,
          item: item.item,
          howTo: item.howTo,
          priority: item.priority,
        }))
      )
    )

    const prompt = `You are a senior UX + SEO auditor. Analyze the website at: ${url}

You have access to general knowledge about website best practices. Based on the URL and domain, make educated assessments for each audit item.

For each item below, respond with ONLY a JSON object where keys are item IDs and values are one of:
"Pass", "Partial", "Fail", or "N/A"

Audit items:
${allItems.map(i => `${i.id}: [${i.category}] ${i.item}`).join('\n')}

Rules:
- "Pass" = clearly meets the standard
- "Partial" = partially meets or unclear
- "Fail" = clearly does not meet
- "N/A" = not applicable for this site type
- Be realistic and slightly conservative (not every site passes everything)
- Respond with ONLY the JSON object, no other text`

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }],
    })

    const text = message.content[0].type === 'text' ? message.content[0].text : '{}'

    let results: Record<string, string> = {}
    try {
      const clean = text.replace(/```json\n?|\n?```/g, '').trim()
      results = JSON.parse(clean)
    } catch {
      return NextResponse.json({ error: 'Failed to parse AI response' }, { status: 500 })
    }

    const scores    = calculateScore(results as any)
    const topIssues = getTopIssues(results as any)

    return NextResponse.json({ results, scores, topIssues })

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
