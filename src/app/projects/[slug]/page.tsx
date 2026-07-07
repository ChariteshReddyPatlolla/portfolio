"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Cpu, FolderGit, Eye, Layout } from "lucide-react";

interface ProjectDetails {
  title: string;
  github: string;
  stack: string[];
  points: string[];
  architecture: React.ReactNode;
}

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const projectsData: Record<string, ProjectDetails> = {
    "omni-agent": {
      title: "OmniAgent – Offline AI Copilot",
      github: "https://github.com",
      stack: ["Python", "FastAPI", "LangGraph", "Redis", "ChromaDB", "Ollama", "React"],
      points: [
        "Architected a modular multi-agent system using FastAPI, LangGraph, and local LLMs supporting concurrent task execution and secure workflow orchestration.",
        "Designed an asynchronous Redis-backed backend enabling scalable, non-blocking request processing.",
        "Implemented deterministic command routing using Regex and OS APIs to reduce execution latency by bypassing unnecessary LLM inference.",
        "Built workspace-aware Retrieval-Augmented Generation (RAG) with ChromaDB and developed approval middleware for secure tool execution."
      ],
      architecture: (
        <div className="space-y-4">
          <p>The OmniAgent system runs multi-agent pipelines with local model inferences and vector database lookups:</p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`[ Web Client User Input ] (React Interface)
              │
              ▼ (Async HTTP REST Request)
[ FastAPI Routing Gateway ]
              │
       ┌──────┴──────┐ (Regex / Deterministic Router)
       ▼             ▼
[ Fast-path OS API ] [ LangGraph Multi-Agent Stack ]
       │             │  - Local LLMs (Ollama)
       │             ├─► [ RAG Memory ] (ChromaDB)
       │             └─► [ Task Queue ] (Redis Async Worker)
       ▼             ▼
[ Final Unified Output Pipeline ] -> Client UI`}
          </pre>
        </div>
      )
    },
    "finance-management": {
      title: "Finance Management System",
      github: "https://github.com",
      stack: ["Flask", "JavaScript", "SQL"],
      points: [
        "Designed and implemented a full-stack finance management application using Flask, SQL, and JavaScript.",
        "Developed REST APIs, authentication, and database-backed transaction management with interactive dashboards."
      ],
      architecture: (
        <div className="space-y-4">
          <p>The system utilizes a lightweight Python backend structure with secure SQL database queries:</p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`[ Web Client Interface ] (JavaScript Dynamic Charts)
        │  ▲ (REST Request / Response)
        ▼  │
[ Flask Backend Controller ]
        │
        ├──► [ Authentication Gateway ] (bcrypt hash)
        │
        ▼ (SQL Database Queries)
[ Stored DB Matrices ] (SQLite / PostgreSQL)`}
          </pre>
        </div>
      )
    },
    "sign-language": {
      title: "Sign Language Translation System",
      github: "https://github.com",
      stack: ["Python", "OpenCV", "TensorFlow"],
      points: [
        "Developed a real-time computer vision pipeline for sign language recognition using OpenCV and TensorFlow.",
        "Implemented preprocessing, augmentation, and optimized inference for reliable real-time prediction."
      ],
      architecture: (
        <div className="space-y-4">
          <p>The vision processing pipeline executes model inference on raw camera frames:</p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`[ Live Video Stream ]
        │
        ▼ (OpenCV Capture Frame)
[ Pre-processing Node ]
        │  - Resize & Grayscale
        │  - Normalize & Augment
        ▼
[ TensorFlow CNN Classifier ] (Fine-tuned Model)
        │
        ▼ (Prediction Probability)
[ Text Translation Engine ] -> Screen Output`}
          </pre>
        </div>
      )
    }
  };

  const project = projectsData[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050505] text-[#f0f0f0] font-mono p-6 flex flex-col items-center justify-center">
        <p className="text-red-500 text-sm">Error: Project not found in offline database.</p>
        <Link href="/" className="text-xs text-[#ccff00] mt-4 hover:underline">
          Return to Desktop Hub
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] font-mono p-6 md:p-12 relative crt-screen">
      <div className="absolute inset-0 grid-background pointer-events-none opacity-20"></div>
      <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-10"></div>

      <div className="max-w-2xl mx-auto space-y-8 relative z-10">
        {/* Back navigation */}
        <div className="flex justify-between items-center border-b border-[#222] pb-4">
          <Link href="/" className="text-gray-500 hover:text-[#ccff00] flex items-center gap-2 text-xs uppercase font-bold">
            <ArrowLeft size={14} /> Back to Desktop
          </Link>
          <div className="text-xs text-[#ccff00] font-bold">PROJECT_LOG_MOUNTED // {slug}</div>
        </div>

        {/* Title & Github info */}
        <div className="space-y-4">
          <div className="flex justify-between items-start gap-4">
            <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              {project.title}
            </h1>
            <a 
              href={project.github} 
              target="_blank" 
              className="px-3 py-1.5 border border-[#222] rounded hover:border-[#ccff00] text-[#ccff00] text-[10px] font-bold shrink-0 uppercase tracking-wider"
            >
              GitHub Source
            </a>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 text-[10px]">
            {project.stack.map((tech) => (
              <span key={tech} className="bg-black px-2.5 py-1 border border-[#1a1a1a] text-gray-400 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bullet details */}
        <div className="space-y-3 bg-[#0a0a0a] border border-[#222] p-6 rounded">
          <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
            <FolderGit size={14} className="text-[#ccff00]" /> Implementation Details
          </h3>
          <ul className="space-y-3 text-xs md:text-sm text-gray-400">
            {project.points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <span className="text-[#ccff00] shrink-0 font-bold">&gt;</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* System architecture breakdown */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
            <Cpu size={14} className="text-[#ccff00]" /> System Architecture Flow
          </h3>
          <div className="text-xs text-gray-300">
            {project.architecture}
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
