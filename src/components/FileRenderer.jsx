import Hero from "../sections/Hero/Hero";
import README from "../sections/README/README";

import { useFile } from "../context/FileContext";

export default function FileRenderer() {

    const { activeFile } = useFile();

    switch (activeFile?.type) {

        case "readme":
            return <README />;

        case "projects":
            return <h1 className="text-white text-4xl">Projects</h1>;

        case "skills":
            return <h1 className="text-white text-4xl">Skills</h1>;

        case "contact":
            return <h1 className="text-white text-4xl">Contact</h1>;

        default:
            return <Hero />;
    }

}