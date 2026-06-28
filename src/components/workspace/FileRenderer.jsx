import Hero from "../../sections/Hero/Hero";
import README from "../../sections/README/README";
import Projects from "../../sections/Projects/Projects"
import Skills from "../../sections/Skills/Skills";
import Contact from "../../sections/Contact/Contact"

import { useFile } from "../../context/FileContext";

export default function FileRenderer() {

    const { activeFile } = useFile();

    switch (activeFile?.type) {

        case "readme":
            return <README />;

        case "skills":
            return <Skills />;

        case "contact":
            return <Contact />;

        case "projects":
            return <Projects />;

        default:
            return <Hero />;
    }

}