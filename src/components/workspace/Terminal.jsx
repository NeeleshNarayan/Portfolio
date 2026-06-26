import { useState, useRef, useEffect } from "react";
import { useFile } from "../../context/FileContext";
import executeCommand from "../../terminal/executeCommand";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

export default function Terminal({

    isOpen,

    onToggle,

}) {

    const { openFile } = useFile();

    const [history, setHistory] = useState([

        "Welcome to NeeleshOS 🚀",

        "",

        "Type 'help' to get started.",

        "",

    ]);

    const [input, setInput] = useState("");

    const terminalRef = useRef(null);

    useEffect(() => {

        terminalRef.current?.scrollTo({

            top: terminalRef.current.scrollHeight,

            behavior: "smooth",

        });

    }, [history]);

    return (

        <div
            className="
            bg-[#181818]
            border-t
            border-[#333]
            "
        >

            {/* Header */}

            <button

                onClick={onToggle}

                className="
                w-full
                h-10
                px-4
                flex
                items-center
                gap-2
                bg-[#252526]
                hover:bg-[#2D2D30]
                text-gray-300
                text-sm
                font-medium
                "

            >

                <span className="text-base">
                    {isOpen ? <VscChevronDown /> : <VscChevronRight />}
                </span>

                <span>

                    TERMINAL

                </span>

            </button>

            {/* Body */}

            <div

                className={`
                overflow-hidden
                transition-all
                duration-300
                ${isOpen ? "h-64" : "h-0"}
                `}

            >

                <div

                    ref={terminalRef}

                    className="
                    h-full
                    overflow-y-auto
                    p-4
                    font-mono
                    text-sm
                    "

                >

                    {history.map((line, index) => (

                        <div

                            key={index}

                            className="text-gray-300 whitespace-pre-wrap"

                        >

                            {line}

                        </div>

                    ))}

                    <div className="flex mt-3">

                        <span className="text-green-400 mr-2">

                            guest@neelesh:~$

                        </span>

                        <input

                            value={input}

                            onChange={(e) =>
                                setInput(e.target.value)
                            }

                            onKeyDown={(e) => {

                                if (e.key === "Enter") {

                                    executeCommand(input, {

                                        openFile,

                                        setHistory,

                                        setInput,

                                    });

                                }

                            }}

                            className="
                            flex-1
                            bg-transparent
                            outline-none
                            text-white
                            "

                        />

                    </div>

                </div>

            </div>

        </div>

    );

}