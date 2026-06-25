export default function MarkdownList({

    items

}) {

    return (

        <ul className="space-y-3">

            {items.map((item) => (

                <li
                    key={item}
                    className="
                    text-gray-400
                    "
                >

                    • {item}

                </li>

            ))}

        </ul>

    );

}