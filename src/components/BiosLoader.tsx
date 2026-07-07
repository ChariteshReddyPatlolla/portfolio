"use client";

import React, { useEffect, useState, useRef } from "react";

interface BiosLoaderProps {
  onComplete: () => void;
}

export default function BiosLoader({ onComplete }: BiosLoaderProps) {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const biosScript = [
    "AMIBIOS (C) 2026 American Megatrends, Inc.",
    "CHARITESH-OS BIOS ROM V6.0G - STAGE 1 BOOT",
    "CPU: AMD Ryzen Threadripper PRO 5995WX @ 4.5GHz",
    "Speed: 4500MHz (Cores: 64, Threads: 128)",
    "L1 Cache: 4MB, L2 Cache: 32MB, L3 Cache: 256MB",
    " ",
    "Memory Test: 131072MB OK (DDR5-5600, Dual Channel)",
    "System RAM Configuration: ECC Registered",
    "Initializing System Bus Controller ... Done",
    "Initializing PCI Express Hub ... Done",
    "Detecting Storage Devices:",
    "  Primary Master: NVMe SSD 2TB (Model: CHAR-OS-VSSD)",
    "  Secondary Master: None",
    " ",
    "Checking USB Hub Status:",
    "  Hub 01: 1 Keyboard, 1 Mouse, 1 HD Camera attached",
    "  Hub 02: OB-Obscura Photography Device detected",
    " ",
    "Loading AI Core Engine (TensorFlow/PyTorch Node) ... OK",
    "Loading Distributed Concurrency Drivers ... OK",
    "Accessing Neural Network Weights (CNN/LSTM) ... OK",
    "Pre-loading CUDA Toolkit 12.4 ... OK",
    " ",
    "Host IP Address Resolved: 127.0.0.1",
    "Network Status: SECURE WORKSTATION CONNECTED (1Gbps)",
    "Booting System Shell [CHARITESH-SHELL] ...",
    "INITIALIZATION COMPLETE. READY TO EXECUTE.",
  ];

  useEffect(() => {
    let currentLineIndex = 0;
    const interval = setInterval(() => {
      if (currentLineIndex < biosScript.length) {
        setLines((prev) => [...prev, biosScript[currentLineIndex]]);
        currentLineIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1200); // short pause before complete
      }
    }, 150);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") {
        clearInterval(interval);
        onComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#000080] text-white font-mono p-6 md:p-16 select-none overflow-hidden flex flex-col justify-between">
      {/* Blue screen background style from original, or scanline grid */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-25 crt-scanlines"></div>
      
      <div className="flex flex-col h-full max-w-4xl mx-auto relative z-20">
        {/* Header */}
        <div className="flex justify-between items-start mb-6 border-b border-white/30 pb-3">
          <div className="text-lg md:text-xl font-bold tracking-wider">CHARITESH BIOS v6.00PG</div>
          <div className="text-xs md:text-sm font-semibold opacity-80 uppercase">Energy Star Ally</div>
        </div>

        {/* Console output */}
        <div 
          ref={containerRef}
          className="flex-1 overflow-y-auto text-sm md:text-base leading-relaxed whitespace-pre-wrap pr-4 scrollbar-none"
        >
          {lines.map((line, idx) => (
            <div key={idx} className="min-h-[1.5rem] tracking-wide">
              {line}
            </div>
          ))}
          <span className="inline-block w-2 h-4 bg-white ml-1 cursor-blink" />
        </div>

        {/* Footer */}
        <div className="mt-6 pt-3 border-t border-white/30 flex justify-between items-center text-xs opacity-75">
          <div>Press ESC or ENTER to bypass system check</div>
          <div>{new Date().toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
}
