"use client";

import React, { useState } from "react";
import { 
  Trophy, Code, Cpu, Award, BookOpen, Camera, 
  Mail, Phone, ExternalLink, Activity
} from "lucide-react";

export default function PortfolioSection() {
  const [formState, setFormState] = useState({ name: "", email: "", msg: "" });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", msg: "" });
      setIsSent(false);
    }, 3000);
  };

  return (
    <div className="bg-[#050505] text-[#f0f0f0] font-mono selection:bg-[#ccff00] selection:text-black py-16 px-4 max-w-5xl mx-auto space-y-24">
      {/* 1. Header / Hero section */}
      <section className="text-center md:text-left space-y-6 border-b border-[#111] pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] text-[#ccff00] tracking-widest uppercase">◈ DECLASSIFIED CORE BIOS</span>
          <div className="h-px flex-1 bg-[#111]"></div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white">
            PATLOLLA <span className="text-[#ccff00]">CHARITESH</span> REDDY
          </h1>
          <p className="text-sm md:text-lg text-gray-500 uppercase tracking-widest font-bold">
            Computer Science Undergraduate — Software Engineering — Distributed Systems
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-gray-400 font-mono">
          <span className="flex items-center gap-1.5"><Mail size={14} className="text-[#ccff00]" /> pchariteshreddy@gmail.com</span>
          <span className="flex items-center gap-1.5"><Phone size={14} className="text-[#ccff00]" /> +91 7702728144</span>
          <span className="flex items-center gap-1.5"><Activity size={14} className="text-[#ccff00]" /> India</span>
        </div>

        <div className="flex flex-wrap gap-4 text-xs">
          <a href="https://linkedin.com" target="_blank" className="flex items-center gap-1 px-3 py-1.5 border border-[#222] hover:border-[#ccff00] hover:text-[#ccff00] transition-colors rounded bg-[#0a0a0a]">
            <ExternalLink size={12} /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" className="flex items-center gap-1 px-3 py-1.5 border border-[#222] hover:border-[#ccff00] hover:text-[#ccff00] transition-colors rounded bg-[#0a0a0a]">
            <Code size={12} /> GitHub
          </a>
          <a href="https://leetcode.com" target="_blank" className="flex items-center gap-1 px-3 py-1.5 border border-[#222] hover:border-[#ccff00] hover:text-[#ccff00] transition-colors rounded bg-[#0a0a0a]">
            <Code size={12} /> LeetCode
          </a>
        </div>
      </section>

      {/* 2. System Metrics Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">SYSTEM_METRICS</h2>
          <div className="h-px flex-1 bg-[#111]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative bg-[#0a0a0a] border border-[#222] hover:border-[#ccff00] transition-all p-6 rounded-md group">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ccff00] opacity-40 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ccff00] opacity-40 group-hover:opacity-100"></div>
            
            <Trophy className="text-[#ccff00] mb-3" size={24} />
            <div className="text-3xl font-black text-white">1836+</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">LeetCode Rating (Knight)</div>
            <p className="text-[11px] text-gray-400 mt-2">Solved 350+ problems with robust algorithm approaches.</p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#0a0a0a] border border-[#222] hover:border-[#ccff00] transition-all p-6 rounded-md group">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ccff00] opacity-40 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ccff00] opacity-40 group-hover:opacity-100"></div>
            
            <Cpu className="text-[#ccff00] mb-3" size={24} />
            <div className="text-3xl font-black text-white">1400+</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Codeforces Rating (Specialist)</div>
            <p className="text-[11px] text-gray-400 mt-2">Ranked Specialist. Participated in regular competitive contests.</p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#0a0a0a] border border-[#222] hover:border-[#ccff00] transition-all p-6 rounded-md group">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ccff00] opacity-40 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ccff00] opacity-40 group-hover:opacity-100"></div>
            
            <Award className="text-[#ccff00] mb-3" size={24} />
            <div className="text-3xl font-black text-white">7.32</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">B.Tech CPI / 10</div>
            <p className="text-[11px] text-gray-400 mt-2">Computer Science & Engineering @ IIIT Vadodara.</p>
          </div>
        </div>
      </section>

      {/* 3. Career Log (Timeline) */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">CAREER_LOG (EDUCATION)</h2>
          <div className="h-px flex-1 bg-[#111]"></div>
        </div>

        <div className="relative border-l border-[#222] ml-4 pl-6 space-y-12">
          {/* Node 1 */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#ccff00]"></div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#ccff00] tracking-widest font-bold bg-[#ccff00]/10 px-2 py-0.5 rounded border border-[#ccff00]/20">B.TECH CSE (CPI: 7.32/10)</span>
              <h3 className="text-lg font-bold text-white mt-2">Indian Institute of Information Technology, Vadodara</h3>
              <p className="text-xs text-gray-500">Major in Computer Science & Engineering. Strong focus on Deep Learning, Distributed Systems, Concurrency, and Caching architectures.</p>
            </div>
          </div>

          {/* Node 2 */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#ccff00]/30"></div>
            <div className="space-y-1">
              <span className="text-[10px] text-gray-500 tracking-widest font-bold border border-[#222] px-2 py-0.5 rounded">INTERMEDIATE (MPC: 97.2%)</span>
              <h3 className="text-lg font-bold text-white mt-2">Sri Chaitanya Junior College</h3>
              <p className="text-xs text-gray-500">Focus on Mathematics, Physics, Chemistry.</p>
            </div>
          </div>

          {/* Node 3 */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#ccff00]/30"></div>
            <div className="space-y-1">
              <span className="text-[10px] text-gray-500 tracking-widest font-bold border border-[#222] px-2 py-0.5 rounded">SECONDARY SCHOOL (CGPA: 10/10)</span>
              <h3 className="text-lg font-bold text-white mt-2">Sri Chaitanya School</h3>
              <p className="text-xs text-gray-500">Secondary School Certificate (SSC).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Projects Log */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">PROJECTS_LOG</h2>
          <div className="h-px flex-1 bg-[#111]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-[#0a0a0a] border border-[#222] p-6 rounded hover:border-[#ccff00]/60 transition-all flex flex-col justify-between md:col-span-2">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-white tracking-tight">OmniAgent – Offline AI Copilot</h3>
                <a href="https://github.com" target="_blank" className="text-gray-500 hover:text-[#ccff00]"><ExternalLink size={14} /></a>
              </div>
              <ul className="text-xs text-gray-400 space-y-2 list-disc list-inside">
                <li>Architected a modular multi-agent system using FastAPI, LangGraph, and local LLMs supporting concurrent task execution and secure workflow orchestration.</li>
                <li>Designed an asynchronous Redis-backed backend enabling scalable, non-blocking request processing.</li>
                <li>Implemented deterministic command routing using Regex and OS APIs to reduce execution latency by bypassing unnecessary LLM inference.</li>
                <li>Built workspace-aware Retrieval-Augmented Generation (RAG) with ChromaDB and developed approval middleware for secure tool execution.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 text-[10px]">
              <span className="bg-[#111] px-2 py-1 rounded text-[#ccff00] border border-[#222]">Python</span>
              <span className="bg-[#111] px-2 py-1 rounded text-gray-400 border border-[#222]">FastAPI</span>
              <span className="bg-[#111] px-2 py-1 rounded text-gray-400 border border-[#222]">LangGraph</span>
              <span className="bg-[#111] px-2 py-1 rounded text-gray-400 border border-[#222]">Redis</span>
              <span className="bg-[#111] px-2 py-1 rounded text-gray-400 border border-[#222]">ChromaDB</span>
              <span className="bg-[#111] px-2 py-1 rounded text-gray-400 border border-[#222]">Ollama</span>
              <span className="bg-[#111] px-2 py-1 rounded text-gray-400 border border-[#222]">React</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-[#0a0a0a] border border-[#222] p-6 rounded hover:border-[#ccff00]/60 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-white tracking-tight">Finance Management System</h3>
                <a href="https://github.com" target="_blank" className="text-gray-500 hover:text-[#ccff00]"><ExternalLink size={14} /></a>
              </div>
              <ul className="text-xs text-gray-400 space-y-2 list-disc list-inside">
                <li>Designed and implemented a full-stack finance management application using Flask, SQL, and JavaScript.</li>
                <li>Developed REST APIs, authentication, and database-backed transaction management with interactive dashboards.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 text-[10px]">
              <span className="bg-[#111] px-2 py-1 rounded text-[#ccff00] border border-[#222]">Flask</span>
              <span className="bg-[#111] px-2 py-1 rounded text-gray-400 border border-[#222]">JavaScript</span>
              <span className="bg-[#111] px-2 py-1 rounded text-gray-400 border border-[#222]">SQL</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-[#0a0a0a] border border-[#222] p-6 rounded hover:border-[#ccff00]/60 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-white tracking-tight">Sign Language Translation System</h3>
                <a href="https://github.com" target="_blank" className="text-gray-500 hover:text-[#ccff00]"><ExternalLink size={14} /></a>
              </div>
              <ul className="text-xs text-gray-400 space-y-2 list-disc list-inside">
                <li>Developed a real-time computer vision pipeline for sign language recognition using OpenCV and TensorFlow.</li>
                <li>Implemented preprocessing, augmentation, and optimized inference for reliable real-time prediction.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 text-[10px]">
              <span className="bg-[#111] px-2 py-1 rounded text-[#ccff00] border border-[#222]">Python</span>
              <span className="bg-[#111] px-2 py-1 rounded text-gray-400 border border-[#222]">OpenCV</span>
              <span className="bg-[#111] px-2 py-1 rounded text-gray-400 border border-[#222]">TensorFlow</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Achievements & Competitive Programming */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">ACHIEVEMENTS_LOG</h2>
          <div className="h-px flex-1 bg-[#111]"></div>
        </div>

        <ul className="space-y-3 text-xs md:text-sm text-gray-400">
          <li className="flex items-start gap-2.5">
            <span className="text-[#ccff00] shrink-0 font-bold">&gt;</span>
            <span>LeetCode competitive score: <strong className="text-white">1836+ Knight</strong> (Solved 350+ data structures and algorithms problems).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#ccff00] shrink-0 font-bold">&gt;</span>
            <span>Codeforces competitive ranking: <strong className="text-white">1400+ Specialist</strong>.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#ccff00] shrink-0 font-bold">&gt;</span>
            <span>Strong understanding of Graph Algorithms, Dynamic Programming, Trees, Binary Search, Greedy Algorithms, Segment Trees, and String Algorithms.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#ccff00] shrink-0 font-bold">&gt;</span>
            <span>Authored research paper article: <em className="text-white font-serif">"Representation of Widowhood in Indian Cinema"</em> published in the academic book <strong className="text-white">"Exploring the Gender-Technology Consecution."</strong></span>
          </li>
        </ul>
      </section>

      {/* 6. Extracurriculars */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">EXTRACURRICULARS</h2>
          <div className="h-px flex-1 bg-[#111]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#0a0a0a] border border-[#222] p-5 rounded flex gap-4 items-center">
            <Camera className="text-[#ccff00] shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-white text-sm">Obscura Photography Club</h4>
              <p className="text-[11px] text-gray-500">Core Member @ IIIT Vadodara</p>
            </div>
          </div>
          <div className="bg-[#0a0a0a] border border-[#222] p-5 rounded flex gap-4 items-center">
            <Activity className="text-[#ccff00] shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-white text-sm">Active Sports</h4>
              <p className="text-[11px] text-gray-500">Badminton, Table Tennis, Cricket</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact Connect */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">CONNECT_SHELL</h2>
          <div className="h-px flex-1 bg-[#111]"></div>
        </div>

        <div className="bg-[#0a0a0a] border border-[#222] p-6 rounded max-w-xl mx-auto space-y-4">
          {isSent ? (
            <div className="text-center py-12 space-y-3 font-mono">
              <span className="text-[#ccff00] text-3xl animate-pulse">✓</span>
              <p className="text-sm text-white uppercase tracking-widest font-bold">Message Encoded & Dispatched Successfully.</p>
              <p className="text-xs text-gray-500">Response loop will establish shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 uppercase font-bold">Sender Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-black border border-[#222] focus:border-[#ccff00] outline-none px-3 py-2 text-xs rounded text-[#ccff00]" 
                    placeholder="e.g. Guest-01"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 uppercase font-bold">Return Address (Email)</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-black border border-[#222] focus:border-[#ccff00] outline-none px-3 py-2 text-xs rounded text-[#ccff00]" 
                    placeholder="e.g. return@node.net"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-gray-500 uppercase font-bold">Payload (Message)</label>
                <textarea 
                  rows={4} 
                  required
                  value={formState.msg}
                  onChange={(e) => setFormState(prev => ({ ...prev, msg: e.target.value }))}
                  className="w-full bg-black border border-[#222] focus:border-[#ccff00] outline-none px-3 py-2 text-xs rounded text-[#ccff00]" 
                  placeholder="Enter message details to dispatch..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-2.5 bg-black border border-[#ccff00] text-[#ccff00] text-xs uppercase tracking-widest rounded hover:bg-[#ccff00] hover:text-black hover:shadow-[0_0_15px_rgba(204,255,0,0.2)] transition-all cursor-pointer"
              >
                DISPATCH MESSAGE
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[10px] text-gray-600 font-mono tracking-widest pt-8 border-t border-[#111]">
        SECURE TERMINAL ACTIVE // CODENAME: CHARITESH-OS // COPYLEFT (C) 2026
      </footer>
    </div>
  );
}
