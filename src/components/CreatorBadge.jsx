import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function CreatorBadge() {
  return (
    <span className="flex justify-center items-center h-14 bg-neutral-800 text-white px-3 py-2 rounded-lg text-base font-doto">
      Created by Sohamm Kulkarni
      <div className="flex -space-x-1.5 ml-4">
        {/* GitHub */}
        <div
          className="size-7 rounded-full bg-white ring-2 ring-neutral-700 cursor-pointer flex items-center justify-center"
          title="Open GitHub"
          onClick={() => window.open("https://github.com/sohammk08", "_blank")}
        >
          <FaGithub className="size-5.5 text-black" />
        </div>

        {/* X (Twitter) */}
        <div
          className="size-7 rounded-full bg-black ring-2 ring-neutral-700 cursor-pointer flex items-center justify-center"
          title="Open X"
          onClick={() => window.open("https://x.com/skulkarni2517", "_blank")}
        >
          <FaXTwitter className="size-5 p-0.5 text-white" />
        </div>

        {/* LinkedIn */}
        <div
          className="size-7 rounded-full bg-[#0A66C2] ring-2 ring-neutral-700 cursor-pointer flex items-center justify-center"
          title="Open LinkedIn"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/sohamm-kulkarni-1b418b292/",
              "_blank",
            )
          }
        >
          <FaLinkedinIn className="size-5 p-0.5 text-white" />
        </div>
      </div>
    </span>
  );
}

export default CreatorBadge;
