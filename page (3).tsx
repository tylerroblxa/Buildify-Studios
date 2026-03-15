"use client";

import { motion } from "framer-motion";

export default function BuyingGamesPage() {
  return (
    <div className="w-full">
      <header className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-8 border border-[#333]" />
          <span className="text-xs font-black uppercase tracking-[0.3em]">Division Four</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Acquisitions</h1>
      </header>

      <div className="geo-card p-12 text-center border-dashed border-2 border-[#1a1a1a]">
        <p className="text-[#444] text-xs font-bold uppercase tracking-widest">
          This division is currently under strategic evaluation.
        </p>
      </div>
    </div>
  );
}
