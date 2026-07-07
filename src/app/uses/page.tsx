"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Terminal, Laptop, Camera } from "lucide-react";

export default function UsesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] font-mono p-6 md:p-12 relative crt-screen">
      <div className="absolute inset-0 grid-background pointer-events-none opacity-20"></div>
      <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-10"></div>

      <div className="max-w-xl mx-auto space-y-10 relative z-10">
        {/* Back navigation */}
        <div className="flex justify-between items-center border-b border-[#222] pb-4">
          <Link href="/" className="text-gray-500 hover:text-[#ccff00] flex items-center gap-2 text-xs uppercase font-bold">
            <ArrowLeft size={14} /> Back to System
          </Link>
          <div className="text-xs text-[#ccff00] font-bold">USES_CONFIG_LOADED</div>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            HARDWARE_<span className="text-[#ccff00]">USES</span>
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Gear, software, settings, and workspace environment specifications.
          </p>
        </div>

        {/* Categories List */}
        <div className="space-y-6 text-xs md:text-sm text-gray-300 leading-relaxed border-t border-[#111] pt-6">
          <p>
            An index mapping of developer gears and configuration parameters.
          </p>
          
          <div className="space-y-6">
            {/* Category 1 */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#ccff00] uppercase tracking-wider flex items-center gap-1.5">
                <Laptop size={14} /> [01] Workstation Hardware
              </h3>
              <ul className="list-inside list-disc pl-4 space-y-1.5 text-gray-400 text-xs">
                <li><strong className="text-white">Processor:</strong> Intel Core i7 (Hexa-Core setup).</li>
                <li><strong className="text-white">Memory:</strong> 16GB Dual-Channel DDR4 RAM.</li>
                <li><strong className="text-white">Storage:</strong> 512GB PCIe NVMe SSD.</li>
                <li><strong className="text-white">Main Rig:</strong> High-performance coding laptop + external 24" IPS monitor.</li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#ccff00] uppercase tracking-wider flex items-center gap-1.5">
                <Terminal size={14} /> [02] Shell & IDE Setup
              </h3>
              <ul className="list-inside list-disc pl-4 space-y-1.5 text-gray-400 text-xs">
                <li><strong className="text-white">Editor:</strong> Visual Studio Code (Custom theme: Nord/Gruvbox).</li>
                <li><strong className="text-white">Shell:</strong> Windows Terminal (WSL2 integration with Ubuntu distro).</li>
                <li><strong className="text-white">Command Prompt:</strong> Zsh configured with Starship prompt theme.</li>
                <li><strong className="text-white">Utilities:</strong> git, docker-compose, tmux for session persistent terminals.</li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#ccff00] uppercase tracking-wider flex items-center gap-1.5">
                <Camera size={14} /> [03] Photography Gear
              </h3>
              <ul className="list-inside list-disc pl-4 space-y-1.5 text-gray-400 text-xs">
                <li><strong className="text-white">Body:</strong> Digital Mirrorless device with manual settings controls.</li>
                <li><strong className="text-white">Lenses:</strong> Prime 50mm f/1.8 (for sharp portrait/street frames).</li>
                <li><strong className="text-white">Workflow:</strong> RAW capture with Adobe Lightroom processing.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-[10px] text-gray-600 tracking-widest pt-8 border-t border-[#111]">
          SYSTEM_LOG_ID: 479e3f46 // CODENAME: CHARITESH-OS
        </footer>
      </div>
    </main>
  );
}
