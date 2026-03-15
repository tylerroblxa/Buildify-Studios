"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { studioConfig } from "@/lib/data";

const divisions = [
  { name: "Original Games", href: "/Games", desc: "Native experiences built by our core engineering team." },
  { name: "Global Investments", href: "/Investing", desc: "Fueling the growth of ambitious metaverse developers." },
  { name: "UGC Works", href: "/UGC", desc: "Strategic digital fashion and limited accessories." }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-px w-12 bg-white mb-8" />
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Buildify <br /> Studios
          </h1>
          <p className="text-[#666] text-lg max-w-md leading-relaxed uppercase font-semibold tracking-tight">
            {studioConfig.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start lg:items-end gap-6"
        >
          <Link href="/Games" className="geo-button w-full lg:w-auto text-center px-12 py-5 text-lg">
            Our Portfolio
          </Link>
          <a
            href={studioConfig.socials.discord}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#666] hover:text-white transition-colors"
          >
            Connect via Discord &crarr;
          </a>
        </motion.div>
      </div>

      <div className="h-px bg-[#1a1a1a] w-full mb-12" />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 border-l border-[#1a1a1a]"
      >
        {divisions.map((div, i) => (
          <Link key={i} href={div.href} className="group border-r border-b border-[#1a1a1a] p-10 hover:bg-[#0c0c0c] transition-colors relative">
            <span className="absolute top-4 right-6 text-[10px] font-bold text-[#333]">0{i + 1}</span>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:pl-2 transition-all">{div.name}</h3>
            <p className="text-[#444] text-xs font-bold uppercase leading-relaxed group-hover:text-[#666]">
              {div.desc}
            </p>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
