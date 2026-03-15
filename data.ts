import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const universeIds = searchParams.get("universeIds"); 

  if (!universeIds) {
    return NextResponse.json({ error: "Missing universeIds parameter" }, { status: 400 });
  }

  try {
    const detailsResponse = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeIds}`, {
      next: { revalidate: 60 } 
    });
    
    if (!detailsResponse.ok) {
      throw new Error(`Roblox API Error: ${detailsResponse.status}`);
    }

    const detailsData = await detailsResponse.json();

    if (!detailsData.data) {
        return NextResponse.json({ error: "Invalid response from Roblox API" }, { status: 500 });
    }

    const results: Record<string, { visits: number, playing: number }> = {};
    
    detailsData.data.forEach((game: any) => {
      results[game.id] = {
        visits: game.visits || 0,
        playing: game.playing || 0,
      };
    });

    return NextResponse.json({ data: results });
  } catch (error) {
    console.error("Roblox API Proxy Error:", error);
    return NextResponse.json({ error: "Failed to fetch from Roblox" }, { status: 500 });
  }
}
