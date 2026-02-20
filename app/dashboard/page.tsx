"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { remediesDB } from "./remediesDB";

export default function Dashboard() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [randomTip, setRandomTip] = useState("");

  const router = useRouter(); // ✅ added

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFavorites(saved);
    }

    const dailyTips = [
      "Drink warm water first thing in the morning",
      "Practice deep breathing for 5 minutes daily",
      "Add turmeric to your meals for immunity",
      "Take a short walk after meals",
      "Meditate for 10 minutes before sleep"
    ];

    const tip = dailyTips[Math.floor(Math.random() * dailyTips.length)];
    setRandomTip(tip);

  }, []);

  const saveFavorite = (symptom: string) => {
    if (!favorites.includes(symptom)) {
      const newFav = [...favorites, symptom];
      setFavorites(newFav);
      localStorage.setItem("favorites", JSON.stringify(newFav));
      alert(`${symptom.toUpperCase()} saved to favorites 🌿`);
    } else {
      alert(`${symptom.toUpperCase()} is already in favorites`);
    }
  };

  const generateRemedy = () => {
    if (!symptoms.trim()) {
      setResult("Please describe your symptoms first.");
      return;
    }

    setLoading(true);
    setResult("");

    setTimeout(() => {
      const input = symptoms.toLowerCase();
      const foundSymptoms = Object.keys(remediesDB).filter(sym =>
        input.includes(sym)
      );

      if (foundSymptoms.length > 0) {
        const formatted = foundSymptoms
          .map(s => `🌿 ${s.toUpperCase()}\n${remediesDB[s]}`)
          .join("\n\n────────────────────────\n\n");

        setResult(formatted);
      } else {
        setResult(
          "Sorry, we don't have a remedy for this symptom yet. 🌿\nTry describing it differently."
        );
      }
      setLoading(false);
    }, 300);
  };

  const popularSymptoms = ["fever", "headache", "cold", "cough", "stress"];

  const filteredRemedies = searchTerm
    ? Object.keys(remediesDB).filter(sym =>
        sym.includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-[#050510] text-white overflow-hidden px-4">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,_rgba(236,72,153,0.35),_transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,_rgba(168,85,247,0.35),_transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_85%,_rgba(59,130,246,0.30),_transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(20,184,166,0.30),_transparent_40%)]"></div>

      <div className="relative w-full max-w-lg flex flex-col items-center">

        <h1 className="text-4xl mb-6 font-bold text-center">Ayurvedic Intelligence 💚</h1>

        <div className="w-full mb-4 flex flex-wrap gap-2 justify-center">
          {popularSymptoms.map(sym => (
            <button
              key={sym}
              onClick={() => setSymptoms(sym)}
              className="px-3 py-2 bg-purple-500 rounded text-sm hover:bg-purple-600"
            >
              {sym.toUpperCase()}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search symptoms..."
          className="w-full mb-4 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {searchTerm && filteredRemedies.length > 0 && (
          <div className="w-full mb-4 max-w-lg p-2 bg-white/10 rounded border border-white/20 flex flex-wrap gap-1">
            {filteredRemedies.map(sym => (
              <div
                key={sym}
                className="px-2 py-1 bg-green-500 rounded text-xs cursor-pointer hover:bg-green-600"
                onClick={() => setSymptoms(sym)}
              >
                {sym.toUpperCase()}
              </div>
            ))}
          </div>
        )}

        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Describe your symptoms..."
          className="w-full h-40 p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none resize-none"
        />

        <div className="flex justify-center w-full mt-6">
          <button
            onClick={generateRemedy}
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl font-semibold hover:scale-105 transition-all"
          >
            {loading ? "Generating..." : "Get Ayurvedic Remedy ✨"}
          </button>
        </div>

        {result && (
          <>
            <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/20 whitespace-pre-line text-white/90 w-full max-w-lg">
              {result.split("\n\n────────────────────────\n\n").map((block, idx) => {
                const lines = block.split("\n");
                const symptomName = lines[0].replace("🌿 ", "");
                const remedyText = lines.slice(1).join("\n");
                return (
                  <div key={idx} className="mb-4 p-3 bg-white/5 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <strong>{symptomName}</strong>
                      <button
                        onClick={() => saveFavorite(symptomName)}
                        className="px-2 py-1 bg-green-500 rounded text-sm hover:bg-green-600"
                      >
                        Save 🌿
                      </button>
                    </div>
                    <pre className="whitespace-pre-wrap">{remedyText}</pre>
                  </div>
                );
              })}
            </div>

            {/* ✅ Added Premium Completion Button */}
            <div className="mt-6 flex justify-center w-full">
              <button
                onClick={() => router.push("/thank-you")}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.6)] font-semibold"
              >
                Complete Wellness Session ✨
              </button>
            </div>
          </>
        )}

        <div className="max-w-lg mt-6 p-4 rounded-xl bg-white/10 border border-white/20 text-white/90">
          💡 Tip of the day: {randomTip}
        </div>

        {favorites.length > 0 && (
          <div className="max-w-lg mt-6 p-4 rounded-xl bg-white/10 border border-white/20 text-white/90">
            <strong>Saved Favorites 🌿:</strong>
            <ul className="list-disc list-inside mt-2">
              {favorites.map(f => <li key={f}>{f.toUpperCase()}</li>)}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}