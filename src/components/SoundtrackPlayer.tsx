"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundtrackPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{
    osc1: OscillatorNode;
    osc2: OscillatorNode;
    filter: BiquadFilterNode;
    gainNode: GainNode;
  } | null>(null);

  const startOscillators = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;

      // Lower frequency ambient hum oscillator
      const osc1 = ctx.createOscillator();
      osc1.type = "sawtooth";
      osc1.frequency.setValueAtTime(55, ctx.currentTime); // A1 note (bass hum)

      // Slightly detuned oscillator for chorus/stereo effect
      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(55.5, ctx.currentTime);

      // Lowpass filter to make it a warm, dark background drone
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(150, ctx.currentTime);
      filter.Q.setValueAtTime(1, ctx.currentTime);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.05, ctx.currentTime); // soft background volume

      // Connections
      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start();
      osc2.start();

      nodesRef.current = { osc1, osc2, filter, gainNode };
    } catch (e) {
      console.error("Web Audio API not supported", e);
    }
  };

  const stopOscillators = () => {
    if (nodesRef.current) {
      try {
        nodesRef.current.osc1.stop();
        nodesRef.current.osc2.stop();
      } catch (e) {}
      nodesRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  const toggleSound = () => {
    if (isMuted) {
      startOscillators();
      setIsMuted(false);
    } else {
      stopOscillators();
      setIsMuted(true);
    }
  };

  useEffect(() => {
    return () => {
      stopOscillators();
    };
  }, []);

  return (
    <div className="relative">
      <button
        onClick={toggleSound}
        className={`w-10 h-10 border rounded-full flex items-center justify-center transition-all ${
          isMuted
            ? "border-[#333] text-gray-500 hover:border-gray-500 hover:text-white"
            : "border-[#ccff00] text-[#ccff00] hover:bg-[#ccff00]/10"
        }`}
        title={isMuted ? "Unmute Ambient Drone" : "Mute Ambient Drone"}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} className="animate-pulse" />}
      </button>
    </div>
  );
}
