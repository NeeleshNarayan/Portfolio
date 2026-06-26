import readme from "../../data/readme";

import {

    MarkdownHeading,

    MarkdownList,

} from "../../components/markdown";

export default function FocusSection() {

    return (

        <section className="mb-14">

            <MarkdownHeading level={2}>

                🎯 Current Focus

            </MarkdownHeading>

            <MarkdownList

                items={readme.focus.items}

            />

        </section>

    );

}