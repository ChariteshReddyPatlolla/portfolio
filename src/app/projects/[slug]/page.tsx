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
    "sign-language": {
      title: "Sign Language Translation System",
      github: "https://github.com",
      stack: ["Python", "OpenCV", "VGGNet", "CNN"],
      points: [
        "Fine-tuned CNN model on custom dataset for gesture classification.",
        "Developed real-time pipeline using live camera feed for gesture-to-text translation.",
        "Improved model robustness using augmentation and preprocessing techniques."
      ],
      architecture: (
        <div className="space-y-4">
          <p>The vision processing pipeline executes model inference on raw camera frames:</p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`[ Live Video Stream ]
        │
        ▼ (OpenCV Capture Frame)
[ Pre-processing Node ]
        │  - Resize to 224x224
        │  - Normalize & Augment
        ▼
[ VGGNet / CNN Classifier ] (Fine-tuned Model)
        │
        ▼ (Prediction Probability)
[ Text Translation Engine ] -> Screen Output`}
          </pre>
        </div>
      )
    },
    "driver-drowsiness": {
      title: "Driver Drowsiness Detection System",
      github: "https://github.com",
      stack: ["YOLO", "OpenCV", "Python"],
      points: [
        "Built real-time detection system to classify alert vs drowsy states using facial cues.",
        "Visualized model attention using heatmaps for interpretability.",
        "Optimized inference pipeline for real-time performance."
      ],
      architecture: (
        <div className="space-y-4">
          <p>This system tracks blink frequency and yawning frames to assess driver fatigue levels:</p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`[ Camera Input Feed ]
        │
        ▼ (OpenCV Capture)
[ Facial Landmarks Extractor ] (YOLO Detector)
        │
        ├──► [ Eye aspect ratio (EAR) ] ──┐
        │                                  ▼
        └──► [ Mouth aspect ratio (MAR) ] ─┼─► [ Drowsy Check ]
                                           │        │
[ Alarm Trigger Node ] ◄───────────────────┘        ▼ (Yes)
                                               [ Sound Alert ]`}
          </pre>
        </div>
      )
    },
    "finance-management": {
      title: "Finance Management System",
      github: "https://github.com",
      stack: ["Flask", "JavaScript", "SQL"],
      points: [
        "Developed full-stack application for expense tracking and budget analysis.",
        "Implemented secure authentication and dynamic visualization dashboards."
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
    "stock-prediction": {
      title: "Stock Price Prediction using LSTM",
      github: "https://github.com",
      stack: ["TensorFlow", "Python", "LSTM"],
      points: [
        "Designed LSTM-based time series forecasting model for stock trends.",
        "Implemented multi-step prediction and evaluated using RMSE and MAE metrics.",
        "Applied regularization and feature engineering to improve generalization."
      ],
      architecture: (
        <div className="space-y-4">
          <p>The time-series forecasting layers feed historical pricing matrices into recurrent memory cells:</p>
          <pre className="bg-black p-4 border border-[#222] rounded text-[11px] text-[#ccff00] overflow-x-auto leading-normal">
{`[ Raw Price Inputs ]
        │
        ▼ (60-day sequence slice)
[ Feature Scaling Node ]
        │
        ▼ (Input Layer)
[ Recurrent LSTM Cell Stack ] (TensorFlow Engine)
        │
        ▼ (Fully Connected Layer)
[ Dense Output Node ] -> Predict Volatility Trend
        │
        ▼ (Validation Loop)
[ MAE / RMSE Evaluation ]`}
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
