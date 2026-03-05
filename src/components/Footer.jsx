import CreatorBadge from "./CreatorBadge";

function Footer() {
  return (
    <footer className="bg-[#dcdcc9] p-8 relative shadow-[0_10px_40px_rgba(0,0,0,0.15),inset_0_2px_0_rgba(255,255,255,0.3)] mx-auto font-sans select-none">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center justify-center gap-2 text-[#1e3295] opacity-80">
            <span className="font-black italic tracking-tight text-5xl">
              GAME BOY
            </span>
          </div>
          <p className="text-gray-800 text-sm mt-1 text-center font-mrat font-semibold">
            Play Tetris Online
          </p>
        </div>
        <p className="text-gray-800 text-sm mt-1 text-center font-mrat font-semibold">
          Project Gameboy: Users can play a web-based version of Tetris.
        </p>
        <CreatorBadge />
      </div>
    </footer>
  );
}
export default Footer;
