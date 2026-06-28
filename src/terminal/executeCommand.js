import commands from "./commands";

export default function executeCommand(
    command,
    {
        openFile,
        setHistory,
        setInput,
    }
) {
    const cmd = command.trim().toLowerCase();

    if (!cmd) return;

    if (!commands[cmd]) {
        setHistory((prev) => [
            ...prev,
            `guest@neelesh:~$ ${cmd}`,
            `Command not found: ${cmd}`,
            "Type 'help' to see available commands.",
            "",
        ]);

        setInput("");
        return;
    }

    const current = commands[cmd];

    switch (current.type) {
        case "file":
            openFile(current.target);

            setHistory((prev) => [
                ...prev,
                `guest@neelesh:~$ ${cmd}`,
                `Opening ${current.target}...`,
                "",
            ]);

            break;

        case "url":
            window.open(current.target, "_blank");

            setHistory((prev) => [
                ...prev,
                `guest@neelesh:~$ ${cmd}`,
                `Opening ${cmd}...`,
                "",
            ]);

            break;

        case "clear":
            setHistory([]);
            break;

        default:
            break;
    }

    if (cmd === "help") {
        setHistory((prev) => [
            ...prev,
            "guest@neelesh:~$ help",
            "",
            ...Object.keys(commands),
            "",
        ]);
    }

    setInput("");
}