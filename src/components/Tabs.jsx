import files from "../data/files";
import { useFile } from "../context/FileContext";

export default function Tabs() {

    const { activeFile, setActiveFile } = useFile();

    return (

        <div className="flex h-12 border-b border-gray-700 bg-[#161B22]">

            {files.map((file) => (

                <button

                    key={file.id}

                    onClick={() => setActiveFile(file.type)}

                    className={`
                      flex items-center gap-2
                        px-6
                        border-r
                        border-gray-700

                        ${
                            activeFile === file.type
                                ? "bg-[#1F242D] text-white"
                                : "text-gray-400"
                        }
                    `}
                >

                    {file.name}

                </button>

            ))}

        </div>

    );

}