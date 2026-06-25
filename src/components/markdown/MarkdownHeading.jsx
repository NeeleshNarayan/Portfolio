export default function MarkdownHeading({

    level = 1,

    children

}) {

    const Tag = `h${level}`;

    const classes = {

        1: "text-5xl font-bold text-white mb-8",

        2: "text-3xl font-bold text-white mt-14 mb-6",

        3: "text-2xl font-semibold text-white mt-10 mb-4",

    };

    return (

        <Tag className={classes[level]}>

            {children}

        </Tag>

    );

}