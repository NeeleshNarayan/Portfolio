import { FaGithub, FaLinkedin } from "react-icons/fa";
import socials from "../data/contact"
import contact from "../data/contact";

export default function Navbar() {
  return (
    <header className="h-12 bg-[#161B22] border-b border-gray-700 flex items-center justify-between px-5">

      <h1 className="text-gray-200 font-semibold tracking-wide">
        NeeleshOS
      </h1>

      <div className="flex gap-5 text-gray-400 text-lg">

        <a href={contact.github} target="_blank"><FaGithub className="hover:text-white cursor-pointer duration-300"/></a>

        <a href={contact.linkedin} target="_blank"><FaLinkedin className="hover:text-blue-400 cursor-pointer duration-300"/></a>

      </div>

    </header>
  );
}