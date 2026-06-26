import { FaGithub, FaLinkedin } from "react-icons/fa";

import {

    MarkdownHeading,

} from "../../components/markdown";

export default function ConnectSection() {

    return (

        <section className="mb-14">

            <MarkdownHeading level={2}>

                📫 Connect With Me

            </MarkdownHeading>

            <div className="flex gap-5 mt-5">

                <FaGithub
                    size={28}
                    className="text-gray-600 cursor-pointer hover:text-white transition"
                />

                <FaLinkedin
                    size={28}
                    className="text-gray-600 cursor-pointer hover:text-blue-400 transition"
                />

            </div>

        </section>

    );

}