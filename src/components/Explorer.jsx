import files from "../data/files";
import { useFile } from "../context/FileContext";

import {
    VscJson,
    VscMarkdown,
    VscCode,
    VscTerminalBash
} from "react-icons/vsc";

export default function Explorer() {

    
    const {
    activeFile,
    openFile
} = useFile();

    const getIcon = (type) => {

        switch (type) {

            case "readme":
                return <VscMarkdown />;

            case "projects":
                return <VscCode />;

            case "skills":
                return <VscJson />;

            case "contact":
                return <VscTerminalBash />;

            default:
                return <VscCode />;
        }

    };

    return (

        <div className="w-64 bg-[#111111]">

            <div className="px-4 py-3 border-b border-gray-800 text-sm font-semibold tracking-wide text-gray-300">

                EXPLORER

            </div>

            <div className="p-2">

                {files.map(file => (

                    <button

                        key={file.id}

                        onClick={() => openFile(file.type)}

                        className={`

                        flex
                        items-center
                        gap-3
                        w-full
                        px-3
                        py-2
                        rounded-md
                        transition

                        ${
                            activeFile === file.type
                                ? "bg-[#2A2D2E] text-white"
                                : "text-gray-400 hover:bg-[#202020]"
                        }

                        `}
                    >

                        {getIcon(file.type)}

                        {file.name}

                    </button>

                ))}

            </div>

        </div>

    );

}