import OpenAI from 'openai';

export async function POST(request: Request) {
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const { messages } = await request.json();
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are the AI Forge Strategist. Your goal is to sell DFW contractors the $497 Profit Leak Audit. Be direct, professional, and do not offer discounts. You must collect their Name, Email, and Phone Number before concluding.',
        },
        ...messages,
      ],
      temperature: 0.7,
    });
    return Response.json(response.choices[0].message);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    return Response.json({ error: message }, { status: 500 });
  }
}
