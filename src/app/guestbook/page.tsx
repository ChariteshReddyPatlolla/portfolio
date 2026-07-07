"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, PenTool } from "lucide-react";

interface Entry {
  id: number;
  name: string;
  message: string;
  date: string;
}

export default function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem("guestbook_entries");
    if (saved) {
      setEntries(JSON.parse(saved));
    } else {
      const defaultEntries: Entry[] = [
        {
          id: 1,
          name: "Academic_Advisor",
          message: "Great algorithm choices on the driver drowsiness system!",
          date: "2026-07-01 10:24",
        },
        {
          id: 2,
          name: "Obscura_President",
          message: "Fascinating photography article. Keep up the clean shots!",
          date: "2026-07-04 18:45",
        },
      ];
      setEntries(defaultEntries);
      localStorage.setItem("guestbook_entries", JSON.stringify(defaultEntries));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    const newEntry: Entry = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toISOString().replace("T", " ").substring(0, 16),
    };

    setTimeout(() => {
      const updated = [newEntry, ...entries];
      setEntries(updated);
      localStorage.setItem("guestbook_entries", JSON.stringify(updated));
      setName("");
      setMessage("");
      setIsSubmitting(false);
    }, 800);
  };

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
          <div className="text-xs text-[#ccff00] font-bold">GUESTBOOK_NODE_CONNECTED</div>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            SYSTEM_<span className="text-[#ccff00]">GUESTBOOK</span>
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Leave a log entry in the system storage. Anonymous messages welcome.
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-[#0a0a0a] border border-[#222] p-6 rounded">
          <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
            <PenTool size={14} className="text-[#ccff00]" /> Sign Guestbook Log
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] text-gray-500 uppercase font-bold">Ident Handle (Name)</label>
                <input 
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black border border-[#222] focus:border-[#ccff00] outline-none px-3 py-2 text-xs rounded text-[#ccff00] font-mono"
                  placeholder="e.g. Anon-Guest"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[9px] text-gray-500 uppercase font-bold">Transmission (Message)</label>
              <textarea 
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-black border border-[#222] focus:border-[#ccff00] outline-none px-3 py-2 text-xs rounded text-[#ccff00] font-mono"
                placeholder="Write message content here..."
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-black border border-[#ccff00] text-[#ccff00] text-xs uppercase tracking-widest rounded hover:bg-[#ccff00] hover:text-black transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? "TRANSMITTING..." : "COMMIT ENTRY"}
            </button>
          </form>
        </div>

        {/* Log Entries List */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
            <BookOpen size={14} className="text-gray-500" /> Stored Log Entries ({entries.length})
          </h3>
          
          <div className="space-y-4">
            {entries.length === 0 ? (
              <div className="text-center py-8 text-xs text-gray-600">No log entries found in sector.</div>
            ) : (
              entries.map((entry) => (
                <div key={entry.id} className="border border-[#111] bg-black/40 p-4 rounded text-xs">
                  <div className="flex justify-between items-center text-[10px] text-gray-500 border-b border-[#111] pb-1.5 mb-2">
                    <span className="font-bold text-[#ccff00]">@{entry.name}</span>
                    <span>{entry.date}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-mono">{entry.message}</p>
                </div>
              ))
            )}
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
