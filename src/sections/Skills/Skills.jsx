import JsonViewer from "../../components/json/JsonViewer";

import skills from "../../data/skills";

export default function Skills() {

    return (

        <div className="max-w-5xl mx-auto py-10 px-8">

            <h1
                className="
                text-5xl
                font-bold
                text-white
                mb-10
                "
            >

                Skills.json

            </h1>

            <JsonViewer

                data={skills}

            />

        </div>

    );

}