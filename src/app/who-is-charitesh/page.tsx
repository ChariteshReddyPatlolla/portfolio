"use client";

import React from "react";
import Link from "next/link";
import { Monitor, ArrowLeft, HelpCircle } from "lucide-react";

export default function WhoIsCharitesh() {
  const qa = [
    {
      q: "Who is Patlolla Charitesh Reddy?",
      a: "I am a Computer Science undergraduate at the Indian Institute of Information Technology, Vadodara, specializing in Artificial Intelligence, Machine Learning, and Distributed Systems. I build intelligent systems that bridge deep learning pipelines with high-throughput backend services."
    },
    {
      q: "What is your core engineering philosophy?",
      a: "I believe that AI should not live in isolation. The most impactful systems are those where advanced predictive models (like CNNs, LSTMs, and YOLO object detection) are backed by robust, low-latency concurrent systems that scale gracefully."
    },
    {
      q: "What kind of projects do you enjoy building?",
      a: "I enjoy building vision-based real-time systems (e.g., driver drowsiness warning systems and sign language converters) as well as data-heavy backends (e.g., financial dashboard pipelines and time-series forecasting networks). I like working with Python, OpenCV, TensorFlow, and Flask."
    },
    {
      q: "What are your future aspirations?",
      a: "I aim to tackle complex scalability challenges at the intersection of AI inference and distributed data processing. I want to build systems that process high-frequency streaming data while running model inferences at the edge with minimum latency."
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] font-mono p-6 md:p-12 relative crt-screen">
      <div className="absolute inset-0 grid-background pointer-events-none opacity-20"></div>
      <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-10"></div>

      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        {/* Back navigation */}
        <div className="flex justify-between items-center border-b border-[#222] pb-4">
          <Link href="/" className="text-gray-500 hover:text-[#ccff00] flex items-center gap-2 text-xs uppercase font-bold">
            <ArrowLeft size={14} /> Back to System
          </Link>
          <div className="text-xs text-[#ccff00] font-bold">QA_SHELL_ACTIVE</div>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            WHO_IS_<span className="text-[#ccff00]">CHARITESH</span>?
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Mapping identity parameters. Decrypting developer logs.
          </p>
        </div>

        {/* Q&A Cards */}
        <div className="space-y-6">
          {qa.map((item, idx) => (
            <div key={idx} className="bg-[#0a0a0a] border border-[#222] hover:border-[#ccff00]/40 transition-all p-6 rounded relative">
              <div className="absolute top-4 right-4 text-gray-800">
                <HelpCircle size={32} />
              </div>
              <h3 className="text-sm font-bold text-[#ccff00] uppercase tracking-wider mb-2 flex items-center gap-2">
                <span>[Q-{idx + 1}]</span> {item.q}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed pl-4 border-l border-[#ccff00]/30 mt-3">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center text-[10px] text-gray-600 tracking-widest pt-8 border-t border-[#111]">
          SYSTEM_LOG_ID: 479e3f46 // CODENAME: CHARITESH-OS
        </footer>
      </div>
    </main>
  );
}
