"use client";

import Image from "next/image";
import { ugcItems } from "@/lib/data";
import { ShoppingCart } from "lucide-react";

export default function UGCPage() {
  return (
    <div className="w-full">
      <header className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-8 border border-white" />
          <span className="text-xs font-black uppercase tracking-[0.3em]">Division Three</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">UGC Gallery</h1>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {ugcItems.map((item) => (
          <div key={item.id} className="border border-[#1a1a1a] bg-[#0c0c0c] group">
            <div className="relative aspect-square bg-[#111] overflow-hidden">
               <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-contain p-4 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="p-4 border-t border-[#1a1a1a]">
              <h3 className="text-sm font-black uppercase tracking-tight mb-2 truncate">{item.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#666]">{item.price} R$</span>
                <a 
                  href={item.catalogUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#666] hover:text-white transition-colors"
                >
                  <ShoppingCart size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
