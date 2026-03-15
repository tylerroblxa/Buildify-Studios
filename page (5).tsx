"use client";

import { socialLinks } from "@/lib/data";
import { Youtube, Instagram, Facebook, Twitter, Globe, MessageSquare, Music2, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const getIcon = (platform: string) => {
  switch (platform) {
    case 'youtube': return <Youtube size={24} />;
    case 'instagram': return <Instagram size={24} />;
    case 'facebook': return <Facebook size={24} />;
    case 'twitter': return <Twitter size={24} />;
    case 'roblox': return <Globe size={24} />;
    case 'discord': return <MessageSquare size={24} />;
    case 'tiktok': return <Music2 size={24} />;
    default: return <Globe size={24} />;
  }
};

export default function SocialMediaPage() {
  return (
    <div className="w-full">
      <header className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-8 border-2 border-white" />
          <span className="text-xs font-black uppercase tracking-[0.3em]">Network</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">Social Media</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#1a1a1a] border border-[#1a1a1a]">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="group bg-[#0c0c0c] hover:bg-[#111] p-8 flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-8">
              <div className="relative w-16 h-16 border border-[#1a1a1a] bg-[#111] overflow-hidden flex items-center justify-center">
                {link.imageUrl ? (
                  <Image
                    src={link.imageUrl}
                    alt={link.name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-lighten"
                  />
                ) : (
                  <div className="text-[#444] group-hover:text-white transition-colors">
                    {getIcon(link.platform)}
                  </div>
                )}
              </div>
              
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#444] uppercase tracking-widest mb-1 group-hover:text-[#666]">
                  {link.platform}
                </span>
                <span className="text-2xl font-black uppercase tracking-tighter text-white/90">
                  {link.name}
                </span>
                {link.handle && (
                  <span className="text-[10px] font-bold text-[#333] mt-1 group-hover:text-[#444]">
                    {link.handle}
                  </span>
                )}
              </div>
            </div>
            <ArrowUpRight size={20} className="text-[#222] group-hover:text-white transition-colors" />
          </a>
        ))}
      </div>

      <div className="mt-20 p-12 geo-border border-dashed border-2 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-[#444]">Expanding the Network</h3>
        <p className="text-[#333] text-xs font-bold uppercase tracking-widest max-w-md">
          Support Our Social Media Links
        </p>
      </div>
    </div>
  );
}
