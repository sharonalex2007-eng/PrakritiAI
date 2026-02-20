import { remediesDB } from "../../dashboard/remediesDB";

export async function POST(req: Request) {
  const { symptoms } = await req.json();

  const remedy = remediesDB[symptoms.toLowerCase()] || "Sorry, no remedy available.";

  return new Response(JSON.stringify({ remedy }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}