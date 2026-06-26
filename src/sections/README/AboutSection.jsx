import readme from "../../data/readme";

import {
    MarkdownHeading,
    MarkdownParagraph,
} from "../../components/markdown";

export default function AboutSection() {

    return (

        <section className="mb-14">

            <MarkdownHeading level={1}>

                👋 Hi, I'm Neelesh Narayan Mishra

            </MarkdownHeading>

            <MarkdownParagraph>

                {readme.about.paragraph}

            </MarkdownParagraph>

        </section>

    );

}