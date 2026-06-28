import { useState } from "react";

import ActivityBar from "../../components/workspace/ActivityBar";
import Explorer from "../../components/workspace/Explorer";
import Editor from "../../components/workspace/Editor";
import Terminal from "../../components/workspace/Terminal";
import StatusBar from "../../components/workspace/StatusBar";

export default function Workspace() {

    const [terminalOpen, setTerminalOpen] = useState(false);

    return (

        <section
            id="workspace"
            className="h-screen bg-[#0D1117]"
        >

            <div className="flex flex-col h-full">

                {/* Main Workspace */}

                <div className="flex flex-1 overflow-hidden">

                    <ActivityBar />

                    <Explorer />

                    <Editor />

                </div>

                {/* Terminal */}

                <Terminal
                    isOpen={terminalOpen}
                    onToggle={() => setTerminalOpen(!terminalOpen)}
                />

                {/* Status Bar */}

                <StatusBar />

            </div>

        </section>

    );

}