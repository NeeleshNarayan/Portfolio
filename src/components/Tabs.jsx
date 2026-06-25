import files from "../data/files";
import { useFile } from "../context/FileContext";

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
                            flex
                            items-center
                            px-4
                            border-r
                            border-gray-700
                            cursor-pointer

                            ${
                                activeFile?.type === file.type
                                    ? "bg-[#1F242D]"
                                    : ""
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