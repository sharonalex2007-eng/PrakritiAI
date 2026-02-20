export async function POST(req: Request) {
  const { symptoms } = await req.json();

  const remediesDB: { [key: string]: string } = {
    fever: "🌿 Drink warm water, rest, and take ginger tea.",
    headache: "🌿 Apply cold compress, meditate, drink plenty of water.",
    cold: "🌿 Steam inhalation, turmeric milk, rest.",
    cough: "🌿 Honey, warm water, ginger tea.",
    stress: "🌿 Deep breathing, meditation, yoga, walk outside."
  };

  const remedy = remediesDB[symptoms.toLowerCase()] || "Sorry, no remedy available.";

  return new Response(JSON.stringify({ remedy }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}