// app/api/ayurveda/route.ts
import { remediesDB } from "../../dashboard/remediesDB";

export async function POST(req: Request) {
  try {
    // Parse JSON from request
    const { symptoms } = await req.json();

    // Validate input
    if (!symptoms || typeof symptoms !== "string") {
      return new Response(
        JSON.stringify({ remedy: "Please provide a symptom as a string." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Lookup in remediesDB (case-insensitive)
    const key = symptoms.replace(/\s+/g, "").toLowerCase(); // remove spaces, lowercase
    const remedy = remediesDB[key] || "Sorry, we don't have a remedy for this symptom yet.";

    // Return JSON response
    return new Response(JSON.stringify({ remedy }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("Error in Ayurvedic API:", err);
    return new Response(
      JSON.stringify({ remedy: "Something went wrong. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}