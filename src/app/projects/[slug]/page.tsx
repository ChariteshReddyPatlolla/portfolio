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
      github: "https://github.com/ChariteshReddyPatlolla/offline-assitance",
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
    "distributed-gateway": {
      title: "Distributed AI Inference Gateway",
      github: "https://github.com/ChariteshReddyPatlolla/Distributed-AI-Inference-Gateway",
      stack: ["Python", "Distributed Systems", "Concurrency", "Inference Gateway"],
      points: [
        "Built a high-performance Distributed AI Inference Gateway supporting request routing and concurrency.",
        "Managed load distribution across multiple backend inference worker nodes to minimize latency."
      ],
      architecture: (
        <div className="space-y-4">
          <p>The Distributed AI gateway coordinates requests among multiple inference backends:</p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`[ Client Request ]
        │
        ▼ (Gateway API Port)
[ Concurrency Controller ]
        │
        ▼ (Load Balancer Node)
 ┌──────┼──────┐
 ▼      ▼      ▼ (Worker Node Clusters)
[Node1] [Node2] [Node3]`}
          </pre>
        </div>
      )
    },
    "network-analyser": {
      title: "Network Analyser using ML & LLM",
      github: "https://github.com/ChariteshReddyPatlolla/Network-Analyser-using-ML-and-LLM",
      stack: ["Python", "Machine Learning", "LLMs", "Latency Forecasting"],
      points: [
        "Intelligent Network Analysis system combining ML and LLMs to predict network latency and bandwidth.",
        "Built a hybrid deep learning model and interactive dashboard rendering optimization tips and insights."
      ],
      architecture: (
        <div className="space-y-4">
          <p>This system parses bandwidth logs through deep networks to synthesize advice via LLMs:</p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`[ Bandwidth & Latency Logs ]
              │
              ▼
    [ ML Predictor Model ] (Hybrid Deep Net)
              │
              ▼ (Performance Output metrics)
    [ LLM Insight generator ] (Llama / GPT)
              │
              ▼ (Natural Text Explanations)
[ UI Dashboard Advisor ]`}
          </pre>
        </div>
      )
    },
    "finance-management": {
      title: "Finance Management System",
      github: "https://github.com/ChariteshReddyPatlolla/Finance-Managment-system",
      stack: ["Flask", "JavaScript", "SQL", "Expense Dashboard"],
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
      github: "https://github.com/ChariteshReddyPatlolla/sign-language-translation",
      stack: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
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
    },
    "lost-found": {
      title: "lost_found_project",
      github: "https://github.com/ChariteshReddyPatlolla/lost_found_project",
      stack: ["JavaScript", "HTML5", "CSS3", "Database Portal"],
      points: [
        "Designed a community lost and found portal supporting item reporting and secure query filters.",
        "Developed simple REST endpoints and client search interactions."
      ],
      architecture: (
        <div className="space-y-4">
          <p>Lost & Found system data flow:</p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`[ User Interface ] (Claim / Report Form)
         │
         ▼ (REST Request)
[ Database Controller ]
         │
         ▼ (Retrieve matched item rows)
[ Items Registry DB ]`}
          </pre>
        </div>
      )
    },
    "productive-timer": {
      title: "productive_timer",
      github: "https://github.com/ChariteshReddyPatlolla/productive_timer",
      stack: ["TypeScript", "Web Extension", "JavaScript"],
      points: [
        "Designed a productivity timer packaged as a lightweight browser extension.",
        "Integrated session time loggers and stats indicators."
      ],
      architecture: (
        <div className="space-y-4">
          <p>Productive Timer Web Extension execution layout:</p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`[ Browser Context ] (Popup UI / Popup window)
         │
         ▼ (Message listener channel)
[ Background Service Worker ] (Time tracker active status)
         │
         ▼ (Store session hours logs)
[ Local browser storage ]`}
          </pre>
        </div>
      )
    },
    "stock-prediction": {
      title: "stock-price-predector",
      github: "https://github.com/ChariteshReddyPatlolla/stock-price-predector",
      stack: ["Python", "LSTM", "TensorFlow", "Jupyter Notebook"],
      points: [
        "Designed an LSTM time-series model to forecast stock price volatility parameters.",
        "Validated accuracy with MAE and RMSE performance metrics."
      ],
      architecture: (
        <div className="space-y-4">
          <p>Predictor training flow diagram:</p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`[ Historical Stock Rates Data ]
               │
               ▼
   [ Data Preprocessing ] (MinMax scaling)
               │
               ▼
[ Recurrent LSTM Networks ] (Dense forecasting layer)
               │
               ▼
    [ Prediction Volatility ] (Validation RMSE metrics)`}
          </pre>
        </div>
      )
    },
    "driver-drowsiness": {
      title: "driver-drowsiness-detection",
      github: "https://github.com/ChariteshReddyPatlolla/driver-drowsiness-detection",
      stack: ["Python", "OpenCV", "Facial Landmarks", "Fatigue Detection"],
      points: [
        "Built real-time drowsiness warning classifier using facial landmark cues.",
        "Monitored eye and mouth aspect ratios to trigger warnings dynamically."
      ],
      architecture: (
        <div className="space-y-4">
          <p>Driver drowsiness threshold flowchart:</p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`[ Real-time Video Stream ]
               │
               ▼
     [ Facial Landmark Detector ]
               │
       ┌───────┴───────┐
       ▼               ▼
[ Eye Ratio (EAR) ] [ Mouth Ratio (MAR) ]
       │               │
       └───────┬───────┘
               ▼
[ Ratio Threshold Evaluation ] ──► (Sleep / Yawn?) ──► [ Alarm Trigger ]`}
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
