"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers, ShieldCheck } from "lucide-react";

export default function StackPage() {
  const stack = [
    {
      category: "Languages",
      items: ["Python", "Java", "JavaScript (ES6+)", "SQL (PostgreSQL / SQLite)"]
    },
    {
      category: "AI / Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "CNN architectures (VGGNet)", "YOLO models", "LSTM networks"]
    },
    {
      category: "Systems & Architecture",
      items: ["Distributed Systems theory", "API Design (RESTful paradigms)", "Concurrency concepts", "Caching mechanisms"]
    },
    {
      category: "Web & Backend",
      items: ["Flask Framework", "REST APIs", "HTML5", "CSS3 / Custom layouts", "React (basics / framework layout)"]
    },
    {
      category: "DevOps & Developer Tools",
      items: ["Git (Version Control)", "Docker (Containerization)", "Linux (Bash scripting / Shell workflows)", "VS Code workspace config"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] font-mono p-6 md:p-12 relative crt-screen">
      <div className="absolute inset-0 grid-background pointer-events-none opacity-20"></div>
      <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-10"></div>

      <div className="max-w-2xl mx-auto space-y-12 relative z-10">
        {/* Back navigation */}
        <div className="flex justify-between items-center border-b border-[#222] pb-4">
          <Link href="/" className="text-gray-500 hover:text-[#ccff00] flex items-center gap-2 text-xs uppercase font-bold">
            <ArrowLeft size={14} /> Back to System
          </Link>
          <div className="text-xs text-[#ccff00] font-bold">STACK_MAP_RESOLVED</div>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight flex items-center gap-2.5">
            TECH_<span className="text-[#ccff00]">STACK</span> <Layers className="text-[#ccff00] animate-bounce" size={24} />
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            A map of languages, libraries, platforms, and toolchains I work with.
          </p>
        </div>

        {/* Stack list */}
        <div className="space-y-8 border-t border-[#111] pt-6">
          {stack.map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></span>
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2 pl-3">
                {cat.items.map((item, itemIdx) => (
                  <span 
                    key={itemIdx} 
                    className="px-3 py-1.5 border border-[#1a1a1a] bg-black/60 rounded text-xs text-gray-400 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* verification seal */}
        <div className="border border-green-950 bg-green-950/10 p-4 rounded text-xs text-green-500 flex items-center gap-3">
          <ShieldCheck size={18} />
          <span>All packages verified. Compilations run natively under Linux environments.</span>
        </div>

        {/* Footer */}
        <footer className="text-center text-[10px] text-gray-600 tracking-widest pt-8 border-t border-[#111]">
          SYSTEM_LOG_ID: 479e3f46 // CODENAME: CHARITESH-OS
        </footer>
      </div>
    </main>
  );
}
