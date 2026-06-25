import { motion } from "framer-motion";
import profile from "../../data/profile"


export default function HeroRight() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
        >
            <div className="w-full max-w-md rounded-xl overflow-hidden border border-gray-700 bg-[#161B22] shadow-2xl">

                {/* Window Header */}

                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-[#1F242D]">

                    <div className="flex gap-2">

                        <div className="w-3 h-3 rounded-full bg-red-500"></div>

                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

                        <div className="w-3 h-3 rounded-full bg-green-500"></div>

                    </div>

                    <p className="text-sm text-gray-400">
                        profile.js
                    </p>

                    <div className="w-6"></div>

                </div>

                {/* Code */}

                <div className="p-6 font-mono text-sm leading-8">

                    <p>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-400">developer</span>{" "}
                        <span className="text-white">=</span>{" "}
                        <span className="text-white">{"{"}</span>
                    </p>

                    <p className="ml-5">
                        <span className="text-green-400">name</span>:
                        <span className="text-orange-400">
                            {" "}
                            {profile.personal.firstName}
                        </span>,
                    </p>

                    <p className="ml-5">
                        <span className="text-green-400">role</span>:
                        <span className="text-orange-400">
                            {" "}
                            {profile.professional.title}
                        </span>,
                    </p>

                    <p className="ml-5">
                        <span className="text-green-400">status</span>:
                        <span className="text-orange-400">
                            {" "}
                            "Open To Work"
                        </span>,
                    </p>

                    <p className="ml-5">
                        <span className="text-green-400">tech</span>:
                        <span className="text-white">
                            {" "}
                            [{profile.tech.map((item, index) =>(
                                <span key={item}>
                                    "{item}"
                                    {index !== profile.tech.length - 1 && ", "}
                                </span>
                            ))}]
                        </span>,
                    </p>

                    <p>
                        <span className="text-white">{"}"}</span>
                    </p>

                    {/* Profile */}

                    <div className="flex justify-center mt-8">

                        <img
                            src="/profile.png"
                            alt="Profile"
                            className="w-44 h-44 rounded-xl object-cover border-2 border-blue-500"
                        />

                    </div>

                </div>

            </div>
        </motion.div>
    );
}