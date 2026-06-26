import ActivityBar from "../../components/workspace/ActivityBar";
import Explorer from "../../components/workspace/Explorer";
import Editor from "../../components/workspace/Editor";
import StatusBar from "../../components/workspace/StatusBar";

export default function Workspace() {
  return (
    <section
      id="workspace"
      className="h-screen bg-[#0D1117]"
    >
      <div className="flex flex-col h-full">

        {/* Workspace */}
        <div className="flex flex-1 overflow-hidden">

          <ActivityBar />

          <Explorer />

          <Editor />

        </div>

        {/* Status Bar */}
        <StatusBar />

      </div>
    </section>
  );
}