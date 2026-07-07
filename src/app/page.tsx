"use client";

import React, { useState } from "react";
import Link from "next/link";
import BiosLoader from "@/components/BiosLoader";
import LockScreen from "@/components/LockScreen";
import SoundtrackPlayer from "@/components/SoundtrackPlayer";
import Window from "@/components/Window";
import Terminal from "@/components/Terminal";
import PortfolioSection from "@/components/PortfolioSection";
import { Terminal as TerminalIcon, FileText, Code2, FolderGit, Monitor, Calendar } from "lucide-react";

type Stage = "BIOS" | "LOCK" | "DESKTOP";

export default function Home() {
  const [stage, setStage] = useState<Stage>("BIOS");
  const [openApps, setOpenApps] = useState<{
    terminal: boolean;
    about: boolean;
    skills: boolean;
    projects: boolean;
  }>({
    terminal: true, // open by default to look awesome
    about: false,
    skills: false,
    projects: false,
  });

  const toggleApp = (app: keyof typeof openApps) => {
    setOpenApps((prev) => ({ ...prev, [app]: !prev[app] }));
  };

  if (stage === "BIOS") {
    return <BiosLoader onComplete={() => setStage("LOCK")} />;
  }

  if (stage === "LOCK") {
    return <LockScreen onUnlock={() => setStage("DESKTOP")} />;
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] font-mono relative crt-screen">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-background pointer-events-none opacity-20 z-0"></div>
      <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-10 z-0"></div>

      {/* Cyber OS Top Menu Bar */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-[#222] px-4 py-2.5 flex items-center justify-between text-xs select-none">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-black text-[#ccff00] tracking-wider text-sm flex items-center gap-1.5 hover:opacity-80">
            <Monitor size={14} />
            CHARITESH-OS
          </Link>

          {/* Nav links to sub-routes */}
          <nav className="hidden md:flex items-center gap-4 text-gray-500 font-bold uppercase">
            <Link href="/who-is-charitesh" className="hover:text-[#ccff00] transition-colors">Who is Charitesh?</Link>
            <Link href="/guestbook" className="hover:text-[#ccff00] transition-colors">Guestbook</Link>
            <Link href="/blog" className="hover:text-[#ccff00] transition-colors">Blog</Link>
            <Link href="/now" className="hover:text-[#ccff00] transition-colors">Now</Link>
            <Link href="/uses" className="hover:text-[#ccff00] transition-colors">Uses</Link>
            <Link href="/stack" className="hover:text-[#ccff00] transition-colors">Stack</Link>
          </nav>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          <SoundtrackPlayer />
          
          <div className="flex items-center gap-1.5 text-gray-400 bg-black border border-[#222] px-3 py-1.5 rounded">
            <Calendar size={12} className="text-[#ccff00]" />
            <span>SHELL_ONLINE</span>
          </div>
        </div>
      </header>

      {/* Mobile Nav Menu (Visible only on small screens below top bar) */}
      <div className="md:hidden w-full bg-[#050505] border-b border-[#222] py-2 px-4 flex flex-wrap gap-x-4 gap-y-1 text-[10px] justify-center font-bold text-gray-500 z-40 relative uppercase">
        <Link href="/who-is-charitesh" className="hover:text-[#ccff00]">Who is Charitesh?</Link>
        <Link href="/guestbook" className="hover:text-[#ccff00]">Guestbook</Link>
        <Link href="/blog" className="hover:text-[#ccff00]">Blog</Link>
        <Link href="/now" className="hover:text-[#ccff00]">Now</Link>
        <Link href="/uses" className="hover:text-[#ccff00]">Uses</Link>
        <Link href="/stack" className="hover:text-[#ccff00]">Stack</Link>
      </div>

      {/* Cyber Desktop Area */}
      <section className="relative min-h-[85vh] w-full p-6 flex flex-col justify-between overflow-hidden">
        {/* Desktop Icons Grid */}
        <div className="grid grid-cols-1 gap-4 max-w-[150px] relative z-10 select-none">
          {/* Terminal Icon */}
          <button 
            onClick={() => toggleApp("terminal")}
            className="flex flex-col items-center p-3 border border-transparent hover:border-[#ccff00]/30 hover:bg-[#ccff00]/5 transition-all text-center rounded group cursor-pointer"
          >
            <div className="w-12 h-12 border border-[#ccff00]/25 rounded flex items-center justify-center bg-black/60 group-hover:border-[#ccff00] shadow-[0_0_10px_rgba(204,255,0,0.05)] transition-all">
              <TerminalIcon className="text-[#ccff00]" size={20} />
            </div>
            <span className="text-[10px] text-gray-400 font-bold tracking-widest mt-2 uppercase">terminal.app</span>
          </button>

          {/* About Icon */}
          <button 
            onClick={() => toggleApp("about")}
            className="flex flex-col items-center p-3 border border-transparent hover:border-[#ccff00]/30 hover:bg-[#ccff00]/5 transition-all text-center rounded group cursor-pointer"
          >
            <div className="w-12 h-12 border border-[#ccff00]/25 rounded flex items-center justify-center bg-black/60 group-hover:border-[#ccff00] shadow-[0_0_10px_rgba(204,255,0,0.05)] transition-all">
              <FileText className="text-[#ccff00]" size={20} />
            </div>
            <span className="text-[10px] text-gray-400 font-bold tracking-widest mt-2 uppercase">about.txt</span>
          </button>

          {/* Skills Icon */}
          <button 
            onClick={() => toggleApp("skills")}
            className="flex flex-col items-center p-3 border border-transparent hover:border-[#ccff00]/30 hover:bg-[#ccff00]/5 transition-all text-center rounded group cursor-pointer"
          >
            <div className="w-12 h-12 border border-[#ccff00]/25 rounded flex items-center justify-center bg-black/60 group-hover:border-[#ccff00] shadow-[0_0_10px_rgba(204,255,0,0.05)] transition-all">
              <Code2 className="text-[#ccff00]" size={20} />
            </div>
            <span className="text-[10px] text-gray-400 font-bold tracking-widest mt-2 uppercase">skills.json</span>
          </button>

          {/* Projects Icon */}
          <button 
            onClick={() => toggleApp("projects")}
            className="flex flex-col items-center p-3 border border-transparent hover:border-[#ccff00]/30 hover:bg-[#ccff00]/5 transition-all text-center rounded group cursor-pointer"
          >
            <div className="w-12 h-12 border border-[#ccff00]/25 rounded flex items-center justify-center bg-black/60 group-hover:border-[#ccff00] shadow-[0_0_10px_rgba(204,255,0,0.05)] transition-all">
              <FolderGit className="text-[#ccff00]" size={20} />
            </div>
            <span className="text-[10px] text-gray-400 font-bold tracking-widest mt-2 uppercase">projects/</span>
          </button>
        </div>

        {/* Floating Draggable App Windows */}
        {openApps.terminal && (
          <Window title="terminal.app" onClose={() => toggleApp("terminal")} initialX={200} initialY={30}>
            <Terminal />
          </Window>
        )}

        {openApps.about && (
          <Window title="about.txt" onClose={() => toggleApp("about")} initialX={240} initialY={100}>
            <div className="space-y-4 font-mono text-xs text-gray-300">
              <div className="text-gray-500 font-bold uppercase tracking-widest border-b border-[#222] pb-1">FILE // about.txt</div>
              <p className="leading-relaxed">
                Computer Science undergraduate with strong foundations in AI/ML and Distributed Systems. 
                Experienced in building scalable, real-time intelligent systems combining deep learning 
                with high-performance backend architectures. Interested in solving complex engineering 
                problems at scale.
              </p>
              <div className="pt-2 text-[10px] text-gray-500">Lines: 6 // Words: 38 // Size: 247 bytes</div>
            </div>
          </Window>
        )}

        {openApps.skills && (
          <Window title="skills.json" onClose={() => toggleApp("skills")} initialX={280} initialY={160}>
            <div className="space-y-4 font-mono text-xs text-gray-300">
              <div className="text-gray-500 font-bold uppercase tracking-widest border-b border-[#222] pb-1">FILE // skills.json</div>
              <pre className="text-[#ccff00] leading-normal text-xs bg-black p-3 border border-[#222] rounded max-w-full overflow-x-auto">
{`{
  "languages": ["Python", "Java", "JavaScript", "SQL"],
  "ai_ml": ["TensorFlow", "PyTorch", "Scikit-learn", "CNN", "LSTM"],
  "systems": ["Distributed Systems", "API Design", "Concurrency", "Caching"],
  "web_backend": ["Flask", "REST APIs", "HTML5", "CSS3"],
  "tools": ["Git", "Docker", "Linux", "VS Code"]
}`}
              </pre>
            </div>
          </Window>
        )}

        {openApps.projects && (
          <Window title="projects/" onClose={() => toggleApp("projects")} initialX={320} initialY={60}>
            <div className="space-y-4 font-mono text-xs text-gray-300">
              <div className="text-gray-500 font-bold uppercase tracking-widest border-b border-[#222] pb-1">DIRECTORY // projects/</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <Link href="/projects/sign-language" className="p-3 border border-[#222] rounded hover:border-[#ccff00] hover:bg-[#ccff00]/5 transition-all">
                  <div className="font-bold text-white mb-1">sign-language/</div>
                  <span className="text-[10px] text-gray-500">Fine-tuned CNN on custom datasets.</span>
                </Link>
                <Link href="/projects/driver-drowsiness" className="p-3 border border-[#222] rounded hover:border-[#ccff00] hover:bg-[#ccff00]/5 transition-all">
                  <div className="font-bold text-white mb-1">driver-drowsiness/</div>
                  <span className="text-[10px] text-gray-500">Facial landmark classifer warning.</span>
                </Link>
                <Link href="/projects/finance-management" className="p-3 border border-[#222] rounded hover:border-[#ccff00] hover:bg-[#ccff00]/5 transition-all">
                  <div className="font-bold text-white mb-1">finance-management/</div>
                  <span className="text-[10px] text-gray-500">Expense tracking & user portals.</span>
                </Link>
                <Link href="/projects/stock-prediction" className="p-3 border border-[#222] rounded hover:border-[#ccff00] hover:bg-[#ccff00]/5 transition-all">
                  <div className="font-bold text-white mb-1">stock-prediction/</div>
                  <span className="text-[10px] text-gray-500">Time-series forecasting LSTM.</span>
                </Link>
              </div>
            </div>
          </Window>
        )}

        {/* Scroll Instruction indicator */}
        <div className="w-full flex justify-center text-center animate-bounce pt-8 select-none z-10">
          <div className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em] border border-[#222] bg-black/80 px-4 py-2.5 rounded shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            Scroll down to view offline database ▾
          </div>
        </div>
      </section>

      {/* Main linear static portfolio sections (Shown below the OS viewport) */}
      <div className="border-t border-[#111] bg-black/90 relative z-20">
        <PortfolioSection />
      </div>
    </main>
  );
}
