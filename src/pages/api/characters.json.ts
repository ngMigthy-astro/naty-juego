// src/pages/api/characters.json.ts
import type { APIRoute } from "astro";
import { CHARACTERS } from "../../data/characters";

export const GET: APIRoute = async ({ url }) => {
  const countParam = url.searchParams.get("count");
  const count = countParam ? parseInt(countParam, 10) : 12;

  // Algoritmo Fisher-Yates para barajar limpiamente
  const shuffled = [...CHARACTERS];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const selected = shuffled.slice(0, count);

  return new Response(
    JSON.stringify({
      totalAvailable: CHARACTERS.length,
      count: selected.length,
      characters: selected,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    },
  );
};
