import readme from "../../data/readme";

import {

    MarkdownHeading,

    MarkdownList,

} from "../../components/markdown";

export default function JourneySection() {

    return (

        <section className="mb-14">

            <MarkdownHeading level={2}>

                📈 Coding Journey

            </MarkdownHeading>

            <MarkdownList

                items={readme.journey.items}

            />

        </section>

    );

}