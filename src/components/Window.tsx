"use client";

import React, { useRef, useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { X, Square, Minus } from "lucide-react";

interface WindowProps {
  title: string;
  onClose: () => void;
  onMinimize?: () => void;
  children: React.ReactNode;
  initialX?: number;
  initialY?: number;
}

export default function Window({
  title,
  onClose,
  onMinimize,
  children,
  initialX = 50,
  initialY = 50,
}: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const dragControls = useDragControls();

  return (
    <motion.div
      drag={!isMaximized}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0.05}
      initial={{ opacity: 0, scale: 0.95, x: initialX, y: initialY }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        width: isMaximized ? "100%" : "640px",
        height: isMaximized ? "calc(100vh - 40px)" : "420px",
        x: isMaximized ? 0 : undefined,
        y: isMaximized ? 40 : undefined,
        top: isMaximized ? 0 : "auto",
        left: isMaximized ? 0 : "auto",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="fixed z-40 bg-[#0a0a0a] border border-[#333] shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded overflow-hidden flex flex-col max-w-full"
      style={{
        maxHeight: "90vh",
      }}
    >
      {/* Header bar (Drag Handle) */}
      <div 
        onPointerDown={(e) => dragControls.start(e)}
        className="window-header flex items-center justify-between px-4 py-2 border-b border-[#1a1a1a] bg-[#0c0c0c] select-none cursor-grab active:cursor-grabbing shrink-0"
      >
        {/* Title */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></span>
          <span className="text-[11px] font-mono font-bold tracking-wider text-gray-400 uppercase">
            {title}
          </span>
        </div>

        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <button 
            onClick={onMinimize || onClose}
            className="w-5 h-5 rounded flex items-center justify-center text-gray-500 hover:bg-[#1a1a1a] hover:text-white transition-colors"
            title="Minimize"
          >
            <Minus size={10} />
          </button>
          <button 
            onClick={() => setIsMaximized(!isMaximized)}
            className={`w-5 h-5 rounded flex items-center justify-center text-gray-500 hover:bg-[#1a1a1a] hover:text-white transition-colors ${
              isMaximized ? "text-[#ccff00]" : ""
            }`}
            title={isMaximized ? "Restore Down" : "Maximize"}
          >
            <Square size={9} />
          </button>
          <button 
            onClick={onClose}
            className="w-5 h-5 rounded flex items-center justify-center text-gray-500 hover:bg-red-950 hover:text-red-400 transition-colors"
            title="Close"
          >
            <X size={10} />
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-auto p-4 font-mono text-sm leading-relaxed text-gray-300">
        {children}
      </div>
    </motion.div>
  );
}
