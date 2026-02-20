import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { symptoms } = await req.json();

  try {
    const prompt = `
You are a world-class Ayurvedic doctor.
Provide a detailed Ayurvedic treatment for the following symptoms: "${symptoms}".
Include:
- Herbs or natural remedies
- Lifestyle recommendations
- Dosage if applicable
- Diet suggestions
Make the response clear and easy for a user to follow.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const remedy = response.choices[0].message.content;

    return new Response(JSON.stringify({ remedy }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ remedy: "Failed to generate remedy. Try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
