import { useState } from "react";
import {
    VscChevronDown,
    VscChevronRight,
    VscFolder,
    VscFolderOpened,
    VscJson,
    VscMarkdown,
    VscFileCode,
    VscTerminal,
} from "react-icons/vsc";

import { useFile } from "../../context/FileContext";

export default function ExplorerNode({ node, depth = 0 }) {

    const { openFile, activeFile } = useFile();

    const [expanded, setExpanded] = useState(true);

    if (node.type === "folder") {

        return (

            <div>

                <button

                    onClick={() => setExpanded(!expanded)}

                    className="
                    flex
                    items-center
                    w-full
                    py-1
                    hover:bg-[#2A2D2E]
                    text-gray-300
                    "

                    style={{
                        paddingLeft: `${depth * 18}px`,
                    }}

                >

                    {expanded ? (
                        <VscChevronDown />
                    ) : (
                        <VscChevronRight />
                    )}

                    <span className="mx-1">
                        {expanded ? (
                            <VscFolderOpened />
                        ) : (
                            <VscFolder />
                        )}
                    </span>

                    {node.name}

                </button>

                {expanded &&
                    node.children.map((child) => (

                        <ExplorerNode

                            key={child.id}

                            node={child}

                            depth={depth + 1}

                        />

                    ))}

            </div>

        );

    }

    let Icon = VscFileCode;

    switch (node.extension) {

        case "md":
            Icon = VscMarkdown;
            break;

        case "json":
            Icon = VscJson;
            break;

        case "sh":
            Icon = VscTerminal;
            break;

        default:
            Icon = VscFileCode;

    }

    return (

        <button

            onClick={() => openFile(node.id)}

            className={`
                flex
                items-center
                w-full
                py-1
                hover:bg-[#2A2D2E]
                text-white

                ${
                    activeFile?.type === node.id
                        ? "bg-[#37373D]"
                        : ""
                }
            `}

            style={{
                paddingLeft: `${depth * 18 + 22}px`,
            }}

        >

            <Icon className="mr-2" />

            {node.name}

        </button>

    );

}