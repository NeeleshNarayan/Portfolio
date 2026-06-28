import contact from "../../data/contact";

export default function Contact() {

    const lines = [
        "#!/bin/bash",
        "",
        'echo "Initializing Contact..."',
        'echo "Loading Communication Channels..."',
        "",
        `echo "GitHub : ${contact.github}"`,
        `echo "LinkedIn : ${contact.linkedin}"`,
        `echo "Email : ${contact.email}"`,
        "",
        'echo "Ready!"'
    ];

    return (

        <div className="max-w-5xl mx-auto p-10">

            <h1 className="text-5xl font-bold text-white mb-10">

                Contact.sh

            </h1>

            <pre className="
                bg-[#161B22]
                p-8
                rounded-lg
                text-green-400
                font-mono
                overflow-x-auto
            ">

                {lines.join("\n")}

            </pre>

        </div>

    );

}