import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroStats from "../Hero/HeroStats";
import profile from "../../data/profile"
import resume from "../../../public/Neelesh_CV.pdf"
import contact from "../../data/contact";

export default function HeroLeft() {


    const scrollToWorkspace = () => {
        document
            .getElementById("workspace")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };


    return (
        <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >

            <p className="text-green-400 text-lg mb-4">
                {profile.personal.greeting}
            </p>

            <h1 className="text-6xl font-bold leading-tight text-white">

                I'm

                <br />

                <span className="text-blue-400">
                    {profile.personal.fullName}
                </span>

            </h1>

            <div className="mt-6 text-3xl font-semibold text-gray-300 h-12">

                <TypeAnimation

                    sequence={profile.professional.roles.flatMap(role => [role, 1800])}
                /*sequence={[
                    "React Developer",
                    1800,

                    "Frontend Developer",
                    1800,

                    "Problem Solver",
                    1800,

                    "UI Enthusiast",
                    1800,
                ]}

                repeat={Infinity}*/

                />

            </div>

            <p className="mt-8 max-w-xl text-gray-400 leading-8">

                {profile.professional.description}

            </p>

            <div className="flex gap-5 mt-10">

                <button
                    onClick={scrollToWorkspace}
                    className="bg-blue-600
                    hover:bg-blue-700
                    duration-300
                    px-7
                    py-3
                    rounded-lg
                    font-medium
                    text-white"
                >
                    Explore My Work
                </button>

                <button
                onClick={() => window.open(contact.resume)}
                    className="
                    bg-blue-600
                    hover:bg-blue-700
                    duration-300
                    px-7
                    py-3
                    rounded-lg
                    font-medium
                    text-white
                    "
                >
                    Download Resume
                </button>

                <button
                onClick={()=>window.open("https://github.com/NeeleshNarayan","_blank")}
                    className="
                    border
                    border-gray-600
                    hover:border-blue-400
                    hover:text-blue-400
                    duration-300
                    px-7
                    py-3
                    rounded-lg
                    text-white
                    "
                >
                    GITHUB
                </button>

            </div>

            <HeroStats />

        </motion.div>
    );
}