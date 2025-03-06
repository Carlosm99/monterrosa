"use client";

import React, { useState, useEffect } from "react";

const MicroController = () => {
  const [pulseLight, setPulseLight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseLight((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slideRight {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(500%); }
      }
      @keyframes slideLeft {
        0% { transform: translateX(500%); }
        100% { transform: translateX(-100%); }
      }
      @keyframes scanLine {
        0% { transform: translateY(-5px); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(80px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-black">
      <div className="relative w-full max-w-3xl h-36 bg-black flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-full h-px bg-emerald-950/30"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-emerald-950/30"></div>
          <div className="absolute left-1/4 top-0 w-px h-full bg-emerald-950/30"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-emerald-950/30"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute inset-0 translate-y-0.5 bg-black/60 blur-sm rounded-sm"></div>

          <div className="relative w-48 h-20 bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-800 shadow-xl flex items-center justify-center">
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-0 h-px w-8 bg-cyan-500/20 animate-[slideRight_3s_infinite] -translate-x-8"></div>
              <div className="absolute top-3/4 right-0 h-px w-8 bg-cyan-500/20 animate-[slideLeft_4s_infinite_1s] translate-x-8"></div>
            </div>

            <div className="absolute top-0 left-0 w-5 h-5 overflow-hidden">
              <div className="absolute top-0 left-0 w-7 h-7 border-t border-l border-zinc-700"></div>
            </div>

            <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-500 rounded-full"></div>
            <div
              className={`absolute top-2 right-2 w-2.5 h-2.5 rounded-full blur-sm transition-all duration-1000 ease-in-out ${
                pulseLight ? "bg-cyan-500/40 scale-150" : "bg-cyan-500/10 scale-100"
              }`}
            ></div>

            <div className="absolute top-2 right-2">
              <div className="absolute w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent origin-top animate-[ping_4s_ease-in-out_infinite] rotate-45 -translate-y-2 translate-x-4 delay-300"></div>
              <div className="absolute w-px h-6 bg-gradient-to-b from-cyan-500/30 to-transparent origin-top animate-[ping_3s_ease-in-out_infinite] rotate-[135deg] translate-y-1 translate-x-4"></div>
              <div className="absolute w-px h-5 bg-gradient-to-b from-cyan-500/40 to-transparent origin-top animate-[ping_5s_ease-in-out_infinite] rotate-[225deg] translate-y-1 translate-x-1"></div>
            </div>

            <div className="absolute top-2 left-8 text-zinc-700 text-xs font-mono">CM97-5X</div>

            <div className="text-center">
              <div className="text-zinc-600 text-lg font-medium tracking-wide">Monterrosa</div>
            </div>

            <div className="absolute top-0 left-0 right-0 flex justify-center">
              {[...Array(10)].map((_, i) => (
                <div key={`top-${i}`} className="mx-1.5">
                  <div className="h-1.5 w-1 -mt-1.5 bg-gradient-to-t from-zinc-600 to-zinc-700 rounded-b-sm"></div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              {[...Array(10)].map((_, i) => (
                <div key={`bottom-${i}`} className="mx-1.5">
                  <div className="h-1.5 w-1 -mb-1.5 bg-gradient-to-b from-zinc-600 to-zinc-700 rounded-t-sm"></div>
                </div>
              ))}
            </div>

            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center z-20">
              {[...Array(3)].map((_, i) => (
                <div key={`left-${i}`} className="my-1.5">
                  <div className="w-2 h-1 -ml-2 bg-gradient-to-l from-zinc-500 to-zinc-600 rounded-r-sm shadow-sm"></div>
                </div>
              ))}
            </div>

            <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center z-20">
              {[...Array(3)].map((_, i) => (
                <div key={`right-${i}`} className="my-1.5">
                  <div className="w-2 h-1 -mr-2 bg-gradient-to-r from-zinc-500 to-zinc-600 rounded-l-sm shadow-sm"></div>
                </div>
              ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-zinc-900/10 mix-blend-overlay"></div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-cyan-500/5 animate-[scanLine_4s_ease-in-out_infinite]"></div>
            </div>

            <div className="absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
          </div>
        </div>

        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-zinc-700/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-zinc-700/30 rounded-full"></div>
        <div className="absolute top-2/5 left-1/3 right-1/3 h-px bg-emerald-950/40"></div>
        <div className="absolute bottom-2/5 left-1/3 right-1/3 h-px bg-emerald-950/40"></div>
        <div className="absolute left-2/5 top-1/3 bottom-1/3 w-px bg-emerald-950/40"></div>
        <div className="absolute right-2/5 top-1/3 bottom-1/3 w-px bg-emerald-950/40"></div>
      </div>
    </div>
  );
};

export default MicroController;
