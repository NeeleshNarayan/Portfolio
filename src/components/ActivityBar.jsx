import {
    VscFiles,
    VscSearch,
    VscSourceControl,
    VscExtensions
} from "react-icons/vsc";

const items = [
    { id: "explorer", icon: VscFiles },
    { id: "search", icon: VscSearch },
    { id: "git", icon: VscSourceControl },
    { id: "extensions", icon: VscExtensions }
];

export default function ActivityBar() {
    return (
        <div className="w-14 bg-[#181818] border-r border-gray-800 flex flex-col items-center py-4 gap-6">

            {items.map((item) => {

                const Icon = item.icon;

                return (

                    <button
                        key={item.id}
                        className="text-gray-400 hover:text-white transition"
                    >
                        <Icon size={24} />
                    </button>

                );

            })}

        </div>
    );
}