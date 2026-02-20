// app/api/ayurveda/route.ts
import { remediesDB } from "@/app/dashboard/remediesDB";

export async function POST(req: Request) {
  try {
    const { symptoms } = await req.json();

    // Fallback if no symptom matches
    const remedy = remediesDB[symptoms.toLowerCase()] || 
      "Sorry, we don't have a remedy for this symptom.";

    return new Response(JSON.stringify({ remedy }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ remedy: "Failed to fetch remedy. Try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}