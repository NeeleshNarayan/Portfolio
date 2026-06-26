import files from "../../data/files";
import { useFile } from "../../context/FileContext";

export default function Tabs() {

    const {
        openedFiles,
        activeFile,
        setActiveFile,
        closeFile
    } = useFile();

    return (

        <div className="flex h-12 bg-[#161B22] border-b border-gray-700">

            {openedFiles.map((file) => {

                return (

                    <div

                        key={file.id}

                        className={`
                            h-full
                            px-4
                            flex
                            items-center
                            gap-3
                            border-r
                            border-[#2D2D30]

                            ${activeFile?.type === file.type
                                ? "bg-[#1E1E1E] border-t-2 border-t-[#007ACC]"
                                : "bg-[#2D2D30]"
                            }
                        `}

                        onClick={() =>
                            setActiveFile(file)
                        }

                    >

                        <span className="mr-3">

                            {file.name}

                        </span>

                        <button

                            onClick={(e) => {

                                e.stopPropagation();

                                closeFile(file.type);

                            }}

                            className="
                                hover:text-red-400
                            "

                        >

                            ×

                        </button>

                    </div>

                );

            })}

        </div>

    );

}