import Hero from "../Hero/Hero";

import readme from "../../data/readme";

import {
    MarkdownHeading,
    MarkdownParagraph,
    MarkdownList,
    MarkdownCode,
} from "../../components/markdown";

export default function README() {
    return (
        <div className="space-y-16">

            <Hero />

            <section>

                <MarkdownHeading level={2}>
                    {readme.about.heading}
                </MarkdownHeading>

                <MarkdownParagraph>
                    {readme.about.paragraph}
                </MarkdownParagraph>

            </section>

            <section>

                <MarkdownHeading level={2}>
                    {readme.currentFocus.heading}
                </MarkdownHeading>

                <MarkdownList
                    items={readme.currentFocus.items}
                />

            </section>

            <section>

                <MarkdownHeading level={2}>
                    {readme.techStack.heading}
                </MarkdownHeading>

                <div className="flex flex-wrap gap-3">

                    {readme.techStack.technologies.map((tech) => (

                        <MarkdownCode key={tech}>
                            {tech}
                        </MarkdownCode>

                    ))}

                </div>

            </section>

        </div>
    );
}