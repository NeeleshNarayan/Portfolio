import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="h-12 bg-[#161B22] border-b border-gray-700 flex items-center justify-between px-5">

      <h1 className="text-gray-200 font-semibold tracking-wide">
        NeeleshOS
      </h1>

      <div className="flex gap-5 text-gray-400 text-lg">

        <FaGithub className="hover:text-white cursor-pointer duration-300"/>

        <FaLinkedin className="hover:text-blue-400 cursor-pointer duration-300"/>

      </div>

    </header>
  );
}