import { useState } from "react";
import commands from "../../data/terminalCommands";

export default function Terminal() {

    const [history, setHistory] = useState([]);

    const [input, setInput] = useState("");

    function executeCommand() {

        const command = input.trim().toLowerCase();

        if (!command) return;

        const output = commands[command] || [
            `Command not found: ${command}`
        ];

        setHistory(prev => [

            ...prev,

            {
                command,

                output

            }

        ]);

        setInput("");

    }

    return (

        <div
            className="
            h-72
            bg-[#1E1E1E]
            border-t
            border-[#333]
            p-4
            font-mono
            text-sm
            overflow-y-auto
            "
        >

            {history.map((item, index) => (

                <div key={index}>

                    <div className="text-green-400">

                        guest@neelesh:~$ {item.command}

                    </div>

                    {item.output.map((line, i) => (

                        <div
                            key={i}
                            className="text-gray-300"
                        >

                            {line}

                        </div>

                    ))}

                </div>

            ))}

            <div className="flex mt-4">

                <span className="text-green-400 mr-2">

                    guest@neelesh:~$

                </span>

                <input

                    autoFocus

                    value={input}

                    onChange={(e) =>
                        setInput(e.target.value)
                    }

                    onKeyDown={(e) => {

                        if (e.key === "Enter") {

                            executeCommand();

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

    );

}