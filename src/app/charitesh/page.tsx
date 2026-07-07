"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";

export default function ChariteshResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] font-mono p-6 md:p-12 relative crt-screen print:bg-white print:text-black">
      <div className="absolute inset-0 grid-background pointer-events-none opacity-20 print:hidden"></div>
      <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-10 print:hidden"></div>

      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        {/* Back and Print controls */}
        <div className="flex justify-between items-center border-b border-[#222] pb-4 print:hidden">
          <Link href="/" className="text-gray-500 hover:text-[#ccff00] flex items-center gap-2 text-xs uppercase font-bold">
            <ArrowLeft size={14} /> Back to System
          </Link>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#222] rounded hover:border-[#ccff00] hover:text-[#ccff00] text-xs font-bold uppercase transition-all cursor-pointer"
          >
            <Printer size={12} /> Print CV
          </button>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-8 print:p-0">
          {/* Header */}
          <div className="border-b-2 border-white/20 pb-6 space-y-3">
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase print:text-black">
              Patlolla Charitesh Reddy
            </h1>
            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest print:text-gray-600">
              Computer Science Undergraduate — Software Engineering — Distributed Systems
            </p>
            <div className="text-xs text-gray-500 space-y-1 md:space-y-0 md:flex md:gap-6 print:text-gray-600">
              <div>Email: pchariteshreddy@gmail.com</div>
              <div>Phone: +91 7702728144</div>
              <div>Location: India</div>
            </div>
          </div>

          {/* Bio Section */}
          <section className="space-y-2">
            <h3 className="text-xs font-bold text-[#ccff00] uppercase tracking-wider print:text-black border-b border-[#222] pb-1">
              [01] Career Objective
            </h3>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed print:text-black">
              Computer Science Undergraduate with strong foundations in Software Engineering and Distributed Systems. Experienced in building scalable, real-time intelligent systems combining deep learning with high-performance backend architectures. Interested in solving complex engineering problems at scale.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="space-y-2">
            <h3 className="text-xs font-bold text-[#ccff00] uppercase tracking-wider print:text-black border-b border-[#222] pb-1">
              [02] Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-300 print:text-black">
              <div><strong className="text-white print:text-black">Languages:</strong> Java, Python, JavaScript, SQL</div>
              <div><strong className="text-white print:text-black">Core Skills:</strong> Data Structures, Algorithms, OOP, Concurrency, Multithreading, Distributed Systems, REST APIs</div>
              <div><strong className="text-white print:text-black">Frameworks:</strong> FastAPI, Flask, React</div>
              <div><strong className="text-white print:text-black">Databases:</strong> Redis, ChromaDB, SQL</div>
              <div><strong className="text-white print:text-black">ML:</strong> TensorFlow, PyTorch, OpenCV, Scikit-learn</div>
              <div><strong className="text-white print:text-black">Tools:</strong> Git, Docker, Linux</div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold text-[#ccff00] uppercase tracking-wider print:text-black border-b border-[#222] pb-1">
              [03] Education
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start text-xs md:text-sm text-gray-300 print:text-black">
                <div>
                  <h4 className="font-bold text-white print:text-black">Indian Institute of Information Technology, Vadodara</h4>
                  <div className="text-[11px] text-gray-500">Bachelor of Technology in Computer Science and Engineering</div>
                </div>
                <div className="text-right font-bold text-[#ccff00] print:text-black">CPI: 7.32/10</div>
              </div>
              <div className="flex justify-between items-start text-xs md:text-sm text-gray-300 print:text-black">
                <div>
                  <h4 className="font-bold text-white print:text-black">Sri Chaitanya Junior College</h4>
                  <div className="text-[11px] text-gray-500">Intermediate (MPC)</div>
                </div>
                <div className="text-right font-bold text-gray-400 print:text-black">Percentage: 97.2%</div>
              </div>
              <div className="flex justify-between items-start text-xs md:text-sm text-gray-300 print:text-black">
                <div>
                  <h4 className="font-bold text-white print:text-black">Sri Chaitanya School</h4>
                  <div className="text-[11px] text-gray-500">Secondary School Certificate (SSC)</div>
                </div>
                <div className="text-right font-bold text-gray-400 print:text-black">CGPA: 10/10</div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-4">
            <h3 className="text-xs font-bold text-[#ccff00] uppercase tracking-wider print:text-black border-b border-[#222] pb-1">
              [04] Projects
            </h3>
            <div className="space-y-4">
              <div className="text-xs md:text-sm text-gray-300 print:text-black">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>OmniAgent – Offline AI Copilot</span>
                  <span className="text-[#ccff00] print:text-black">Python, FastAPI, LangGraph, Redis, ChromaDB, Ollama, React</span>
                </div>
                <ul className="list-inside list-disc pl-4 text-gray-400 text-xs mt-1 print:text-black space-y-1">
                  <li>Architected a modular multi-agent system using FastAPI, LangGraph, and local LLMs supporting concurrent task execution and secure workflow orchestration.</li>
                  <li>Designed an asynchronous Redis-backed backend enabling scalable, non-blocking request processing.</li>
                  <li>Implemented deterministic command routing using Regex and OS APIs to reduce execution latency by bypassing unnecessary LLM inference.</li>
                  <li>Built workspace-aware Retrieval-Augmented Generation (RAG) with ChromaDB and developed approval middleware for secure tool execution.</li>
                </ul>
              </div>

              <div className="text-xs md:text-sm text-gray-300 print:text-black">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Finance Management System</span>
                  <span className="text-[#ccff00] print:text-black">Flask, JavaScript, SQL</span>
                </div>
                <ul className="list-inside list-disc pl-4 text-gray-400 text-xs mt-1 print:text-black space-y-1">
                  <li>Designed and implemented a full-stack finance management application using Flask, SQL, and JavaScript.</li>
                  <li>Developed REST APIs, authentication, and database-backed transaction management with interactive dashboards.</li>
                </ul>
              </div>

              <div className="text-xs md:text-sm text-gray-300 print:text-black">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Sign Language Translation System</span>
                  <span className="text-[#ccff00] print:text-black">Python, OpenCV, TensorFlow</span>
                </div>
                <ul className="list-inside list-disc pl-4 text-gray-400 text-xs mt-1 print:text-black space-y-1">
                  <li>Developed a real-time computer vision pipeline for sign language recognition using OpenCV and TensorFlow.</li>
                  <li>Implemented preprocessing, augmentation, and optimized inference for reliable real-time prediction.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="space-y-2">
            <h3 className="text-xs font-bold text-[#ccff00] uppercase tracking-wider print:text-black border-b border-[#222] pb-1">
              [05] Achievements & Activities
            </h3>
            <ul className="list-inside list-disc pl-4 text-gray-400 text-xs print:text-black space-y-1.5">
              <li>LeetCode Rating: <strong className="text-white print:text-black">1836+ Knight</strong> (Solved 350+ problems).</li>
              <li>Codeforces Rating: <strong className="text-white print:text-black">1400+ Specialist</strong>.</li>
              <li>Strong understanding of Graph Algorithms, Dynamic Programming, Trees, Binary Search, Greedy Algorithms, Segment Trees, and String Algorithms.</li>
              <li>Authored article <em className="text-white print:text-black">"Representation of Widowhood in Indian Cinema"</em> in the book "Exploring the Gender-Technology Consecution."</li>
              <li>Core Member — Obscura Photography Club, IIIT Vadodara.</li>
              <li>Sports: Badminton, Table Tennis, Cricket.</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center text-[10px] text-gray-600 tracking-widest pt-8 border-t border-[#111] print:hidden">
          SYSTEM_LOG_ID: 479e3f46 // CODENAME: CHARITESH-OS
        </footer>
      </div>
    </main>
  );
}
