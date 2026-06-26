import {
  VscSourceControl,
  VscCheck,
  VscSymbolColor,
} from "react-icons/vsc";
import { useFile } from "../../context/FileContext";


export default function StatusBar() {
  const { activeFile } = useFile("README.md");

  const time = new Date().toLocaleTimeString([], {

    hour: "2-digit",

    minute: "2-digit"

  });


  return (


    <footer className="h-8 bg-[#007ACC] flex items-center justify-between px-4 text-xs text-white">

      {/* Left Side */}
      <div className="flex items-center gap-5">

        <div className="flex items-center gap-2">
          <VscSourceControl />
          <span>main</span>
        </div>

        <div className="flex items-center gap-2">
          <VscCheck />
          <span>No Errors</span>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        <div className="flex items-center gap-2">
          <VscSymbolColor />
          <span>{activeFile?.language || "No File"}</span>
        </div>

        <span>UTF-8</span>

        <span>Portfolio v1.0</span>

        <span>{time}</span>

      </div>

    </footer>
  );
}