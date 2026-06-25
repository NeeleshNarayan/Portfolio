import Hero from "../sections/Hero/Hero";

import { useFile } from "../context/FileContext";

export default function FileRenderer() {

    const { activeFile } = useFile();

    switch (activeFile) {

        case "readme":
            return <Hero />;

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