"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export default function BlogList() {
  const posts: Post[] = [
    {
      slug: "high-throughput-pipelines",
      title: "Architecting High-Throughput Pipelines: Lessons from Kafka & Kubernetes",
      excerpt: "An engineering deep-dive on designing distributed event-driven systems. Exploring concurrency, message queue scaling, and horizontal scaling strategies on Kubernetes clusters.",
      date: "2026-06-15",
      readTime: "6 min read",
      tags: ["Distributed Systems", "Kafka", "Kubernetes"],
    },
    {
      slug: "visualizing-convolutional-attention",
      title: "Visualizing Convolutional Attention in Real-Time: Grad-CAM on Facial Landmark Features",
      excerpt: "Understanding what convolutional neural networks see. Implementing Grad-CAM layers to visualize neural activations when detecting eye closing and yawning facial cues.",
      date: "2026-05-22",
      readTime: "8 min read",
      tags: ["AI/ML", "Computer Vision", "Grad-CAM"],
    },
    {
      slug: "predicting-volatility-lstm",
      title: "Predicting Market Volatility using Recurrent LSTM Models",
      excerpt: "Time-series forecasting using Recurrent Neural Networks. A guide to LSTM cells, sequence data preparation, and regularizing recurrent pipelines in TensorFlow.",
      date: "2026-04-10",
      readTime: "5 min read",
      tags: ["Deep Learning", "TensorFlow", "Time Series"],
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
          <div className="text-xs text-[#ccff00] font-bold">BLOG_RESOURCES_MOUNTED</div>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            SYSTEM_<span className="text-[#ccff00]">BUILD_LOG</span>
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Engineering logs, research notes, and architectural breakdowns.
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="bg-[#0a0a0a] border border-[#222] hover:border-[#ccff00]/40 p-6 rounded transition-all group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-gray-500 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#ccff00] font-bold">[{post.date}]</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="border border-[#222] px-1.5 py-0.5 rounded text-gray-600 bg-black uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-lg font-bold text-white group-hover:text-[#ccff00] transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-4 pt-3 border-t border-[#111] flex justify-end">
                <Link href={`/blog/${post.slug}`} className="text-[10px] text-[#ccff00] font-bold hover:underline flex items-center gap-1">
                  READ LOG INDEX ›
                </Link>
              </div>
            </article>
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
