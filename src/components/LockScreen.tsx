"use client";

import React, { useEffect, useState } from "react";
import { Lock, ShieldAlert, Wifi, Battery } from "lucide-react";

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9998] bg-[#050505] flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none">
      {/* Background Matrix/Grid Overlay */}
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 crt-scanlines opacity-10 pointer-events-none"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#ccff00]/5 blur-[120px] pointer-events-none"></div>

      {/* Top Status Bar */}
      <div className="flex justify-between items-center text-xs md:text-sm font-mono border-b border-[#1a1a1a] pb-4 z-20">
        <div className="flex items-center gap-2 text-[#ccff00]">
          <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse"></span>
          <span>SYSTEM_SECURED // CORE_ONLINE</span>
        </div>
        <div className="flex items-center gap-4 text-gray-500">
          <div className="flex items-center gap-1">
            <Wifi size={14} className="text-[#ccff00]" />
            <span>NODE_8x_UP</span>
          </div>
          <div className="flex items-center gap-1">
            <span>BAT: 99%</span>
            <Battery size={14} className="text-[#ccff00]" />
          </div>
        </div>
      </div>

      {/* Center Clock / Status */}
      <div className="flex-1 flex flex-col items-center justify-center text-center z-20 my-8">
        {/* Retro Lock Icon */}
        <div className="w-16 h-16 rounded-full border border-[#ccff00]/30 flex items-center justify-center bg-[#ccff00]/5 mb-6 border-glow shadow-[0_0_15px_rgba(204,255,0,0.05)] animate-pulse">
          <Lock className="text-[#ccff00]" size={24} />
        </div>

        {/* Large Time Display */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#f0f0f0] font-mono text-glow-strong select-all">
          {time || "00:00:00"}
        </h1>
        <p className="text-sm md:text-lg text-gray-500 font-mono mt-2 tracking-widest uppercase">
          {date || "LOADING DATE"}
        </p>

        {/* Terminal warning notice */}
        <div className="mt-8 max-w-sm border border-red-950 bg-red-950/20 px-4 py-3 rounded text-[11px] font-mono text-red-400 flex items-center gap-3">
          <ShieldAlert size={16} className="shrink-0 text-red-500" />
          <div className="text-left leading-relaxed">
            RESTRICTED ACCESS: Unauthorized access is prohibited. Terminal tracking enabled.
          </div>
        </div>
      </div>

      {/* Bottom unlock section */}
      <div className="flex flex-col items-center justify-center z-20 gap-4 border-t border-[#1a1a1a] pt-6">
        <button
          onClick={onUnlock}
          className="px-8 py-3.5 bg-black border border-[#ccff00] text-[#ccff00] text-xs font-mono uppercase tracking-[0.2em] rounded hover:bg-[#ccff00] hover:text-black hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] active:scale-95 transition-all duration-300 cursor-pointer"
        >
          ENTER SYSTEM
        </button>
        <p className="text-[10px] text-gray-600 font-mono tracking-wider">
          PRESS ANY KEY OR CLICK TO MOUNT INTERACTIVE SHELL
        </p>
      </div>
    </div>
  );
}
