import readme from "../../data/readme";

import {

    MarkdownHeading,

    MarkdownCode,

} from "../../components/markdown";

export default function TechStackSection() {

    return (

        <section className="mb-14">

            <MarkdownHeading level={2}>

                🛠 Tech Stack

            </MarkdownHeading>

            <div className="flex flex-wrap gap-3">

                {readme.techStack.map((tech) => (

                    <MarkdownCode
                        key={tech}
                    >

                        {tech}

                    </MarkdownCode>

                ))}

            </div>

        </section>

    );

}