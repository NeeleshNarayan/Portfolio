export default function JsonLine({

    indent = 0,

    label,

    value,

    comma = false,

    isArray = false,

}) {

    return (

        <div
            className="font-mono text-[15px] leading-8"
            style={{
                paddingLeft: `${indent * 24}px`,
            }}
        >

            <span className="text-[#9CDCFE]">

                "{label}"

            </span>

            <span className="text-white">

                :

            </span>

            {

                isArray

                ?

                <span className="text-[#CE9178]">

                    [

                </span>

                :

                <span className="text-[#CE9178]">

                    "{value}"

                </span>

            }

            {

                comma &&

                <span className="text-white">

                    ,

                </span>

            }

        </div>

    );

}