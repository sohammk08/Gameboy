import React from "react";

function Screen({ powerOn, playerMode }) {
  return (
    <div>
      {/* LCD Screen */}
      <div className="relative bg-[#8bac0f] border-4 border-[#3a3a3a] rounded-lg h-45 overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]">
        {/* Screen Content */}
        {powerOn && (
          <div className="flex flex-col items-center justify-center h-full text-[#0f380f] font-mono">
            <div className="text-center mb-4">
              <div className="flex justify-center gap-0.5 mb-1">
                {["T", "E", "T", "R", "I", "S"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 bg-[#0f380f]/80 flex items-center justify-center text-[10px] font-bold text-[#8bac0f] shadow-sm"
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>

            {/* Menu */}
            <div className="mt-6 space-y-2">
              <div
                className={
                  playerMode === "1P"
                    ? "text-[11px] font-bold animate-pulse"
                    : "text-[11px] font-bold opacity-60 pl-4"
                }
              >
                {playerMode === "1P" && "▶"} 1 PLAYER
              </div>
              <div
                className={
                  playerMode === "2P"
                    ? "text-[11px] font-bold animate-pulse"
                    : "text-[11px] font-bold opacity-60 pl-4"
                }
              >
                {playerMode === "2P" && "▶"} 2 PLAYER
              </div>
            </div>
          </div>
        )}

        {/* Scanlines Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/5 to-transparent bg-size-[100%_4px] pointer-events-none"></div>
      </div>
    </div>
  );
}

export default Screen;
