"use client";

import { motion } from "framer-motion";
import { studioGames } from "@/lib/data";
import GameCard from "@/components/GameCard";

export default function GamesPage() {
  return (
    <div className="w-full">
      <header className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-8 bg-white" />
          <span className="text-xs font-black uppercase tracking-[0.3em]">Division One</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Native Games</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#1a1a1a] border border-[#1a1a1a]">
        {studioGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
