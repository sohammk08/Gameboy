import { useState } from "react";
import Screen from "./components/Screen";
import Footer from "./components/Footer";

const App = () => {
  const [powerOn, setPowerOn] = useState(true);
  const [playerMode, setPlayerMode] = useState("1P");

  return (
    <>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 font-sans">
        <div className="relative w-90 h-148 bg-[#dbd9c6] rounded-b-[30px] rounded-t-lg border-r-4 border-b-4 border-[#b8b6a8] shadow-2xl">
          {/* Power switch */}
          <div className="absolute top-4 left-12 ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-13 h-3.5 bg-[#b8b6a8] rounded-full border border-[#9e9c8b] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
              <div className="absolute inset-0 flex items-center justify-between px-1.5 text-[5px] font-bold text-[#8a8878] leading-none">
                <span className="drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
                  OFF
                </span>
                <span className="drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
                  ON
                </span>
              </div>

              {/* Sliding Switch */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-7.5 h-[0.82rem] bg-linear-to-b from-[#e8e6d5] via-[#dbd9c6] to-[#c5c3b2] rounded-xl border border-[#999888] shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.6)] cursor-pointer transition-all duration-150"
                style={{ left: powerOn ? "21px" : "0px" }}
                onClick={() => setPowerOn(!powerOn)}
              >
                {/* Center ridge on knob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-0.5 bg-[#999888] rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Screen Housing */}
          <div className="mt-7 mx-5 p-5 bg-[#75748b] rounded-t-3xl rounded-b-xl border-b-4 border-[#5e5d72] shadow-inner relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-3 opacity-80">
              <div className="flex flex-col gap-0.5">
                <div className="h-0.5 w-18 bg-purple-400"></div>
                <div className="h-0.5 w-18 bg-blue-400"></div>
              </div>
              <div className="text-[9px] text-indigo-100 font-medium tracking-wider">
                DOT MATRIX WITH STEREO SOUND
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="h-0.5 w-8 bg-blue-400"></div>
                <div className="h-0.5 w-8 bg-purple-400"></div>
              </div>
            </div>

            <Screen powerOn={powerOn} playerMode={playerMode} />
          </div>

          {/* Branding */}
          <div className="flex items-baseline justify-center mt-3 mb-8">
            <span className="text-[#2a2a9c] font-black text-2xl ml-1 italic tracking-tight">
              GAME BOY
            </span>
            <span className="text-[#2a2a9c] text-[8px] font-bold ml-0.5">
              ™
            </span>
          </div>

          {/* Controls */}
          <div className="px-8">
            <div className="flex justify-between items-start">
              <div className="relative w-28 h-28 mt-2 cursor-pointer group active:translate-y-0.5 transition-transform duration-100">
                {/* Horizontal bar */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-7 bg-[#1a1a1a] rounded-sm shadow-[0_3px_0_#0a0a0a,0_4px_4px_rgba(0,0,0,0.3)] group-active:shadow-[0_1px_0_#0a0a0a,0_2px_2px_rgba(0,0,0,0.3)] transition-all"></div>
                {/* Vertical bar */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-full bg-[#1a1a1a] rounded-sm shadow-[0_3px_0_#0a0a0a,0_4px_4px_rgba(0,0,0,0.3)] group-active:shadow-[0_1px_0_#0a0a0a,0_2px_2px_rgba(0,0,0,0.3)] transition-all"></div>
                {/* Center Indent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-[#1a1a1a] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] pointer-events-none">
                  <div className="w-full h-full rounded-full bg-linear-to-br from-[#2a2a2a]/20 via-transparent to-black/40"></div>
                </div>
                {/* Directional Indents */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black/50 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black/50 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-black/50 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-black/50 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>

                {/* up */}
                <div
                  onClick={() =>
                    playerMode === "1P"
                      ? setPlayerMode("2P")
                      : setPlayerMode("1P")
                  }
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-10"
                />

                {/* down */}
                <div
                  onClick={() =>
                    playerMode === "1P"
                      ? setPlayerMode("2P")
                      : setPlayerMode("1P")
                  }
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-10"
                />

                {/* left */}
                <div
                  onClick={() => alert("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-7"
                />

                {/* right */}
                <div
                  onClick={() => alert("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-7"
                />
              </div>

              {/* A/B Buttons */}
              <div className="flex gap-4 transform -rotate-12 -mt-2">
                <div className="flex flex-col items-center mt-6">
                  <button className="w-12 h-12 rounded-full bg-[#8b1c4e] shadow-[0_4px_0_#5a0f30,0_5px_5px_rgba(0,0,0,0.3)] active:shadow-[0_1px_0_#5a0f30,0_1px_1px_rgba(0,0,0,0.3)] active:translate-y-0.75 transition-all border-b-2 border-[#a32860]"></button>
                  <span className="text-[#2a2a9c] text-sm font-bold mt-2 italic">
                    B
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <button className="w-12 h-12 rounded-full bg-[#8b1c4e] shadow-[0_4px_0_#5a0f30,0_5px_5px_rgba(0,0,0,0.3)] active:shadow-[0_1px_0_#5a0f30,0_1px_1px_rgba(0,0,0,0.3)] active:translate-y-0.75 transition-all border-b-2 border-[#a32860]"></button>
                  <span className="text-[#2a2a9c] text-sm font-bold mt-2 italic">
                    A
                  </span>
                </div>
              </div>
            </div>

            {/* Select/Start Buttons */}
            <div className="flex justify-center gap-4 mt-8 transform -rotate-6">
              <div className="flex flex-col items-center">
                <button className="w-14 h-4 bg-[#9ea096] rounded-full shadow-[0_3px_0_#7a7a72,0_3px_3px_rgba(0,0,0,0.2)] active:shadow-[0_1px_0_#7a7a72] active:translate-y-0.5 transition-all border-b border-gray-500"></button>
                <span className="text-[#2a2a9c] text-[10px] font-bold mt-2 tracking-wider italic">
                  SELECT
                </span>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-14 h-4 bg-[#9ea096] rounded-full shadow-[0_3px_0_#7a7a72,0_3px_3px_rgba(0,0,0,0.2)] active:shadow-[0_1px_0_#7a7a72] active:translate-y-0.5 transition-all border-b border-gray-500"></button>
                <span className="text-[#2a2a9c] text-[10px] font-bold mt-2 tracking-wider italic">
                  START
                </span>
              </div>
            </div>

            {/* Speaker Grille */}
            <div className="flex justify-end gap-1.5 mt-6 -mr-8 transform -rotate-30">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-12 bg-[#9ea096] rounded-full shadow-[inset_1px_0_2px_rgba(0,0,0,0.3)] border-r border-gray-400/30"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
