import Tabs from "./Tabs";
import FileRenderer from "./FileRenderer";

export default function Editor() {

  return (

    <div className="flex-1 flex flex-col overflow-hidden bg-[#0D1117]">

      <Tabs />

      <div className="flex-1 overflow-y-auto p-10">

        <FileRenderer/>

      </div>

    </div>

  );

}