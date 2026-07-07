"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

export default function NowPage() {
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
          <div className="text-xs text-[#ccff00] font-bold">NOW_NODE_MOUNTED</div>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight flex items-center gap-2">
            CURRENT_FOCUS <RefreshCw size={24} className="text-[#ccff00] animate-spin" style={{ animationDuration: "12s" }} />
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Last system status update: July 2026.
          </p>
        </div>

        {/* Main description log */}
        <div className="space-y-6 text-xs md:text-sm text-gray-300 leading-relaxed border-t border-[#111] pt-6">
          <p>
            This is a <strong>/now</strong> page, inspired by Derek Sivers. It details what I am focusing on at this exact point in my career.
          </p>
          
          <div className="space-y-4">
            <div className="border border-[#111] bg-black/40 p-4 rounded">
              <h3 className="text-xs font-bold text-[#ccff00] uppercase tracking-wider mb-2">&gt; ACADEMICS @ IIIT VADODARA</h3>
              <p className="text-gray-400 text-xs">
                Currently pursuing my B.Tech in Computer Science and Engineering. I am focusing on theory relating to Database Management, Operating Systems, and Concurrent programming.
              </p>
            </div>

            <div className="border border-[#111] bg-black/40 p-4 rounded">
              <h3 className="text-xs font-bold text-[#ccff00] uppercase tracking-wider mb-2">&gt; ALGORITHMS & COMPETITIVE CODING</h3>
              <p className="text-gray-400 text-xs">
                Consistently active on LeetCode and Codeforces. Working on refining DP formulations, graph traversals, and segment trees to push my competitive ratings further.
              </p>
            </div>

            <div className="border border-[#111] bg-black/40 p-4 rounded">
              <h3 className="text-xs font-bold text-[#ccff00] uppercase tracking-wider mb-2">&gt; DEEP LEARNING APPLICATIONS</h3>
              <p className="text-gray-400 text-xs">
                Refining model inference setups. Building light real-time classifiers with optimized memory configurations for edge devices (such as Raspberry Pi/Jetson Nano units).
              </p>
            </div>

            <div className="border border-[#111] bg-black/40 p-4 rounded">
              <h3 className="text-xs font-bold text-[#ccff00] uppercase tracking-wider mb-2">&gt; CAPTURING FRAMES</h3>
              <p className="text-gray-400 text-xs">
                Outside of terminal sessions, I capture street and architectural frames as part of IIIT Vadodara's Obscura Photography Club.
              </p>
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
