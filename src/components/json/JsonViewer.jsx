import JsonLine from "./JsonLine";

export default function JsonViewer({

    data

}) {

    return (

        <div
            className="
            bg-[#0D1117]
            rounded-lg
            font-mono
            text-sm
            "
        >

            <div className="text-white">

                {"{"}

            </div>

            {

                Object.entries(data).map(

                    ([key, value], index) => (

                        <div key={key}>

                            <JsonLine

                                label={key}

                                isArray

                                comma={
                                    index !==
                                    Object.keys(data).length - 1
                                }

                            />

                            {

                                value.map((item) => (

                                    <div

                                        key={item}

                                        className="
                                        pl-12
                                        text-[#CE9178]
                                        leading-8
                                        "

                                    >

                                        "{item}",

                                    </div>

                                ))

                            }

                            <div className="pl-6">

                                ]

                            </div>

                        </div>

                    )

                )

            }

            <div>

                {"}"}

            </div>

        </div>

    );

}