"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Terminal() {
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([
    {
      command: "system-init",
      output: (
        <div className="text-gray-500 text-[11px] leading-relaxed">
          Welcome to CHARITESH-OS Shell v1.0.4.
          Type <span className="text-[#ccff00]">help</span> to view all available commands.
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    focusInput();
  }, []);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const parts = trimmedInput.split(" ");
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ");
    let response: React.ReactNode = "";

    switch (cmd) {
      case "help":
        response = (
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-400">
            <div><span className="text-[#ccff00]">help</span></div>
            <div>Display available commands</div>
            <div><span className="text-[#ccff00]">ls</span></div>
            <div>List directory contents</div>
            <div><span className="text-[#ccff00]">cat &lt;file&gt;</span></div>
            <div>View text file contents</div>
            <div><span className="text-[#ccff00]">./contact.sh</span></div>
            <div>Execute contact script</div>
            <div><span className="text-[#ccff00]">neofetch</span></div>
            <div>Display system specification info</div>
            <div><span className="text-[#ccff00]">clear</span></div>
            <div>Clear screen history</div>
          </div>
        );
        break;
      case "ls":
        response = (
          <div className="flex gap-6 text-[#ccff00] text-xs">
            <span>about.txt</span>
            <span>skills.json</span>
            <span>contact.sh</span>
            <span>secret.enc</span>
            <span className="text-blue-400">projects/</span>
          </div>
        );
        break;
      case "cat":
        if (!arg) {
          response = <span className="text-red-500">Usage: cat &lt;filename&gt;</span>;
        } else if (arg.toLowerCase() === "about.txt") {
          response = (
            <div className="text-gray-300 text-xs leading-relaxed max-w-lg">
              Computer Science undergraduate with strong foundations in AI/ML and Distributed Systems. 
              Experienced in building scalable, real-time intelligent systems combining deep learning 
              with high-performance backend architectures. Interested in solving complex engineering 
              problems at scale.
            </div>
          );
        } else if (arg.toLowerCase() === "skills.json") {
          response = (
            <pre className="text-[11px] text-gray-400 leading-normal">
{`{
  "languages": ["Python", "Java", "JavaScript", "SQL"],
  "ai_ml": ["TensorFlow", "PyTorch", "Scikit-learn", "CNN", "LSTM"],
  "systems": ["Distributed Systems", "API Design", "Concurrency", "Caching"],
  "web_backend": ["Flask", "REST APIs", "HTML5", "CSS3"],
  "tools": ["Git", "Docker", "Linux", "VS Code"]
}`}
            </pre>
          );
        } else if (arg.toLowerCase() === "contact.sh") {
          response = <span className="text-gray-400">File is executable. Run <span className="text-[#ccff00]">./contact.sh</span> instead.</span>;
        } else if (arg.toLowerCase() === "secret.enc") {
          response = (
            <span className="text-red-500">
              [ACCESS DENIED: KEY ENCRYPTION REQUIRED] - Decrypted segments can be mapped in main scrollable interface.
            </span>
          );
        } else {
          response = <span className="text-red-500">cat: {arg}: No such file or directory</span>;
        }
        break;
      case "./contact.sh":
        response = (
          <div className="text-xs space-y-1 text-gray-300">
            <div><span className="text-gray-500">Email:</span> <a href="mailto:pchariteshreddy@gmail.com" className="text-[#ccff00] underline">pchariteshreddy@gmail.com</a></div>
            <div><span className="text-gray-500">Phone:</span> +91 7702728144</div>
            <div><span className="text-gray-500">LinkedIn:</span> <a href="https://linkedin.com" target="_blank" className="text-[#ccff00] underline">linkedin.com/in/charitesh-reddy</a></div>
            <div><span className="text-gray-500">GitHub:</span> <a href="https://github.com" target="_blank" className="text-[#ccff00] underline">github.com/ChariteshReddyPatlolla</a></div>
            <div><span className="text-gray-500">LeetCode:</span> <a href="https://leetcode.com" target="_blank" className="text-[#ccff00] underline">leetcode.com/u/pchariteshreddy</a></div>
          </div>
        );
        break;
      case "neofetch":
        response = (
          <div className="flex gap-4 font-mono text-[11px] leading-tight">
            <pre className="text-[#ccff00] hidden sm:block">
{`   /\\_/\\
  ( o.o )
   > ^ <
  /     \\
 |       |
  \\_\\_/_/`}
            </pre>
            <div className="space-y-1">
              <div className="text-[#ccff00] font-bold">pchariteshreddy@CHAR-OS-WORKSTATION</div>
              <div className="text-gray-500">----------------------------------</div>
              <div><span className="text-gray-500">OS:</span> CyberOS v6.0PG</div>
              <div><span className="text-gray-500">Host:</span> IIIT Vadodara CSE-2027</div>
              <div><span className="text-gray-500">Kernel:</span> 6.8.0-ai-ml-distributed</div>
              <div><span className="text-gray-500">Shell:</span> charitesh-sh v1.0.4</div>
              <div><span className="text-gray-500">CPI:</span> 7.25 / 10</div>
              <div><span className="text-gray-500">LeetCode Rating:</span> 1736+ (Top 6%)</div>
              <div><span className="text-gray-500">Codeforces Rating:</span> 1300+ (Pupil)</div>
            </div>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        response = <span className="text-red-500">Command not found: {cmd}. Type "help" for a list of commands.</span>;
        break;
    }

    setHistory((prev) => [...prev, { command: input, output: response }]);
    setInput("");
  };

  return (
    <div 
      onClick={focusInput}
      className="w-full h-full flex flex-col justify-between font-mono bg-black text-gray-300 overflow-hidden text-xs md:text-sm"
    >
      {/* Scrollable history logs */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-2 pr-2">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.command !== "system-init" && (
              <div className="flex items-center gap-1.5 text-gray-500">
                <span>$</span>
                <span>{item.command}</span>
              </div>
            )}
            <div className="pl-3">{item.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input row */}
      <form onSubmit={handleCommand} className="flex items-center gap-1.5 border-t border-[#111] pt-2">
        <span className="text-[#ccff00] font-bold shrink-0">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-[#ccff00] font-mono caret-[#ccff00]"
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
