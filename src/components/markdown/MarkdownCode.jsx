export default function MarkdownCode({

    children

}) {

    return (

        <code
            className="
            bg-[#161B22]
            px-2
            py-1
            rounded
            text-blue-400
            font-mono
            "
        >

            {children}

        </code>

    );

}