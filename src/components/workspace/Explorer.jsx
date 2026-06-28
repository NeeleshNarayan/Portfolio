import explorerTree from "../../data/explorerTree";
import ExplorerNode from "./ExplorerNode";

export default function Explorer() {

    return (

        <aside
            className="
            w-64
            bg-[#181818]
            border-r
            border-[#2D2D30]
            overflow-y-auto
            "
        >

            <div className="px-4 py-3 text-xs text-gray-500 font-semibold">

                EXPLORER

            </div>

            <div className="px-2">

                {explorerTree.map((node) => (

                    <ExplorerNode

                        key={node.id}

                        node={node}

                    />

                ))}

            </div>

        </aside>

    );

}