import { motion } from "framer-motion";

export default function AchievementBadge({

    icon,
    title,
    subtitle

}) {

    return (

        <motion.div

            whileHover={{
                y: -6,
                scale: 1.03
            }}

            transition={{
                duration: .2
            }}

            className="
            bg-[#161B22]
            border
            border-gray-700
            rounded-lg
            p-5
            w-48
            "

        >

            <div className="text-3xl">

                {icon}

            </div>

            <h3
                className="
                text-white
                text-xl
                font-bold
                mt-3
                "
            >

                {title}

            </h3>

            <p
                className="
                text-gray-400
                mt-1
                "
            >

                {subtitle}

            </p>

        </motion.div>

    );

}