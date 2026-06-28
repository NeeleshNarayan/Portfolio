import { FaGithub, FaLinkedin } from "react-icons/fa";

import {

    MarkdownHeading,

} from "../../components/markdown";
import contact from "../../data/contact";

export default function ConnectSection() {

    return (

        <section className="mb-14">

            <MarkdownHeading level={2}>

                📫 Connect With Me

            </MarkdownHeading>

            <div className="flex gap-5 mt-5">
                <a href={contact.github} target="_blank">
                <FaGithub
                    size={28}
                    className="text-gray-600 cursor-pointer hover:text-white transition"
                /></a>

                <a href={contact.linkedin} target="_blank">
                <FaLinkedin
                    size={28}
                    className="text-gray-600 cursor-pointer hover:text-blue-400 transition"
                /></a>

            </div>

        </section>

    );

}